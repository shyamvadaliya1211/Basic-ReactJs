import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import Navi from "./nav";
import routes from "./routes";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// initialize rotues and navi links
const initRoutes = () => (
  <BrowserRouter>
    <div>
      <Navi />
    {routes}
    </div>
  </BrowserRouter>
);

const initializedRoutes = initRoutes();
ReactDOM.render(initializedRoutes, document.getElementById("root"));
