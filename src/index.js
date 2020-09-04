import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import ContentLayout from "./ContentLayout";
import withRouterExample from "./Router";


const App = withRouterExample(ContentLayout)
ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
document.getElementById("app-container")
);
