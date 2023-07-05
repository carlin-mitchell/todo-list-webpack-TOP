import Element from "../../Element";
import MenuIconSrc from "./assets/menu-white.png";

// DYNAMIC VARIABLES

// LINK STRINGS

// ANIMATION METHODS
function toggleSidebar() {
  const sideBar = document.querySelector("#side-bar");

  if (sideBar.classList[0] === "visible") {
    sideBar.className = "slide-up";
  } else if (sideBar.classList.contains("slide-up")) {
    sideBar.classList.remove("slide-up");
    sideBar.classList.add("slide-down");
  } else if (sideBar.classList.contains("slide-down")) {
    sideBar.classList.remove("slide-down");
    sideBar.classList.add("slide-up");
  }

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
