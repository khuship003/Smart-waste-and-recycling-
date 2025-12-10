import React, { useState } from "react";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 p-6">
      {/* Center Card */}
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md text-center">
        
        <h2 className="text-2xl font-semibold mb-6 text-green-800">
          Reset Password
        </h2>

        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
          Reset Password
        </button>

      </div>
    </div>
  );
};

export default ResetPassword;
