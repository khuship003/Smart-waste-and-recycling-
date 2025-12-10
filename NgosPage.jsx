// src/components/NgosPage.jsx
import React, { useState } from "react";

const INITIAL_NGOS = [
  {
    id: 1,
    name: "Green Earth Foundation",
    email: "contact@greenearth.org",
    area: "City Center",
    status: "Pending",
  },
  {
    id: 2,
    name: "Recycle Now",
    email: "hello@recyclenow.org",
    area: "North Zone",
    status: "Approved",
  },
  {
    id: 3,
    name: "Clean Future Trust",
    email: "info@cleanfuture.org",
    area: "South Zone",
    status: "Pending",
  },
];

const NgosPage = () => {
  const [ngos, setNgos] = useState(INITIAL_NGOS);

  const updateStatus = (id, newStatus) => {
    setNgos((prev) =>
      prev.map((ngo) =>
        ngo.id === id ? { ...ngo, status: newStatus } : ngo
      )
    );
  };

  return (
    <div className="page">
      <h2>NGOs / Partners</h2>
      <p>Approve or reject NGO registrations and manage partners.</p>

      <table className="table">
        <thead>
          <tr>
            <th>NGO Name</th>
            <th>Email</th>
            <th>Area</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ngos.map((ngo) => (
            <tr key={ngo.id}>
              <td>{ngo.name}</td>
              <td>{ngo.email}</td>
              <td>{ngo.area}</td>
              <td>
                <span
                  className={`status-badge ${
                    ngo.status === "Approved"
                      ? "status-approved"
                      : ngo.status === "Rejected"
                      ? "status-rejected"
                      : "status-pending"
                  }`}
                >
                  {ngo.status}
                </span>
              </td>
              <td>
                <button
                  className="small-btn approve"
                  onClick={() => updateStatus(ngo.id, "Approved")}
                >
                  Approve
                </button>
                <button
                  className="small-btn reject"
                  onClick={() => updateStatus(ngo.id, "Rejected")}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NgosPage;
