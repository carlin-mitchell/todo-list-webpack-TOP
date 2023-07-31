import Element from "../../Element";

// COMPONENT
const EditDetails = () => {
  const label = Element("div", {
    id: "",
    className: "label",
    innerText: "Details",
  });

  const input = Element("textarea", {
    id: "edit-details",
  });

  label.appendChild(input);

  return label;
};

export default EditDetails;
