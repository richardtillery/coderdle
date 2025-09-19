import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Coderdle from './Coderdle';
import "./styles.css";

const root = createRoot(document.getElementById("coderdle"));
root.render(
  <StrictMode>
    <Coderdle />
  </StrictMode>
);