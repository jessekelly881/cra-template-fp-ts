import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import reportWebVitals from "./core/reportWebVitals";

/**
 * Rendering as JSX is required for auto reload to work.
 * I'm not sure why but a fix is more than welcome.
 */
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
