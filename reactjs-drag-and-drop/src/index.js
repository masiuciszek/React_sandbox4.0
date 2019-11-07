import React from "react";
import ReactDOM from "react-dom";
import DragAndDrop from "./components/DragAndDrop";
import DnDBox from "./components/DnDBox";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div style={{ display: "flex" }}>
    <DnDBox />
    <DragAndDrop />
  </div>,
  rootElement
);
// ReactDOM.render(<DnDBox />, rootElement);
