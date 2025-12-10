// src/services/matchesApi.js
const BASE = process.env.REACT_APP_API_BASE || ""; // set in .env when backend ready

export async function fetchMatches(filters) {
  // filters: { skill, location, category }
  // For now returns dummy data; later uncomment fetch and remove dummy.
  /*
  const params = new URLSearchParams();
  if (filters.skill) params.append('skill', filters.skill);
  if (filters.location) params.append('location', filters.location);
  if (filters.category) params.append('category', filters.category);
  const res = await fetch(`${BASE}/api/matches?${params.toString()}`);
  if (!res.ok) throw new Error('Failed to load matches');
  return res.json();
  */

  // Dummy data (used for UI until backend available)
  return [
    {
      id: 1,
      title: "Beach Cleanup Drive",
      description: "Help clean the local beach and promote ocean health.",
      matchScore: 87,
      skills: ["Teamwork", "Waste Sorting"],
      location: "Mumbai",
      distanceKm: 3,
      category: "Cleanup Drive",
    },
    {
      id: 2,
      title: "Plastic Recycling Workshop",
      description: "Teach basic plastic recycling techniques in communities.",
      matchScore: 92,
      skills: ["Teaching", "Waste Sorting"],
      location: "Pune",
      distanceKm: 25,
      category: "Recycling",
    },
    {
      id: 3,
      title: "Community Awareness Event",
      description: "Organize awareness booths in local markets.",
      matchScore: 70,
      skills: ["Organizing", "Public Speaking"],
      location: "Thane",
      distanceKm: 12,
      category: "Awareness Event",
    },
  ];
}
