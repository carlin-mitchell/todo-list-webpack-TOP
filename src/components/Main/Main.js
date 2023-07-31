import Element from "../Element";

import Todos from "../Todos/Todos";

import EditFormContainer from "../Todos/EditForm/EditFormContainter";
import ProjectTitle from "./ProjectTitle";

// COMPONENT
const Main = () => {
  const main = Element("main", { id: "main" });
  main.appendChild(ProjectTitle());
  main.appendChild(Todos());
  return main;
};

export default Main;
