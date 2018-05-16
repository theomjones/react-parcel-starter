import React from "react";
import ReactDOM from "react-dom";

const App = props => (
  <div>
    <h1>{props.title}</h1>
  </div>
);

ReactDOM.render(<App title={"Hello world."} />, document.getElementById("app"));
