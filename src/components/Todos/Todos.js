import Element from "../Element";

import TodoForm from "./TodoForm/TodoForm";

// DYNAMIC VARIABLES

// LINK STRINGS

// ANIMATION METHODS

// COMPONENT
const Todos = () => {
  const parentContainer = Element("div", {
    id: "todos",
  });

  parentContainer.appendChild(TodoForm());
  return parentContainer;
};

export default Todos;
