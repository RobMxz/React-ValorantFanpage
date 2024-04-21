import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.tsx";
import "./index.css";

import App from "./class";

import { ThemeProvider } from "./theme/ThemeProvider";

localStorage.setItem("chakra-ui-color-mode", "dark");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
