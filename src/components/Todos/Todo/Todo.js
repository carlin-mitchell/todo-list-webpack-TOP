import Element from "../../Element";

import data from "../../../managers/todoDataManager";
import ui from "../../../managers/uiManager";

import PlusSignGray9 from "../assets/plus-sign-gray-9.svg";

// DYNAMIC VARIABLES

// LINK STRINGS

// METHODS
function deleteTodo(todoId) {
  data.removeTodoFromProject(todoId);
  ui.refreshProjectTodos();
}

// COMPONENT
const Component = (todoObj) => {
  const { id, content, dateCreated, completed } = todoObj;

  const parentContainer = Element("div", {
    id: id,
    // add the animation if the todo is new
    className: `todo todo-item ${todoObj.isNew ? "slide-down" : ""}`,
  });

  const checkbox = Element("button", { innerText: "chk" });

  const deleteButton = Element("button", {
    onclick: function () {
      deleteTodo(id);
    },
  });
  const plusSign = Element("img", {
    src: PlusSignGray9,
    // add the animation if the todo is new
    className: `delete button ${todoObj.isNew ? "rotate45" : "rotated45"}`,
  });

  deleteButton.appendChild(plusSign);

  const todoContent = Element("div", {
    innerText: content,
  });

  parentContainer.appendChild(checkbox);
  parentContainer.appendChild(todoContent);
  parentContainer.appendChild(deleteButton);

  return parentContainer;
};

export default Component;
