// src/components/Matching/MatchCard.jsx
import React from "react";
import RatingPill from "../UI/RatingPill";

export default function MatchCard({ item, onView, onApply }) {
  const { title, description, matchScore, skills, location, distanceKm, category } = item;

  return (
    <div className="bg-white dark:bg-zinc-900 border border-green-100 dark:border-zinc-700 rounded-xl p-5 shadow-sm hover:shadow-lg transition">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="text-lg font-semibold text-green-700 dark:text-green-400">{title}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{description}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <span key={i} className="text-xs bg-green-50 dark:bg-zinc-800 text-green-700 dark:text-green-300 px-2 py-1 rounded">
                {s}
              </span>
            ))}
          </div>

          <div className="mt-3 text-sm text-gray-600 dark:text-gray-300 flex items-center gap-3">
            <span>📍 {location}</span>
            {typeof distanceKm === "number" && (
              <span className="px-2 py-1 bg-green-50 dark:bg-zinc-800 rounded text-xs">
                {distanceKm} km
              </span>
            )}
            <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">{category}</span>
          </div>
        </div>

        <div className="flex flex-col items-end gap-3">
          <RatingPill score={matchScore} />
          <div className="flex gap-2">
            <button
              onClick={() => onView(item)}
              className="px-3 py-2 bg-green-600 text-white rounded-md text-sm hover:bg-green-700"
            >
              View
            </button>
            <button
              onClick={() => onApply(item)}
              className="px-3 py-2 bg-transparent border border-gray-300 dark:border-zinc-700 rounded-md text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
