import Element from "../../Element";

import PlusSignGray9 from "../assets/plus-sign-gray-9.svg";

import data from "../../../managers/todoDataManager";
import ui from "../../../managers/uiManager";
// DYNAMIC VARIABLES

// LINK STRINGS

// ELEMENT METHODS
const addTodo = (e) => {
  e.preventDefault();
  const inputElement = document.querySelector("form input");
  const prioritySelector = document.querySelector("form select");
  const dateTimeSelector = document.querySelector("#deadline-input");
  const detailsInput = document.querySelector("#details-input textarea");
  const { value: todoContent } = inputElement;
  const { value: todoPriority } = prioritySelector;
  const { value: due } = dateTimeSelector;
  const { value: details } = detailsInput;
  const newTodoData = { todoContent, todoPriority, due, details };
  if (todoContent) {
    data.addTodoToProject(newTodoData);
    ui.setInputValue(inputElement, "");
    ui.setInputValue(dateTimeSelector, "");
    ui.setInputValue(detailsInput, "");
    ui.setSelectorElementValue(prioritySelector, 0);
    ui.refreshProjectTodos();
  }
};

// COMPONENT
const AddButton = () => {
  const button = Element("button", {
    id: "add-button",
    onclick: function (e) {
      addTodo(e);
    },
  });

  const plusSign = Element("img", {
    src: PlusSignGray9,
  });

  button.appendChild(plusSign);

  return button;
};

export default AddButton;
