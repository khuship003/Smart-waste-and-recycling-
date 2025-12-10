// src/components/UsersPage.jsx
import React, { useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const DUMMY_USERS = [
  { id: 1, name: "Aarav Sharma", email: "aarav@example.com", role: "User", totalWasteKg: 24.5 },
  { id: 2, name: "Green Earth Admin", email: "admin@greenearth.org", role: "NGO Admin", totalWasteKg: 410.2 },
  { id: 3, name: "Ritika Verma", email: "ritika@example.com", role: "User", totalWasteKg: 5.3 },
  { id: 4, name: "Mohit Singh", email: "mohit@domain.com", role: "User", totalWasteKg: 12.9 },
];

const UsersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return DUMMY_USERS;
    return DUMMY_USERS.filter(
      (user) =>
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  // Chart data – we’ll show all users (not filtered) as stats
  const chartData = DUMMY_USERS.map((u) => ({
    name: u.name.split(" ")[0], // first name only for nicer labels
    waste: u.totalWasteKg,
  }));

  return (
    <div className="page">
      <h2>Users</h2>
      <p>Search and view all users registered in the platform.</p>

      {/* --- User statistics graph --- */}
      <div className="panel-like">
        <h3>User Statistics</h3>
        <p className="panel-subtitle">
          Total waste contributed by each user (in kg).
        </p>
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={chartData} margin={{ top: 10, right: 20, bottom: 20, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="waste" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* --- Search + stats --- */}
      <div className="toolbar">
        <div className="input-group">
          <label htmlFor="userSearch">Search users</label>
          <input
            id="userSearch"
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="toolbar-info">
          <span>Total: {DUMMY_USERS.length}</span>
          <span>Showing: {filteredUsers.length}</span>
        </div>
      </div>

      {/* --- Table --- */}
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Total Waste (kg)</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length === 0 ? (
            <tr>
              <td colSpan={4} style={{ textAlign: "center", padding: "12px" }}>
                No users found for <strong>{searchTerm}</strong>
              </td>
            </tr>
          ) : (
            filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.totalWasteKg}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
