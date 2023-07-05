import Element from "../Element";

import SiteTitle from "./SiteTitle/SiteTitle";

import MenuIcon from "./MenuIcon/MenuIcon";

// DYNAMIC VARIABLES

// LINK STRINGS

// ANIMATION METHODS

// COMPONENT
const Component = () => {
  const parentContainer = Element("header");

  parentContainer.appendChild(SiteTitle());
  parentContainer.appendChild(MenuIcon());

  return parentContainer;
};

export default Component;
