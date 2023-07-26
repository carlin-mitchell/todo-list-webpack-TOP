import { getProjectTodos } from "./todoDataManager";

import Todo from "../components/Todos/Todo/Todo";
import TodoForm from "../components/Todos/TodoForm/TodoForm";

import data from "./todoDataManager";

import { debounce } from "../utils";

// COMPONENT STATE
let formIsExpanded = false;

const getFormIsExpanded = () => formIsExpanded;
const setFormIsExpanded = (state) => (formIsExpanded = state);

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
 * This function removes all buy the first n childNodes from the inputted element
 * @param {Element} parentElement The element to remove child nodes from.
 * @param {int} n The number of leading child nodes to preserve. If no value is provided all child nodes will be removed.
 */
export function removeAllButFirstNChildren(parentElement, n = 0) {
  while (parentElement.childNodes.length > n) {
    parentElement.removeChild(parentElement.lastChild);
  }
}

/**
 *
 * @param {string} projectName the project name todos should be displayed for. If no value provided "default" is used.
 */
export function clearProjectTodos(projectName = "default") {
  const todosContainer = document.querySelector("#todos-container");
  if (!todosContainer.childNodes.length > 1) return;

  //remove all elements in the todos container except for the form
  removeAllButFirstNChildren(todosContainer, 1);
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

/**
 * This function resets the value of an inputted select element to the index of the option provided
 * @param {Element} selectorElement the selector element to edit
 * @param {int} selectedOptionIndex the index of the option to be set as selected
 */
export function setSelectorElementValue(selectorElement, selectedOptionIndex) {
  selectorElement.value =
    selectorElement.childNodes[selectedOptionIndex].innerText;
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

export function showDateTimeInput() {
  const dateTimeWrapper = document.querySelector("#dateTimeInput-wrapper");
  const dueDatePrompt = document.querySelector("#deadline-prompt");

  dueDatePrompt.classList.add("display-none");
  dateTimeWrapper.classList.remove("display-none");
}

export function hideDateTimeInput() {
  const dateTimeWrapper = document.querySelector("#dateTimeInput-wrapper");
  const dueDatePrompt = document.querySelector("#deadline-prompt");

  dateTimeWrapper.classList.add("display-none");
  dueDatePrompt.classList.remove("display-none");
}

// WINDOW EVENTS

// Reposition the side bar when the window's width crossed the specified threshold
window.onresize = debounce((e) => {
  const { innerWidth } = e.target;
  if (innerWidth >= 800) {
    const sideBar = document.querySelector("#side-bar");
    sideBar.className = "visible";
  }
});

window.onload = function () {
  const d = document.querySelector("#deadline-input");
  console.log(d.value);
};

function refreshTodoForm() {}

export default {
  displayInitialTodos,
  displayProjectTodos,
  refreshProjectTodos,
  showDateTimeInput,
  hideDateTimeInput,
  clearInputValue,
  setSelectorElementValue,
  toggleSidebar,

  getFormIsExpanded,
  setFormIsExpanded,
};
