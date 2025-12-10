// src/components/Matching/MatchesDashboard.jsx
import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import MatchCard from "./MatchCard";
import { fetchMatches } from "../../services/matchesApi";

export default function MatchesDashboard() {
  const [filters, setFilters] = useState({ skill: "", location: "", category: "" });
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);

  const loadMatches = async (f = filters) => {
    setLoading(true);
    try {
      const data = await fetchMatches(f);
      setMatches(data);
    } catch (err) {
      console.error("Failed to fetch matches", err);
      setMatches([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // initial load
    loadMatches();
    // eslint-disable-next-line
  }, []);

  const handleSearch = (f) => {
    setFilters(f);
    loadMatches(f);
  };

  const handleView = (item) => {
    setSelected(item);
    // you can open a modal or navigate to opportunity detail page
    alert(`View: ${item.title}`);
  };

  const handleApply = (item) => {
    // call API to apply or open application modal
    alert(`Apply for: ${item.title}`);
  };

  return (
    <div className="min-h-screen p-8 bg-green-50 dark:bg-zinc-950 transition-colors ml-64">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-green-700 dark:text-green-400">Match Suggestions</h1>
        </div>

        <Filters filters={filters} setFilters={setFilters} onSearch={handleSearch} />

        <div className="mt-8">
          <h2 className="text-xl mb-4 font-semibold text-green-700 dark:text-green-400">Recommended Opportunities</h2>

          {loading ? (
            <div className="text-gray-500">Loading...</div>
          ) : matches.length === 0 ? (
            <div className="text-gray-600 dark:text-gray-300">No matches found. Try broadening your filters.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {matches.map((m) => (
                <MatchCard key={m.id} item={m} onView={handleView} onApply={handleApply} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
