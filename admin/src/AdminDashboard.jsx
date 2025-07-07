import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const AdminDashboard = ({ onLogout }) => {
  const [submissions, setSubmissions] = useState([]);

  const fetchData = async () => {
    const token = localStorage.getItem("adminToken");

    try {
      const res = await fetch(`${baseUrl}/api/admin/data`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Unauthorized");
      }

      if (Array.isArray(data)) {
        setSubmissions(data);
      } else {
        throw new Error("Data is not an array");
      }
    } catch (err) {
      console.error("Fetch error:", err.message);
      toast.error("Session expired or unauthorized. Please log in again.");
      localStorage.removeItem("adminToken");
      onLogout();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const token = localStorage.getItem("adminToken");

    try {
      const res = await fetch(`${baseUrl}/api/admin/data/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Delete failed");
      }

      toast.success("Submission deleted");
      fetchData();
    } catch (err) {
      toast.error("Error deleting submission");
      console.error("Delete error:", err);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Form Submissions</h2>
        <button
          onClick={() => {
            localStorage.removeItem("adminToken");
            onLogout();
          }}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {Array.isArray(submissions) && submissions.length > 0 ? (
        <div className="space-y-4">
          {submissions.map((entry) => (
            <div key={entry._id} className="bg-white p-4 rounded shadow">
              <p>
                <strong>Name:</strong> {entry.name}
              </p>
              <p>
                <strong>Email:</strong> {entry.email}
              </p>
              <p>
                <strong>Phone:</strong> {entry.phone}
              </p>
              <p>
                <strong>Message:</strong> {entry.message}
              </p>
              <button
                onClick={() => handleDelete(entry._id)}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No submissions available or unauthorized.</p>
      )}
    </div>
  );
};

export default AdminDashboard;
