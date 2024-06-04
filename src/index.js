import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Coderdle from "./Coderdle";

const root = createRoot(document.getElementById("coderdle"));
root.render(
  <StrictMode>
    <Coderdle />
  </StrictMode>
);