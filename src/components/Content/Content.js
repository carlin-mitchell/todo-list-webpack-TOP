import Element from "../Element";

import Header from "../Header/Header";
import Main from "../Main/Main";
import SideBar from "../SideBar/SideBar";
import Footer from "../Footer/Footer";
// DYNAMIC VARIABLES

// LINK STRINGS

// ANIMATION METHODS

// COMPONENT
const Content = () => {
  const parentContainer = Element("div", { id: "content" });

  parentContainer.appendChild(Header());
  parentContainer.appendChild(SideBar());
  parentContainer.appendChild(Main());
  parentContainer.appendChild(Footer());

  return parentContainer;
};

export default Content;
