import React from "react";
import ReactDOM from "react-dom/client";
import "../public/sass/style.scss";
import Home from "./page/Home";
import JobDetails from "./page/JobDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/details" element={<JobDetails />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
