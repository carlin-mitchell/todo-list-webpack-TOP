import { getProjectTodos } from "./todoDataManager";

import Todo from "../components/Todos/Todo/Todo";

import data from "./todoDataManager";

export function displayInitialTodos(projectName = "default") {
  const todosContainer = document.querySelector("#todos-container");

  const projectTodos = getProjectTodos();

  // initial todos fetched are not new and wont have the slide animation applied to them
  projectTodos.forEach((todoObj) => {
    const updatedTodoObj = data.updateProjectTodo({ isNew: false }, todoObj.id);
    todosContainer.appendChild(Todo(updatedTodoObj));
  });
}

/**
 *
 * @param {string} projectName the project name todos should be displayed for. If no value provided "default" is used.
 */
export function displayProjectTodos(projectName = "default") {
  const todosContainer = document.querySelector("#todos-container");
  const projectTodos = getProjectTodos(projectName);
  console.log(projectTodos);
  projectTodos.forEach((todoObj) => {
    const todoElement = Todo(todoObj);

    todosContainer.appendChild(todoElement);

    todoObj.isNew = false;
  });
}

/**
 *
 * @param {string} projectName the project name todos should be displayed for. If no value provided "default" is used.
 */
export function clearProjectTodos(projectName = "default") {
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
  displayProjectTodos();
}

/**
 *
 * @param {element} inputElement a reference to the input element to clear
 */
export function clearInputValue(inputElement) {
  inputElement.value = "";
}

export default {
  displayInitialTodos,
  displayProjectTodos,
  refreshProjectTodos,
  clearInputValue,
};
