import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Leaf,
  Edit3,
  CalendarDays,
  MessageSquare,
  User,
  Settings,
  HelpCircle,
  LogOut,
  Sun,
  Moon,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { name: "Eco Opportunities", icon: Leaf, path: "/opportunities" },
  { name: "Edit Opportunities", icon: Edit3, path: "/edit-opportunity" }, // ✅ Added here
  { name: "Pickup Schedule", icon: CalendarDays, path: "/schedule" },
  { name: "Messages", icon: MessageSquare, path: "/messages" },
  { name: "My Profile", icon: User, path: "/profile" },
  { name: "Settings", icon: Settings, path: "/settings" },
  { name: "Help & Support", icon: HelpCircle, path: "/help" },
];

export default function Sidebar({ active, onLogout }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-zinc-900 shadow-lg border-r border-gray-200 dark:border-zinc-800 flex flex-col justify-between transition-all duration-300">
      <div>
        {/* Logo Section */}
        <div className="flex flex-col items-center pt-6">
          <span className="text-3xl font-semibold text-green-700 dark:text-green-400">
            <span className="text-gray-900 dark:text-white">Waste</span>Zero
          </span>
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">
            Eco-friendly Waste Management
          </span>
        </div>

        {/* Theme Toggle */}
        <div className="flex justify-center mt-5">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-2 px-3 py-2 bg-green-100 dark:bg-zinc-800 rounded-full text-green-700 dark:text-green-400 hover:bg-green-200 dark:hover:bg-zinc-700 transition"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            <span className="text-sm">
              {darkMode ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2 mt-6">
          {navItems.map(({ name, icon: Icon, path }) => (
            <button
              key={name}
              onClick={() => (window.location.href = path)}
              className={`flex items-center gap-3 w-full px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                active === name
                  ? "bg-green-600 text-white shadow-md"
                  : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-800"
              }`}
            >
              <Icon size={18} />
              {name}
            </button>
          ))}
        </nav>
      </div>

      {/* Logout */}
      <div className="p-4">
        <button
          onClick={onLogout}
          className="flex items-center justify-center gap-2 w-full px-4 py-3 text-white bg-red-500 hover:bg-red-600 rounded-lg transition"
        >
          <LogOut size={18} /> Logout
        </button>
      </div>
    </aside>
  );
}
