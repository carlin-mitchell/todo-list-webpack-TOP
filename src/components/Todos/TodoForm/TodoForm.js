import Element from "../../Element";

import PlusSignWhite from "../assets/plus-sign-white.png";
import PlusSignGray9 from "../assets/plus-sign-gray-9.svg";

import data from "../../../managers/todoDataManager";
import ui from "../../../managers/uiManager";
// DYNAMIC VARIABLES

// LINK STRINGS

// METHODS
const addTodo = (e) => {
  e.preventDefault();
  const inputElement = document.querySelector("form input");
  const { value: todoContent } = inputElement;

  data.addTodoToProject(todoContent);
  ui.clearInputValue(inputElement);
  ui.refreshProjectTodos();
};

// COMPONENT
const TodoForm = () => {
  const parentContainer = Element("form", {
    id: "todo-form",
  });

  const input = Element("input", {
    type: "text",
    focus: true,
  });

  const addButton = Element("button", {
    onclick: function (e) {
      addTodo(e);
    },
  });

  const plusSign = Element("img", {
    src: PlusSignGray9,
  });

  addButton.appendChild(plusSign);
  parentContainer.appendChild(input);
  parentContainer.appendChild(addButton);

  return parentContainer;
};

export default TodoForm;
