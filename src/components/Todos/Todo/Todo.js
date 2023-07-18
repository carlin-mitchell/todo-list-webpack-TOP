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

function toggleTodoCompletion(value, todoId) {
  data.updateProjectTodo({ completed: value }, todoId);
  ui.refreshProjectTodos();
}

// COMPONENT
const Component = (todoObj) => {
  const { id, content, dateCreated, completed, isNew, priority } = todoObj;

  const parentContainer = Element("div", {
    id: id,
    // add the animation if the todo is new
    className: `todo todo-item ${isNew ? "slide-down" : ""}`,
  });

  const checkbox = Element("button", {
    innerText: `${completed ? "✓" : ""}`,
    className: `checkbox ${completed ? "checked" : "unchecked"}`,
    onclick: function () {
      const { completed, id } = todoObj;
      toggleTodoCompletion(!completed, id);
    },
  });

  const deleteButton = Element("button", {
    onclick: function () {
      deleteTodo(id);
    },
  });
  const plusSign = Element("img", {
    src: PlusSignGray9,
    // add the animation if the todo is new, have it enter rotated already if not
    className: `delete button ${isNew ? "rotate45" : "rotated45"}`,
  });

  const todoPriority = Element("div", {
    innerText: `${priority === "none" ? "" : priority}`,
  });

  const todoContent = Element("div", {
    innerText: content,
    className: `${completed ? "crossed-out" : ""}`,
  });

  parentContainer.appendChild(checkbox);
  parentContainer.appendChild(todoContent);
  parentContainer.appendChild(todoPriority);
  parentContainer.appendChild(deleteButton);
  deleteButton.appendChild(plusSign);

  return parentContainer;
};

export default Component;
