import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { appsList, sidebarMenu } from "../DefaultPage/Reusable";


export const ZapSidebar = ({ onNodeDragStart }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const handleDragStart = (event, app) => {
    event.dataTransfer.setData("application/reactflow", app.label);
    if (onNodeDragStart) {
      onNodeDragStart(app);
    }
  };

  return (
    <Col
      md={3}
      style={{
        height: "100vh",
        backgroundColor: "#f8f6f3",
        borderRight: "1px solid #ddd",
        padding: "10px",
        overflowY: "auto",
      }}
    >
      <div>
        {sidebarMenu.map((item, index) => (
          <div key={index}>
            <div
              onClick={() => setActiveTab(item.label)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 12px",
                marginBottom: "6px",
                borderRadius: "8px",
                fontWeight: activeTab === item.label ? "bold" : "normal",
                backgroundColor: activeTab === item.label ? "#fff4e5" : "transparent",
                color: activeTab === item.label ? "#e57c00" : "#333",
                cursor: "pointer",
              }}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </div>

            {/* Show app list when "Apps" tab is active */}
            {item.label === "Apps" && activeTab === "Apps" && (
              <div style={{ paddingLeft: 12 }}>
                {appsList.map((app, idx) => (
                  <div
                    key={idx}
                    draggable={!app.disabled}
                    onDragStart={(e) => handleDragStart(e, app)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 10px",
                      borderRadius: 6,
                      backgroundColor: app.disabled ? "#eee" : "#fff",
                      color: app.disabled ? "#999" : "#000",
                      cursor: app.disabled ? "not-allowed" : "grab",
                      marginBottom: 6,
                      fontSize: "14px",
                      border: "1px solid #ddd",
                    }}
                  >
                    <span>{app.icon}</span>
                    <span>{app.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Col>
  );
};
