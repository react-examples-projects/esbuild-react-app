import React from "react";
import ReactDOM from "react-dom/client";
import Routers from "./Routers";
import "./styles/styles.scss";
import "./styles/utils.css";
import "inter-ui/inter.css";
import "react-loading-skeleton/dist/skeleton.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>
);
