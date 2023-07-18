import Element from "../../Element";

import PlusSignGray9 from "../assets/plus-sign-gray-9.svg";

import data from "../../../managers/todoDataManager";
import ui from "../../../managers/uiManager";
// DYNAMIC VARIABLES

// LINK STRINGS

// METHODS
const addTodo = (e) => {
  e.preventDefault();
  const inputElement = document.querySelector("form input");
  const prioritySelector = document.querySelector("form select");
  const { value: todoContent } = inputElement;
  const { value: todoPriority } = prioritySelector;
  const newTodoData = { todoContent, todoPriority };
  if (todoContent) {
    data.addTodoToProject(newTodoData);
    ui.clearInputValue(inputElement);
    ui.setSelectorElementValue(prioritySelector, 0);
    ui.refreshProjectTodos();
  }
};

// COMPONENT
const TodoForm = () => {
  const parentContainer = Element("form", {
    id: "todo-form",
    className: "",
  });

  const input = Element(
    "div",
    {
      className: "label",
      innerText: "Title",
    },
    [
      Element("input", {
        type: "text",
      }),
    ]
  );

  // const input = Element("input", {
  //   type: "text",
  // });

  const optionsText = ["none", "!", "!!", "!!!"];
  const prioritySelector = Element(
    "div",
    {
      className: "label",
      innerText: "Priority",
    },
    [
      Element(
        "select",
        {
          id: "priority-selector",
        },
        optionsText.map((option, i) => {
          let attrs = {
            className: "priority-option",
            innerText: option,
          };
          if (i === 0) {
            attrs["selected"] = true;
          }

          return Element("option", attrs);
        })
      ),
    ]
  );

  const addButton = Element(
    "button",
    {
      onclick: function (e) {
        addTodo(e);
      },
    },
    [
      Element("img", {
        src: PlusSignGray9,
      }),
    ]
  );

  parentContainer.appendChild(input);
  parentContainer.appendChild(prioritySelector);
  parentContainer.appendChild(addButton);

  return parentContainer;
};

export default TodoForm;
