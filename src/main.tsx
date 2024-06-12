import React from "react";
import ReactDOM from "react-dom/client";
import "../public/sass/style.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import JobDetails from "./page/JobDetails";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:jobId" element={<JobDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
