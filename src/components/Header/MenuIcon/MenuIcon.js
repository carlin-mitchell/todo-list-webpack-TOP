import Element from "../../Element";
import MenuIconSrc from "./assets/menu-white.png";

// DYNAMIC VARIABLES

// LINK STRINGS

// ANIMATION METHODS
function toggleSidebar() {
  const sideBar = document.querySelector("#side-bar");

  sideBar.classList.toggle("visible");
  sideBar.classList.toggle("hidden");
  return;
}

// COMPONENT
const MenuIcon = () => {
  const icon = Element("img", {
    id: "menu-icon",
    classList: "hidden",
    src: MenuIconSrc,
    onclick: toggleSidebar,
  });
  return icon;
};

export default MenuIcon;
