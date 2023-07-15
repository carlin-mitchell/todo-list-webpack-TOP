import Element from "../../Element";
import MenuIconSrc from "./assets/menu-white.png";

import ui from "../../../managers/uiManager";

// COMPONENT
const MenuIcon = () => {
  const icon = Element("img", {
    id: "menu-icon",
    classList: "hidden",
    src: MenuIconSrc,
    onclick: ui.toggleSidebar,
  });
  return icon;
};

export default MenuIcon;
