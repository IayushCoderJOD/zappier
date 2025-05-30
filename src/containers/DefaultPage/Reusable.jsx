
import {
  FaHome, FaMagic, FaCogs, FaTh, FaBoxOpen, FaWrench,
  FaMicrosoft,
} from "react-icons/fa";
import {
  SiGooglesheets, SiGmail, SiSlack, SiGooglecalendar, SiGoogledrive,
  SiNotion, SiHubspot, SiGoogleforms, SiMailchimp,
  SiTypeform,
} from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { SiCalendly } from "react-icons/si";


export const appsList = [
    { label: "Google Sheets", icon: <SiGooglesheets /> },
    { label: "Gmail", icon: <SiGmail /> },
    { label: "Slack", icon: <SiSlack /> },
    { label: "Google Calendar", icon: <SiGooglecalendar /> },
    { label: "Google Drive", icon: <SiGoogledrive /> },
    { label: "Notion", icon: <SiNotion /> },
    { label: "HubSpot", icon: <SiHubspot /> },
    { label: "Google Forms", icon: <SiGoogleforms /> },
    { label: "Mailchimp", icon: <SiMailchimp /> },
    { label: "Facebook Lead Ads", icon: <FaFacebook />, disabled: true },
    { label: "Calendly", icon: <SiCalendly /> },
    { label: "Typeform", icon: <SiTypeform /> },
    { label: "Microsoft Outlook", icon: <FaMicrosoft /> },
  ];



  export const sidebarMenu = [
    { label: "Home", icon: <FaHome /> },
    { label: "Apps", icon: <FaTh /> },
    { label: "AI", icon: <FaMagic /> },
    { label: "Flow controls", icon: <FaCogs /> },
    { label: "Utilities", icon: <FaWrench /> },
    { label: "Products", icon: <FaBoxOpen /> },
    { label: "Custom", icon: <FaWrench /> },
  ];
  
 
  export const iconMap = {
    gmail: <SiGmail color="#ea4335" size={20} />,
    slack: <SiSlack color="#4a154b" size={20} />,
    notion: <SiNotion color="#000" size={20} />,
    // github: <SiGithub color="#000" size={20} />,
  };
  