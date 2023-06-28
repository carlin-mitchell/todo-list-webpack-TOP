import Footer from "./Footer/Footer";

const Content = () => {
  const div = Object.assign(document.createElement("div"), {
    className: "content",
  });

  div.appendChild(Footer());

  return div;
};

export default Content;
