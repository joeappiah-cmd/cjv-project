import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    
    if (!storedUser) {
      navigate("/login");
      return;
    }
  
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/accounts/profile/${storedUser.email}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
  
        if (!response.ok) throw new Error("Failed to fetch user profile");
  
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error("Error:", error);
        navigate("/login");
      }
    };
  
    fetchUserProfile();
  }, [navigate]);
  

  return (
    <section className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">DASHBOARD</h1>
        <button
          onClick={() => navigate(-1)}
          className="mb-6 bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded hover:bg-gray-300"
        >
          ⬅ Back
        </button>

        {user ? (
          <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-6 text-center">
            {/* Avatar */}
            <div className="w-24 h-24 mx-auto bg-indigo-500 text-white flex items-center justify-center text-2xl font-bold rounded-full shadow-lg">
              {user.firstName.charAt(0)}
            </div>

            {/* User Info */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-gray-600">{user.email}</p>

            {/* Additional Info */}
            <div className="bg-gray-100 p-4 rounded-lg mt-4 text-gray-700 text-left">
              <p><strong>Membership:</strong> Premium</p>
              <p><strong>Joined:</strong> {new Date().toLocaleDateString()}</p>
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
          <p className="text-center text-gray-600">Loading user data...</p>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
