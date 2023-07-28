import Element from "../../Element";
import PencilGray9 from "../assets/edit-pencil-gray.svg";

import data from "../../../managers/todoDataManager";
import ui from "../../../managers/uiManager";

// DYNAMIC VARIABLES

// LINK STRINGS

// ELEMENT METHODS

// COMPONENT
const EditButton = (props) => {
  const button = Element("button", {});

  const pencil = Element("img", {
    src: PencilGray9,
    className: `button`,
  });
  button.appendChild(pencil);
  return button;
};

export default EditButton;
