import React from "react";
import ReactDOM from "react-dom";

import styles from "./app.css";
console.log(styles);

const App = props => (
  <div className={styles.App}>
    <h1>{props.title}</h1>
  </div>
);

ReactDOM.render(
  <App title={"React starter"} />,
  document.getElementById("app")
);
