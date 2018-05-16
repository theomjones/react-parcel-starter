import React from "react";
import ReactDOM from "react-dom";

import classNames from "./app.css";

const App = props => (
  <div className={classNames.App}>
    <h1>{props.title}</h1>
  </div>
);

ReactDOM.render(
  <App title={"React starter"} />,
  document.getElementById("app")
);
