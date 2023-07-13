import { getProjectTodos } from "./todoDataManager";

import Todo from "../components/Todos/Todo/Todo";

/**
 *
 * @param {string} projectName the project name todos should be displayed for
 */
function displayProjectTodos(projectName) {
  const todosContainer = document.querySelector("#todos-container");
  const projectTodos = getProjectTodos(projectName);
  projectTodos.forEach((todoObj) => todosContainer.appendChild(Todo(todoObj)));
}

/**
 *
 * @returns undefined if three are no Todo elements to clear
 */
function clearProjectTodos() {
  if (!todosContainer.childNodes.length > 1) return;
  const todosContainer = document.querySelector("#todos-container");

  //remove all elements in the todos container except for the form
  while (todosContainer.childNodes.length > 1) {
    todosContainer.removeChild(todosContainer.lastChild);
  }
}

/**
 *
 * @param {*} projectName the project name todos should be displayed for if no value provided "default" is used
 */
function refreshProjectTodos(projectName) {
  projectName = projectName ? projectName : "default";
  clearProjectTodos();
  displayProjectTodos(projectName);
}

export default { displayProjectTodos, refreshProjectTodos };
