import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
// this will allow us define which of our components should render depending on the URL


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Router>
    <App />
    </Router>
  </StrictMode>
);

//Wrap the App Component with the Router component to enable the router features
