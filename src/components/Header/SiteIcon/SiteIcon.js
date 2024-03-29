import Element from "../../Element";
import SiteIconSrc from "./assets/check-logo-white.svg";

// COMPONENT
const SiteIcon = () => {
  const icon = Element("img", { src: SiteIconSrc, id: "site-icon" });
  return icon;
};

export default SiteIcon;
