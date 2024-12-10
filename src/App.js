// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "react-scroll-to-top";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";

import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
        <ScrollToTop smooth color="#6f00ff" />
      <Routes>
        <Route
          index
          element={
              <PageA />
          }
        />
        <Route path="/page-b" element={<PageB />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
