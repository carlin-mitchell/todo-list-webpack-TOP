/**
 * This Function allows you to create a dom element with its initial attributes defined by a passed-in object
 * @param {string} typeStr the element string you would use in document.createElement()
 * @param {object} propsObj an object containing the initial properties/attributes you want the element to have
 * @returns {Element} the a reference to the element created in memory
 */
const Element = (typeStr, propsObj) => {
  return Object.assign(document.createElement(typeStr), propsObj);
};

export default Element;
