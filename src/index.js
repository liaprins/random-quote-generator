// import React, { StrictMode } from "react";  // TURNING OFF STRICTMODE BECAUSE IT CAUSES THE DATA FETCHING TO RUN TWICE IN A ROW VERY CLOSE TO EACH OTHER TIME-WISE, AND THE API PROHIBITS TOO MANY CALLS TOO NEAR EACH OTHER TIME-WISE, SO IT TRIGGERS AN ERROR!
import React from "react"; 
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  // TURNING OFF STRICTMODE BECAUSE IT CAUSES THE DATA FETCHING TO RUN TWICE IN A ROW VERY CLOSE TO EACH OTHER TIME-WISE, AND THE API PROHIBITS TOO MANY CALLS TOO NEAR EACH OTHER TIME-WISE, SO IT TRIGGERS AN ERROR!
  // <StrictMode>
    <App />
  // </StrictMode>
);