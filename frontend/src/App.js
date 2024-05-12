import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./route/RoutesHandl";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes />
    </Router>
  );
}
