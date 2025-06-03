
import {
  FaHome, FaMagic, FaCogs, FaTh, FaBoxOpen, FaWrench,
  FaMicrosoft,
  FaExpandArrowsAlt,
} from "react-icons/fa";
import {
  SiGooglesheets, SiGmail, SiSlack, SiGooglecalendar, SiGoogledrive,
  SiNotion, SiHubspot, SiGoogleforms, SiMailchimp,
  SiTypeform,
} from "react-icons/si";

  export const appsList = [
    {
      label: "Gmail",
      icon: <SiGmail />,
      type: "gmailNode", // custom node type
      description: "New email received",
    },
    {
      label: "Slack",
      icon: <SiSlack />,
      type: "slackNode",
      description: "New message in Slack",
    },
    {
      label: "Google Calendar",
      icon: <SiGooglecalendar />,
      type: "calendarNode",
      description: "New calendar event",
    },
    { label: "Webhook", icon: <FaExpandArrowsAlt /> ,
      type: "webhookNode",
      description: "New Webhook event",},
  ];
  


  export const sidebarMenu = [
    { label: "Home", icon: <FaHome /> },
    { label: "Apps", icon: <FaTh /> },
    { label: "Products", icon: <FaBoxOpen /> },
    { label: "Custom", icon: <FaWrench /> },
  ];
  
 
  export const iconMap = {
    gmail: <SiGmail color="#ea4335" size={20} />,
    slack: <SiSlack color="#4a154b" size={20} />,
    notion: <SiNotion color="#000" size={20} />,
    // github: <SiGithub color="#000" size={20} />,
  };
  