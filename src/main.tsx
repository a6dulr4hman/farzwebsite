import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import logo from "./assets/logo.png";

// use the Farz logo as the favicon (inlined by the single-file build)
const link = document.createElement("link");
link.rel = "icon";
link.type = "image/png";
link.href = logo;
document.head.appendChild(link);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
