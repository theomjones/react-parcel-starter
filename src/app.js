import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Router from "./routes/router";

import DefaultLayout from "./layouts/default";

import "normalize.css";
import classNames from "./app.css";

const App = props => (
  <BrowserRouter>
    <div className={classNames.App}>
      <DefaultLayout>
        <Router />
      </DefaultLayout>
    </div>
  </BrowserRouter>
);

ReactDOM.render(
  <App title={"React starter"} />,
  document.getElementById("app")
);
