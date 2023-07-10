import "./normalize.css";
import "./app.css";

import todoService from "./services/todoService";

import Content from "./components/Content/Content";

document.body.appendChild(Content());

todoService.getDataFromLocalStorage();
