// components/nodes/GmailNode.js
import React from "react";
import { SiGmail } from "react-icons/si";
import CustomNode from "../MainZap/CustomNode";

const GmailNode = ({ data }) => {
  const gmailData = {
    ...data,
    label: data.label || "Gmail",
    description: data.description || "New email received",
    icon: <SiGmail color="#ea4335" size={20} />,
    containerStyle: {
      backgroundColor: "#fff3f2",
      borderLeft: "4px solid #ea4335",
      borderRadius: 8,
    },
    iconWrapperStyle: {
      backgroundColor: "#fbe9e7",
    },
    labelStyle: {
      color: "#ea4335",
    },
  };

  return <CustomNode data={gmailData} />;
};

export default GmailNode;
