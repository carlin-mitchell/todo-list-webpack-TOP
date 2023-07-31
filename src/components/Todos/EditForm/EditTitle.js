import Element from "../../Element";

// COMPONENT
const EditTitle = () => {
  const label = Element("div", {
    id: "",
    className: "label",
    innerText: "Title",
  });

  const input = Element("input", {
    id: "edit-title",
    type: "text",
  });

  label.appendChild(input);

  return label;
};

export default EditTitle;
