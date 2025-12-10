// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MatchesDashboard from "./components/Matching/MatchesDashboard";
import Sidebar from "./components/Sidebar/Sidebar"; // if you use sidebar in layout

function App() {
  return (
    <Router>
      <Sidebar active="Eco Opportunities" /> {/* or wherever you want */}
      <Routes>
        <Route path="/matches" element={<MatchesDashboard />} />
        <Route path="/" element={<Navigate to="/matches" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
