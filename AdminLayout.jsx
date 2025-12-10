// src/components/AdminLayout.jsx
import React, { useState } from "react";
import UsersPage from "./UsersPage";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

/* ========== NGOs / Partners Page ========== */
const NgosPage = () => {
  const [ngos, setNgos] = useState([
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
  ]);

  const updateStatus = (id, newStatus) => {
    setNgos((prev) =>
      prev.map((ngo) =>
        ngo.id === id ? { ...ngo, status: newStatus } : ngo
      )
    );
  };

  return (
    <div className="page">
      <h2>NGO Partners</h2>
      <p>Approve or reject NGO registrations and manage partners.</p>

      <div className="card">
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
    </div>
  );
};

/* ========== Pickup Schedules Page ========== */
const PickupSchedulesPage = () => {
  const ngos = [
    { id: 1, name: "Green Earth Foundation" },
    { id: 2, name: "Recycle Now" },
    { id: 3, name: "Clean Future Trust" },
  ];

  const [pickups, setPickups] = useState([
    {
      id: 101,
      date: "2025-11-30",
      location: "City Center",
      wasteType: "Mixed recyclables",
      assignedNgo: "",
      status: "Scheduled",
    },
    {
      id: 102,
      date: "2025-12-02",
      location: "North Zone",
      wasteType: "E-waste",
      assignedNgo: "Recycle Now",
      status: "Assigned",
    },
    {
      id: 103,
      date: "2025-12-05",
      location: "South Zone",
      wasteType: "Plastic",
      assignedNgo: "",
      status: "Scheduled",
    },
  ]);

  const handleAssignNgo = (pickupId, ngoName) => {
    setPickups((prev) =>
      prev.map((pickup) =>
        pickup.id === pickupId
          ? {
              ...pickup,
              assignedNgo: ngoName,
              status: ngoName ? "Assigned" : "Scheduled",
            }
          : pickup
      )
    );
  };

  return (
    <div className="page">
      <h2>Pickup Schedules</h2>
      <p>View all scheduled pickups and assign them to NGO partners.</p>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Pickup ID</th>
              <th>Date</th>
              <th>Location</th>
              <th>Waste Type</th>
              <th>Assigned NGO</th>
              <th>Status</th>
              <th>Assign</th>
            </tr>
          </thead>
          <tbody>
            {pickups.map((pickup) => (
              <tr key={pickup.id}>
                <td>{pickup.id}</td>
                <td>{pickup.date}</td>
                <td>{pickup.location}</td>
                <td>{pickup.wasteType}</td>
                <td>{pickup.assignedNgo || "Not assigned"}</td>
                <td>
                  <span
                    className={`status-badge ${
                      pickup.status === "Assigned"
                        ? "status-approved"
                        : "status-pending"
                    }`}
                  >
                    {pickup.status}
                  </span>
                </td>
                <td>
                  <select
                    className="ngo-select"
                    value={pickup.assignedNgo}
                    onChange={(e) =>
                      handleAssignNgo(pickup.id, e.target.value)
                    }
                  >
                    <option value="">Select NGO</option>
                    {ngos.map((ngo) => (
                      <option key={ngo.id} value={ngo.name}>
                        {ngo.name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* ========== Eco Opportunities Page + Statistics & Volunteer Engagement ========== */
const EcoOpportunitiesPage = () => {
  const [opportunities] = useState([
    {
      id: 1,
      title: "Beach Cleanup Drive",
      type: "Cleanup",
      date: "2025-12-01",
      location: "City Beach",
      createdBy: "Green Earth Foundation",
      status: "Upcoming",
      volunteers: 35,
      collectedKg: 0,
    },
    {
      id: 2,
      title: "E-waste Collection Camp",
      type: "E-waste",
      date: "2025-11-20",
      location: "Tech Park",
      createdBy: "Recycle Now",
      status: "Completed",
      volunteers: 20,
      collectedKg: 220,
    },
    {
      id: 3,
      title: "Community Paper Collection",
      type: "Paper",
      date: "2025-11-10",
      location: "South Zone",
      createdBy: "Clean Future Trust",
      status: "Completed",
      volunteers: 15,
      collectedKg: 140,
    },
    {
      id: 4,
      title: "Plastic-Free Market Initiative",
      type: "Plastic",
      date: "2025-11-28",
      location: "Central Market",
      createdBy: "Green Earth Foundation",
      status: "Ongoing",
      volunteers: 18,
      collectedKg: 75,
    },
  ]);

  const totalOpportunities = opportunities.length;
  const totalVolunteers = opportunities.reduce(
    (sum, op) => sum + op.volunteers,
    0
  );
  const totalWasteFromOpps = opportunities.reduce(
    (sum, op) => sum + op.collectedKg,
    0
  );
  const avgVolunteers =
    totalOpportunities === 0
      ? 0
      : (totalVolunteers / totalOpportunities).toFixed(1);

  const chartData = opportunities.map((op) => ({
    name: op.title.length > 12 ? op.title.slice(0, 12) + "..." : op.title,
    waste: op.collectedKg,
    volunteers: op.volunteers,
  }));

  return (
    <div className="page">
      <h2>Eco Opportunities</h2>
      <p>Analyze eco drives, collections, and volunteer engagement.</p>

      <div className="stat-cards">
        <div className="stat-card">
          <p className="stat-title">Total Opportunities</p>
          <p className="stat-value">{totalOpportunities}</p>
        </div>
        <div className="stat-card">
          <p className="stat-title">Total Volunteers</p>
          <p className="stat-value">{totalVolunteers}</p>
        </div>
        <div className="stat-card">
          <p className="stat-title">Avg Volunteers / Opportunity</p>
          <p className="stat-value">{avgVolunteers}</p>
        </div>
        <div className="stat-card">
          <p className="stat-title">Waste from Opportunities</p>
          <p className="stat-value">{totalWasteFromOpps} kg</p>
        </div>
      </div>

      <div className="card">
        <h3>Opportunity Statistics</h3>
        <p className="panel-subtitle">
          Waste collected per opportunity (kg).
        </p>
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 20, bottom: 20, left: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="waste" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card">
        <h3>Volunteer Engagement</h3>
        <p className="panel-subtitle">
          Volunteers participating in each opportunity.
        </p>
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 20, bottom: 20, left: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="volunteers" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card">
        <h3>All Opportunities</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Type</th>
              <th>Date</th>
              <th>Location</th>
              <th>Created By</th>
              <th>Status</th>
              <th>Volunteers</th>
              <th>Collected (kg)</th>
            </tr>
          </thead>
          <tbody>
            {opportunities.map((op) => (
              <tr key={op.id}>
                <td>{op.title}</td>
                <td>{op.type}</td>
                <td>{op.date}</td>
                <td>{op.location}</td>
                <td>{op.createdBy}</td>
                <td>{op.status}</td>
                <td>{op.volunteers}</td>
                <td>{op.collectedKg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* ========== Waste Categories & Rules Page ========== */
const WasteCategoriesPage = () => {
  const [categories] = useState([
    {
      id: 1,
      name: "Plastic",
      rewardPointsPerKg: 5,
      totalCollectedKg: 320,
    },
    {
      id: 2,
      name: "Paper",
      rewardPointsPerKg: 3,
      totalCollectedKg: 210,
    },
    {
      id: 3,
      name: "E-waste",
      rewardPointsPerKg: 10,
      totalCollectedKg: 95,
    },
    {
      id: 4,
      name: "Metal",
      rewardPointsPerKg: 7,
      totalCollectedKg: 150,
    },
  ]);

  const totalWasteCollected = categories.reduce(
    (sum, c) => sum + c.totalCollectedKg,
    0
  );

  const topUser = {
    name: "Aarav Sharma",
    totalWasteKg: 24.5,
  };

  const topNgo = {
    name: "Recycle Now",
    totalWasteKg: 410.2,
  };

  return (
    <div className="page">
      <h2>Waste Categories & Rules</h2>
      <p>Configure waste types, reward points, and see collection stats.</p>

      <div className="stat-cards">
        <div className="stat-card">
          <p className="stat-title">Total Waste Collected</p>
          <p className="stat-value">{totalWasteCollected} kg</p>
        </div>
        <div className="stat-card">
          <p className="stat-title">Top User</p>
          <p className="stat-main">{topUser.name}</p>
          <p className="stat-sub">{topUser.totalWasteKg} kg</p>
        </div>
        <div className="stat-card">
          <p className="stat-title">Top NGO</p>
          <p className="stat-main">{topNgo.name}</p>
          <p className="stat-sub">{topNgo.totalWasteKg} kg</p>
        </div>
      </div>

      <div className="card">
        <h3>Waste Categories</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Reward Points / kg</th>
              <th>Total Collected (kg)</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat.id}>
                <td>{cat.name}</td>
                <td>{cat.rewardPointsPerKg}</td>
                <td>{cat.totalCollectedKg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* ========== Main Admin Layout (WasteZero styling) ========== */
const AdminLayout = () => {
  // "users" | "ngos" | "opportunities" | "pickups" | "waste"
  const [activeTab, setActiveTab] = useState("users");

  const renderContent = () => {
    if (activeTab === "users") return <UsersPage />;
    if (activeTab === "ngos") return <NgosPage />;
    if (activeTab === "opportunities") return <EcoOpportunitiesPage />;
    if (activeTab === "pickups") return <PickupSchedulesPage />;
    if (activeTab === "waste") return <WasteCategoriesPage />;
    return null;
  };

  return (
    <div className="app-shell">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon">♻</div>
          <div>
            <h1>WasteZero</h1>
            <p>Eco-friendly Waste Management</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          <button
            className={`sidebar-link ${
              activeTab === "users" ? "sidebar-link-active" : ""
            }`}
            onClick={() => setActiveTab("users")}
          >
            <span className="sidebar-link-icon">👤</span>
            <span>Users</span>
          </button>

          <button
            className={`sidebar-link ${
              activeTab === "ngos" ? "sidebar-link-active" : ""
            }`}
            onClick={() => setActiveTab("ngos")}
          >
            <span className="sidebar-link-icon">🤝</span>
            <span>NGO Partners</span>
          </button>

          <button
            className={`sidebar-link ${
              activeTab === "opportunities" ? "sidebar-link-active" : ""
            }`}
            onClick={() => setActiveTab("opportunities")}
          >
            <span className="sidebar-link-icon">🌱</span>
            <span>Eco Opportunities</span>
          </button>

          <button
            className={`sidebar-link ${
              activeTab === "pickups" ? "sidebar-link-active" : ""
            }`}
            onClick={() => setActiveTab("pickups")}
          >
            <span className="sidebar-link-icon">📅</span>
            <span>Pickup Schedules</span>
          </button>

          <button
            className={`sidebar-link ${
              activeTab === "waste" ? "sidebar-link-active" : ""
            }`}
            onClick={() => setActiveTab("waste")}
          >
            <span className="sidebar-link-icon">⚙️</span>
            <span>Waste Categories</span>
          </button>
        </nav>

        <div className="sidebar-bottom">
          <p className="sidebar-bottom-title">NGO Tools</p>
          <button className="sidebar-link subtle">
            <span className="sidebar-link-icon">➕</span>
            <span>Create Opportunity</span>
          </button>
          <button className="sidebar-link subtle">
            <span className="sidebar-link-icon">✏️</span>
            <span>Edit Opportunity</span>
          </button>
        </div>
      </aside>

      {/* Main column */}
      <div className="main-column">
        {/* Top bar */}
        <header className="topbar">
          <div className="topbar-left">
            <div className="topbar-logo-icon">♻</div>
            <span className="topbar-title">WasteZero Admin</span>
          </div>
          <div className="topbar-right">
            <button className="icon-btn" title="Toggle theme">
              ☾
            </button>
            <button className="logout-btn">Logout</button>
          </div>
        </header>

        {/* Page area */}
        <main className="page-area">
          <div className="page-container">{renderContent()}</div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
