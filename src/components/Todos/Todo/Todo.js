import Element from "../../Element";

// DYNAMIC VARIABLES

// LINK STRINGS

// ANIMATION METHODS

// COMPONENT
const Component = (todoObj) => {
  const { id, content, dateCreated, completed } = todoObj;

  const parentContainer = Element("div", {
    id: id,
    className: "todo todo-item",
  });

  const checkbox = Element("button", { innerText: "chk" });

  const deleteIcon = Element("button", { innerText: "del" });

  const todoContent = Element("div", {
    innerText: content,
  });

  parentContainer.appendChild(checkbox);
  parentContainer.appendChild(todoContent);
  parentContainer.appendChild(deleteIcon);

  return parentContainer;
};

export default Component;
