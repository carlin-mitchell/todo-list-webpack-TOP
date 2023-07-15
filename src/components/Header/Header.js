import Element from "../Element";
import SiteIcon from "./SiteIcon/SiteIcon";
import SiteTitle from "./SiteTitle/SiteTitle";
import MenuIcon from "./MenuIcon/MenuIcon";

// COMPONENT
const Component = () => {
  const parentContainer = Element("header");

  parentContainer.appendChild(SiteIcon());
  parentContainer.appendChild(SiteTitle());
  parentContainer.appendChild(MenuIcon());

  return parentContainer;
};

export default Component;
