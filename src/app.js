import "./normalize.css";
import "./app.css";

import { initTestData } from "./managers/testDataGenerator";

import ui from "./managers/uiManager";

import Content from "./components/Content/Content";

document.body.appendChild(Content());

initTestData();
ui.displayProjectTodos();
