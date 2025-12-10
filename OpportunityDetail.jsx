import React from "react";
import { X } from "lucide-react";

export default function OpportunityDetail({ opportunity, onClose }) {
  return (
    <div className="fixed inset-0  backdrop-blur-md bg-opacity-300 flex items-center justify-center z-50 px-4">
      <div className="bg-white dark:bg-zinc-700 rounded-2xl shadow-2xl w-full max-w-2xl relative p-8 overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
        >
          <X size={22} />
        </button>

        <h2 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-2">
          {opportunity.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          📍 {opportunity.location} • {opportunity.type}
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {opportunity.description}
        </p>

        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
          Requirements
        </h3>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
          {opportunity.requirements.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
