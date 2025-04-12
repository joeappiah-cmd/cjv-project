import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    const userData = { firstName, lastName, email, password };
  
    try {
      const response = await fetch("https://assignment-2-kroa.onrender.com/api/accounts/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
  
      if (response.ok) {
        alert("Registration successful! Please log in.");
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setTermsAccepted(false);
        navigate("/login");
      } else {
        const data = await response.json();
        alert(data.error || "Registration failed. Try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };
  

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-sm w-full bg-white rounded-lg shadow-lg p-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Create an account</h2>
          <p className="mt-2 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-indigo-600">Login here</Link>
          </p>
        </div>

        <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
          <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required className="w-full p-2 border rounded" />
          <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required className="w-full p-2 border rounded" />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-2 border rounded" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full p-2 border rounded" />
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="w-full p-2 border rounded" />

          <button type="submit" className="w-full p-2 bg-black text-white rounded">Create Account</button>
        </form>
      </div>
    </section>
  );
};

export default Register;
