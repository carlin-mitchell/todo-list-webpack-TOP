import Element from "../Element";

import GitHubIcon from "./logos/github-mark-white.png";

// DYNAMIC VARIABLES
const dynamicYear = new Date().getFullYear();

// LINK STRINGS
const githubLinkString =
  "https://github.com/carlin-mitchell/todo-list-webpack-TOP";

// ANIMATION METHODS
const githubIconHoverIn = function () {
  this.classList.remove("github-hover-out");
  this.classList.add("github-hover-in");
};

const githubIconHoverOut = function () {
  this.classList.remove("github-hover-in");
  this.classList.add("github-hover-out");
};

// COMPONENT
const Footer = () => {
  const footer = Element("footer", {});

  const copyrightContainer = Element("div", {
    className: "copyright-container",
    innerText: `© Carlin Mitchell ${dynamicYear}`,
  });

  const topContainer = Element("div", {
    className: "top-attribution",
    innerText: "Inspired by",
  });

  const topLink = Element("a", {
    id: "top-link",
    innerText: "The Odin Project",
    href: "https://www.theodinproject.com/",
  });

  const githubLink = Element("a", {
    href: githubLinkString,
  });

  const githubIcon = Element("img", {
    src: GitHubIcon,
    className: "github-icon",
    onmouseover: githubIconHoverIn,
    onmouseout: githubIconHoverOut,
  });

  footer.appendChild(copyrightContainer);
  copyrightContainer.appendChild(githubLink);
  githubLink.appendChild(githubIcon);

  footer.appendChild(topContainer);
  topContainer.appendChild(topLink);

  return footer;
};

export default Footer;
