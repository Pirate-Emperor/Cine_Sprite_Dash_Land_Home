import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkModeContextProvider } from './srcni/context/darkModeContext';
import { BrowserRouter} from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
  <DarkModeContextProvider >
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </DarkModeContextProvider >
  </AuthContextProvider>
);
