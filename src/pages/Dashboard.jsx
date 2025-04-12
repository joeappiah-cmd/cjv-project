import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser || !storedUser.email) {
      navigate("/login");
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const response = await fetch(
          `https://assignment-2-kroa.onrender.com/api/accounts/profile/${storedUser.email}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        if (!response.ok) throw new Error("Failed to fetch user profile");

        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error("Error:", error);
        setError("Unable to fetch profile. Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      }
    };

    fetchUserProfile();
  }, [navigate]);

  return (
    <section className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
          User Dashboard
        </h1>

        <button
          onClick={() => navigate(-1)}
          className="mb-6 bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded hover:bg-gray-300"
        >
          ⬅ Back
        </button>

        {error && (
          <p className="text-center text-red-500 mb-4 font-medium">{error}</p>
        )}

        {user ? (
          <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-8 text-center">
            {/* Welcome Message */}
            <h2 className="text-3xl font-bold text-indigo-600 mb-4">
              Welcome, {user.firstName}!
            </h2>

            {/* User Info */}
            <p className="text-lg text-gray-700 mb-2">
              <strong>Name:</strong> {user.firstName} {user.lastName}
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Email:</strong> {user.email}
            </p>

            {/* Avatar */}
            <div className="w-24 h-24 mx-auto bg-indigo-500 text-white flex items-center justify-center text-3xl font-bold rounded-full shadow-md mb-6">
              {user.firstName?.charAt(0).toUpperCase() || "U"}
            </div>

            {/* Additional Info */}
            <div className="bg-gray-100 p-4 rounded-lg text-left text-gray-700">
              <p>
                <strong>Membership:</strong> Premium
              </p>
              <p>
                <strong>Joined:</strong>{" "}
                {new Date(user.createdAt || Date.now()).toLocaleDateString()}
              </p>
            </div>

            {/* Logout Button */}
            <button
              onClick={() => {
                localStorage.removeItem("user");
                navigate("/login");
              }}
              className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">Loading your dashboard...</p>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
