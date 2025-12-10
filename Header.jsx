import React from "react";
import { useNavigate } from "react-router-dom";
import { Sun, Moon, LogOut } from "lucide-react";

export default function Header({
  isAuthenticated,
  onLogin,
  onLogout,
  darkMode,
  toggleDarkMode,
  hasSidebar,
}) {
  const navigate = useNavigate();

  return (
    <header
      className={`fixed top-0 z-50 h-16 flex items-center justify-between px-6 shadow-sm backdrop-blur-md border-b border-gray-200 dark:border-zinc-800
      bg-white/70 dark:bg-zinc-900/80 transition-all duration-300 ${
        hasSidebar ? "left-64 w-[calc(100%-16rem)]" : "left-0 w-full"
      }`}
    >
      {!isAuthenticated && (
          <div
            onClick={() => navigate("/")}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <img src="/Logo.svg" alt="Logo" className="h-8 w-8" />
            <span className="text-xl font-semibold text-green-700 dark:text-green-400">
              <span className="text-gray-900 dark:text-white">Waste</span>
              Zero
            </span>
          </div>
      )}

      {/* 🌙 Actions */}
      <div className="flex items-center gap-4">
        {/* Dark Mode */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Auth Buttons */}
        {!isAuthenticated && (
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
          >
            Get Started →
          </button>
        )}
      </div>
    </header>
  );
}
