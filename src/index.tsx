import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
