import Element from "../Element";

import Todos from "../Todos/Todos";

// COMPONENT
const Main = () => {
  const parentContainer = Element("main", { id: "main" });
  parentContainer.appendChild(Todos());
  return parentContainer;
};

export default Main;
