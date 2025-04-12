import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://assignment-2-kroa.onrender.com/api/accounts/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data)); // Store user data in localStorage
        alert("Login successful!");
        navigate("/dashboard");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };
  

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-sm w-full bg-white rounded-lg shadow-lg p-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Welcome Back</h2>
          <p className="mt-2 text-sm">
            Don't have an account?{' '}
            <Link to="/register" className="text-indigo-600">Create account</Link>
          </p>
        </div>

        <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-2 border rounded" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full p-2 border rounded" />

          <button type="submit" className="w-full p-2 bg-black text-white rounded">Sign In</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
