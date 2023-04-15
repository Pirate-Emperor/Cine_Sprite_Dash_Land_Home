import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkModeContextProvider } from './srcni/context/darkModeContext';
import { BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DarkModeContextProvider >
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </DarkModeContextProvider >
);
