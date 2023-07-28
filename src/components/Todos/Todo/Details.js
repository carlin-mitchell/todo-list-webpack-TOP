import Element from "../../Element";

const Details = (props) => {
  const { details: detailsText, detailsVisible } = props;
  const details = Element("div", {
    className: `details ${detailsVisible ? "" : "display-none"}`,
    innerText: detailsText,
  });
  return details;
};

export default Details;
