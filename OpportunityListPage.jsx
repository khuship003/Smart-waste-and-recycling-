import React, { useState } from "react";
import { Search, Filter, X } from "lucide-react";
import OpportunityDetail from "../components/OpportunityDetail";

export default function OpportunityListing() {
  const [search, setSearch] = useState("");
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);

  // Dummy data (replace with real API later)
  const opportunities = [
    {
      id: 1,
      title: "Beach Cleanup Drive",
      location: "Mumbai, India",
      type: "Volunteering",
      date: "25 Nov 2025",
      shortDescription:
        "Join hands to clean up marine waste and promote ocean health.",
      description:
        "Our annual Beach Cleanup Drive focuses on removing plastic waste and raising awareness about marine pollution. Volunteers will receive gloves, eco-bags, and refreshments. Open for all ages.",
      requirements: [
        "Must be 16+ years old",
        "Bring reusable water bottles",
        "Comfortable clothing recommended",
      ],
    },
    {
      id: 2,
      title: "Community Recycling Awareness",
      location: "Delhi, India",
      type: "Education",
      date: "10 Dec 2025",
      shortDescription:
        "Help educate your neighborhood about waste segregation and recycling.",
      description:
        "This project aims to teach households about proper waste segregation, composting, and recycling. Volunteers will receive orientation and educational materials.",
      requirements: [
        "Good communication skills",
        "2-hour training session",
        "Enthusiasm for community work",
      ],
    },
  ];

  const filtered = opportunities.filter((opp) =>
    opp.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 w-full min-h-screen bg-green-100 dark:bg-zinc-800 transition-colors pt-20">
      {/* Header */}
      <h1 className="text-3xl font-bold text-green-800 dark:text-green-300 mb-6">
        Eco Opportunities
      </h1>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
        <div className="flex items-center w-full sm:w-1/3 bg-white dark:bg-gray-800 rounded-lg px-3 py-2 shadow-sm">
          <Search size={18} className="text-gray-500 mr-2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search opportunities..."
            className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-200"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-400 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          <Filter size={16} />
          Filter
        </button>
      </div>

      {/* Opportunity Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((opp) => (
          <div
            key={opp.id}
            className="bg-white dark:bg-zinc-700 rounded-xl shadow-md p-5 hover:shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {opp.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                📍 {opp.location}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 line-clamp-3">
                {opp.shortDescription}
              </p>
            </div>
            <button
              onClick={() => setSelectedOpportunity(opp)}
              className="mt-auto bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition"
            >
              View More
            </button>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedOpportunity && (
        <OpportunityDetail
          opportunity={selectedOpportunity}
          onClose={() => setSelectedOpportunity(null)}
        />
      )}
    </div>
  );
}
