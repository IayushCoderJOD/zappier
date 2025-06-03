// components/nodes/GmailNode.js
import React from "react";
import CustomNode from "../MainZap/CustomNode";
import { SlackIcon } from "lucide-react";

const Slack = ({ data }) => {
  const gmailData = {
    ...data,
    label: data.label || "Slack",
    description: data.description || "New email received",
    icon: <SlackIcon color="rgb(180, 168, 0)" size={20} />,
    containerStyle: {
      backgroundColor: "rgb(255, 253, 218)",
      borderLeft: "4px solid rgb(234, 222, 53)",
      borderRadius: 8,
    },
    iconWrapperStyle: {
      backgroundColor: "rgb(255, 249, 169)",
    },
    labelStyle: {
      color: "rgb(180, 168, 0)",
    },
  };

  return <CustomNode data={gmailData} />;
};

export default Slack;
