import Element from "../Element";

import TodoForm from "./TodoForm/TodoForm";

// COMPONENT
const Todos = () => {
  const parentContainer = Element("div", {
    id: "todos-container",
  });

  parentContainer.appendChild(TodoForm());

  return parentContainer;
};

export default Todos;
