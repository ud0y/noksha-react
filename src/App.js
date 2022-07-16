import React, { Component } from "react";
import "jquery";
import "bootstrap/dist/js/bootstrap.js";
import "popper.js/dist/umd/popper.js";
import "bootstrap/dist/css/bootstrap.css";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Home } from "./pages/Home";
import { Men } from "./pages/men";
import Login from "./pages/Login";
import Layout from "./Layout";
console.log(process.env.REACT_APP_BASE_API_URL);

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/:cat" element={<Men category={"men"} />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    );
  }
}