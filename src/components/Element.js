const Element = (typeStr, propsObj) => {
  return Object.assign(document.createElement(typeStr), propsObj);
};

export default Element;
