import React from "react";
import { ArrowRight } from "lucide-react";

export default function OpportunityCard({ title, organization, location, description }) {
  return (
    <div className="bg-white dark:bg-[#2a2a2a] p-6 rounded-xl shadow hover:shadow-lg transition-all">
      <h3 className="text-xl font-semibold text-green-700 dark:text-green-400">{title}</h3>
      <p className="text-gray-800 dark:text-gray-200 mt-1">{organization}</p>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{location}</p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <button className="flex items-center gap-2 text-green-700 dark:text-green-400 hover:underline">
        View More <ArrowRight size={16} />
      </button>
    </div>
  );
}
