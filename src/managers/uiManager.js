import { getProjectTodos } from "./todoDataManager";

import Todo from "../components/Todos/Todo/Todo";

function displayProjectTodos(projectName) {
  const todosContainer = document.querySelector("#todos-container");
  const projectTodos = getProjectTodos(projectName);
  projectTodos.forEach((todoObj) => todosContainer.appendChild(Todo(todoObj)));
}

function clearProjectTodos() {
  const todosContainer = document.querySelector("#todos-container");

  //remove all elements in the todos container except for the form
  while (todosContainer.childNodes.length > 1) {
    todosContainer.removeChild(todosContainer.lastChild);
  }
}

function refreshProjectTodos() {
  clearProjectTodos();
  displayProjectTodos("default");
}

export default { displayProjectTodos };
