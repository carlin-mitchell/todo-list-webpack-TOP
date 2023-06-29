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

const Footer = () => {
  const footer = Object.assign(document.createElement("footer"), {});

  const copyrightContainer = Object.assign(document.createElement("div"), {
    className: "copyright-container",
    innerText: `© Carlin Mitchell ${dynamicYear}`,
  });

  const topContainer = Object.assign(document.createElement("div"), {
    className: "top-attribution",
    innerText: "Inspired by",
  });

  const topLink = Object.assign(document.createElement("a"), {
    id: "top-link",
    innerText: "The Odin Project",
    href: "https://www.theodinproject.com/",
  });

  const githubLink = Object.assign(document.createElement("a"), {
    href: githubLinkString,
  });

  const githubIcon = Object.assign(document.createElement("img"), {
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
