import React, { useState } from "react";

export default function EditOpportunity() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    duration: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Changes saved!");
  };

  return (
    <div className="min-h-screen bg-green-100 dark:bg-zinc-900 transition-colors duration-300 p-10">
      <div className="max-w-4xl mx-auto bg-green-50 dark:bg-zinc-800 rounded-2xl shadow-md p-8">
        <h1 className="text-3xl font-semibold text-green-700 dark:text-green-400 mb-6">
          Opportunity Details
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter opportunity title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-green-400 dark:border-zinc-700 rounded-lg p-2 bg-white dark:bg-zinc-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter opportunity description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-green-400 dark:border-zinc-700 rounded-lg p-2 bg-white dark:bg-zinc-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-500"
              rows="4"
            ></textarea>
          </div>

          {/* Date and Duration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border border-green-400 dark:border-zinc-700 rounded-lg p-2 bg-white dark:bg-zinc-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">
                Duration
              </label>
              <input
                type="text"
                name="duration"
                placeholder="e.g. 3 hours per session"
                value={formData.duration}
                onChange={handleChange}
                className="w-full border border-green-400 dark:border-zinc-700 rounded-lg p-2 bg-white dark:bg-zinc-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border border-green-400 dark:border-zinc-700 rounded-lg p-2 bg-white dark:bg-zinc-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              className="px-4 py-2 border border-green-600 text-green-700 dark:text-green-400 dark:border-green-400 rounded-lg hover:bg-green-100 dark:hover:bg-zinc-700 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
