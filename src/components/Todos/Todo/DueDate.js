import Element from "../../Element";
import { formatDistanceToNow, format } from "date-fns";
// DYNAMIC VARIABLES

// LINK STRINGS

// ELEMENT METHODS

// COMPONENT
const DueDate = (props) => {
  const { due } = props;

  const dueDate = new Date(due);

  const isDueString = due
    ? `${formatDistanceToNow(dueDate, { addSuffix: true })}, ${format(
        dueDate,
        "MM/dd @ HH:mm"
      )}`
    : "";

  const dueString = due ? isDueString : "no due date";

  const div = Element("div", {
    innerText: `${due ? "due" : ""} ${dueString}`,
    className: `due-date ${dueString.includes("ago") ? "red" : ""}`,
  });
  return div;
};

export default DueDate;
