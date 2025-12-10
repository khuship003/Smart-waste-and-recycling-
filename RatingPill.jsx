// src/components/UI/RatingPill.jsx
import React from "react";

export default function RatingPill({ score }) {
  // color logic
  const color =
    score >= 85 ? "bg-green-600 text-white" :
    score >= 65 ? "bg-yellow-400 text-black" :
    "bg-red-400 text-white";

  return (
    <div className={`px-2 py-1 rounded-md text-sm font-semibold ${color}`}>
      {score}% match
    </div>
  );
}
