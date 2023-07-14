import { getProjectTodos } from "./todoDataManager";

import Todo from "../components/Todos/Todo/Todo";

/**
 *
 * @param {string} projectName the project name todos should be displayed for. If no value provided "default" is used.
 */
export function displayProjectTodos(projectName = "default") {
  const todosContainer = document.querySelector("#todos-container");
  const projectTodos = getProjectTodos(projectName);
  projectTodos.forEach((todoObj) => todosContainer.appendChild(Todo(todoObj)));
}

/**
 *
 * @returns undefined if three are no Todo elements to clear
 */
export function clearProjectTodos() {
  const todosContainer = document.querySelector("#todos-container");
  if (!todosContainer.childNodes.length > 1) return;

  //remove all elements in the todos container except for the form
  while (todosContainer.childNodes.length > 1) {
    todosContainer.removeChild(todosContainer.lastChild);
  }
}

/**
 *
 * @param {string} projectName the project name todos should be displayed for. If no value provided "default" is used.
 */
export function refreshProjectTodos(projectName = "default") {
  clearProjectTodos();
  displayProjectTodos(projectName);
}

/**
 *
 * @param {element} inputElement a reference to the input element to clear
 */
export function clearInputValue(inputElement) {
  inputElement.value = "";
}

export default { displayProjectTodos, refreshProjectTodos, clearInputValue };
