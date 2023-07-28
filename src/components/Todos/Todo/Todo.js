import Element from "../../Element";

import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import Checkbox from "./Checkbox";
import DueDate from "./DueDate";
import TodoDetailsToggle from "./DetailsToggle";

import data from "../../../managers/todoDataManager";
import ui from "../../../managers/uiManager";

import { truncateAndAddEllipse } from "../../../utils";
import Details from "./Details";

// DYNAMIC VARIABLES

// LINK STRINGS

// METHODS

// COMPONENT
const Component = (todoObj) => {
  const {
    id,
    content,
    due,
    completed,
    isNew,
    priority,
    details,
    detailsVisible,
  } = todoObj;
  console.log(id, isNew);
  const parentContainer = Element("div", {
    id: id,
    // add the animation if the todo is new
    className: `todo todo-item ${isNew ? "slide-down" : ""}`,
  });

  const todoPriority = Element("div", {
    innerText: `${priority === "none" ? "" : priority}`,
  });

  const todoContent = Element("div", {
    innerText: content,
    className: `${completed ? "crossed-out" : ""} todo-content`,
  });

  parentContainer.appendChild(Checkbox({ completed, id, priority }));
  parentContainer.appendChild(todoContent);
  parentContainer.appendChild(EditButton());
  parentContainer.appendChild(DeleteButton({ isNew, id }));
  parentContainer.appendChild(DueDate({ due }));
  parentContainer.appendChild(TodoDetailsToggle(todoObj));
  parentContainer.appendChild(Details({ details, detailsVisible }));

  return parentContainer;
};

export default Component;
