import Element from "../Element";

import TodoForm from "./TodoForm/TodoForm";

import {
  todoData,
  getProjectTodos,
  addTodoToProject,
} from "../../managers/todoDataManager";

// DYNAMIC VARIABLES

const todos = getProjectTodos("default");
// addTodoToProject("default", "some new content");

// LINK STRINGS

// ANIMATION METHODS

// COMPONENT
const Todos = () => {
  const parentContainer = Element("div", {
    id: "todos-container",
  });

  parentContainer.appendChild(TodoForm());

  return parentContainer;
};

export default Todos;
