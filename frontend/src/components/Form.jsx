import React, { useState } from "react";
const baseUrl = import.meta.env.VITE_API_BASE_URL;
import { toast } from "react-toastify";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${baseUrl}/api/form`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    toast.success("Form submitted successfully!");

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center  p-6">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Get in Touch</h1>
        <p className="text-gray-500 mt-2">
          Fill out the form below and we’ll get back to you shortly.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-6 rounded-lg w-full max-w-md space-y-4"
      >
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          rows="4"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
