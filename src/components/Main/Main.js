import Element from "../Element";

import Todos from "../Todos/Todos";

import EditFormContainer from "../Todos/EditForm/EditFormContainter";

// COMPONENT
const Main = () => {
  const main = Element("main", { id: "main" });
  main.appendChild(Todos());
  return main;
};

export default Main;
