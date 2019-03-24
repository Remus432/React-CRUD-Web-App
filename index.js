import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./store";


const render = () => ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"))

render();

store.subscribe(render);