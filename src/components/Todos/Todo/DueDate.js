import Element from "../../Element";
import { formatDistanceToNow } from "date-fns";
// DYNAMIC VARIABLES

// LINK STRINGS

// ELEMENT METHODS

// COMPONENT
const DueDate = (props) => {
  const { due } = props;
  const dueString = due
    ? formatDistanceToNow(new Date(due), { addSuffix: true })
    : "";

  const div = Element("div", {
    innerText: `${due ? "due" : ""} ${dueString}`,
    className: `due-date ${dueString.includes("ago") ? "red" : ""}`,
  });
  return div;
};

export default DueDate;
