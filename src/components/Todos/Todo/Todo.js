import Element from "../../Element";

import data from "../../../managers/todoDataManager";
import ui from "../../../managers/uiManager";

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
    className: "todo todo-item",
  });

  const checkbox = Element("button", { innerText: "chk" });

  const deleteButton = Element("button", {
    innerText: "del",
    onclick: function () {
      deleteTodo(id);
    },
  });

  const todoContent = Element("div", {
    innerText: content,
  });

  parentContainer.appendChild(checkbox);
  parentContainer.appendChild(todoContent);
  parentContainer.appendChild(deleteButton);

  return parentContainer;
};

export default Component;
