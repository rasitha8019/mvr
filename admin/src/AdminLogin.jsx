import React, { useState } from "react";
const baseUrl = import.meta.env.VITE_API_BASE_URL;
import { toast } from "react-toastify";

const AdminLogin = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${baseUrl}/api/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("adminToken", data.token);
      onLogin(true);
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-12 p-6 bg-white rounded shadow"
    >
      <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
      >
        Login
      </button>
    </form>
  );
};

export default AdminLogin;
