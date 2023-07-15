import { getProjectTodos } from "./todoDataManager";

import Todo from "../components/Todos/Todo/Todo";

import data from "./todoDataManager";

/**
 * Similar to displayInitialTodos() but this function ensures the displayed todos are not marked as new
 * @param {string} projectName the project name todos should be displayed for. If no value provided "default" is used.
 */
export function displayInitialTodos(projectName = "default") {
  const todosContainer = document.querySelector("#todos-container");

  const projectTodos = getProjectTodos(projectName);

  // initial todos fetched are not new and wont have the new todo animations applied to them
  projectTodos.forEach((todoObj) => {
    const updatedTodoObj = data.updateProjectTodo({}, todoObj.id);
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
  projectTodos.forEach((todoObj) => {
    const todoElement = Todo(todoObj);
    todosContainer.appendChild(todoElement);
    if (todoObj.isNew) {
      data.updateProjectTodo({ isNew: false }, todoObj.id);
    }
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

export function toggleSidebar() {
  const sideBar = document.querySelector("#side-bar");

  if (sideBar.classList.contains("hidden")) {
    sideBar.className = "slide-down";
  } else if (sideBar.classList.contains("slide-up")) {
    sideBar.classList.remove("slide-up");
    sideBar.classList.add("slide-down");
  } else if (
    sideBar.classList.contains("slide-down") ||
    sideBar.classList.contains("visible")
  ) {
    sideBar.classList.remove("slide-down");
    sideBar.classList.add("slide-up");
  }

  return;
}

// WINDOW EVENTS

// Reposition the side bar when the window's width crossed the specified threshold
window.onresize = (e) => {
  const { innerWidth } = e.target;
  if (innerWidth >= 800) {
    console.log("test");
    const sideBar = document.querySelector("#side-bar");
    sideBar.className = "visible";
  }
};

export default {
  displayInitialTodos,
  displayProjectTodos,
  refreshProjectTodos,
  clearInputValue,
  toggleSidebar,
};
