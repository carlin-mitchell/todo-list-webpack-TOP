import Element from "../../Element";

// COMPONENT
const EditDeadline = () => {
  const label = Element("div", {
    id: "",
    className: "label",
    innerText: "Deadline",
  });

  const input = Element("input", {
    id: "edit-deadline",
    type: "datetime-local",
  });

  label.appendChild(input);

  return label;
};

export default EditDeadline;