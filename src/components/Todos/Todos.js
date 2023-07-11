import Element from "../Element";

import TodoForm from "./TodoForm/TodoForm";

import Todo from "./Todo/Todo";

import todoService from "../../services/todoService";

const todos = Object.values(todoService.data.todoListApp.listName.default);
console.log(todos);

// DYNAMIC VARIABLES

// LINK STRINGS

// ANIMATION METHODS

// COMPONENT
const Todos = () => {
  const parentContainer = Element("div", {
    id: "todos",
  });

  parentContainer.appendChild(TodoForm());

  todos.forEach((todo) => {
    parentContainer.appendChild(Todo(todo));
  });

  return parentContainer;
};

export default Todos;
