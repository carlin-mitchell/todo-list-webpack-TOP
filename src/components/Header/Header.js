import Element from "../Element";

import SiteTitle from "./SiteTitle/SiteTitle";

import MenuIcon from "./MenuIcon/assets/menu-white.png";

// DYNAMIC VARIABLES

// LINK STRINGS

// ANIMATION METHODS

// COMPONENT
const Component = () => {
  const parentContainer = Element("header");

  const img = Element("img", { id: "menu-icon", src: MenuIcon });

  parentContainer.appendChild(SiteTitle());
  parentContainer.appendChild(img);

  return parentContainer;
};

export default Component;
