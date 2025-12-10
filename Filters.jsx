// src/components/Matching/Filters.jsx
import React from "react";

export default function Filters({ filters, setFilters, onSearch }) {
  return (
    <div className="bg-white dark:bg-zinc-800 border border-green-100 dark:border-zinc-700 rounded-xl p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-4">
        Filters
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Skills */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Skills
          </label>
          <select
            value={filters.skill}
            onChange={(e) => setFilters({ ...filters, skill: e.target.value })}
            className="w-full p-2 border rounded-md dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
          >
            <option value="">Any skill</option>
            <option value="Teamwork">Teamwork</option>
            <option value="Waste Sorting">Waste Sorting</option>
            <option value="Teaching">Teaching</option>
            <option value="Organizing">Organizing</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Location
          </label>
          <input
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            type="text"
            placeholder="City or postcode"
            className="w-full p-2 border rounded-md dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Category
          </label>
          <select
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            className="w-full p-2 border rounded-md dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
          >
            <option value="">Any category</option>
            <option value="Cleanup Drive">Cleanup Drive</option>
            <option value="Recycling">Recycling</option>
            <option value="Awareness Event">Awareness Event</option>
          </select>
        </div>
      </div>

      <div className="mt-4 flex gap-3 justify-end">
        <button
          onClick={() => {
            setFilters({ skill: "", location: "", category: "" });
            onSearch({ skill: "", location: "", category: "" });
          }}
          className="px-4 py-2 rounded-md border border-gray-300 dark:border-zinc-600 text-sm"
        >
          Clear
        </button>
        <button
          onClick={() => onSearch(filters)}
          className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
        >
          Search Matches
        </button>
      </div>
    </div>
  );
}
