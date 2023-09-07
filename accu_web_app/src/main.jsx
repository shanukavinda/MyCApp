import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import "material-symbols";
import "./index.css";


const render = () => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  );
}

if (window.cordova) {
  document.addEventListener('deviceready', () => {
    render();
  }, false);
} else {
  render();
}