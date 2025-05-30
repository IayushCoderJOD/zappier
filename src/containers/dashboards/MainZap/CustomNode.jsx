import React from "react";
import { Handle, Position } from "@xyflow/react";
import { SiGmail } from "react-icons/si"; 

const CustomNode = ({ data }) => {
    console.log(data,"data")
    return (
        <div
            style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                padding: "12px 16px",
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                border: "1px solid #ddd",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                minWidth: 240,
                fontFamily: "Inter, sans-serif",
            }}
        >
            <Handle
                type="target"
                position={Position.Top}
                style={{ background: "#ccc" }}
            />

            <div
                style={{
                    width: 40,
                    height: 40,
                    backgroundColor: "#f4f4f4",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 12,
                }}
            >
                {data.icon || <SiGmail color="#ea4335" size={20} />} 
            </div>

            <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: "14px" }}>
                    {data.label || "Gmail"}
                </div>
                <div style={{ fontSize: "12px", color: "#666" }}>
                    {data.description || "New email received"}
                </div>
            </div>

            <Handle
                type="source"
                position={Position.Bottom}
                style={{ background: "#ccc" }}
            />
        </div>
    );
};

export default CustomNode;
