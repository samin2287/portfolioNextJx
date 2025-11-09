"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    timeline: "",
    details: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name ";
    if (!form.email.trim()) return "Email is required.";
    if (!/\S+@\S+\.\S+/.test(form.email)) return "Enter a valid email address.";
    if (!form.phone.trim()) return "Phone number is required.";
    if (!form.service.trim()) return "Please select a service.";
    if (!form.details.trim()) return "Please add some project details.";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMessage = validate();

    if (errorMessage) {
      toast.error(errorMessage, { position: "top-center" });
      return;
    }

    console.log("Form submitted:", form);
    toast.success("Thanks! Your message has been sent successfully", {
      position: "top-center",
    });

    setForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      timeline: "",
      details: "",
    });
  };

  return (
    <section
      id="contact"
      className="bg-gray-900 flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl w-full text-center text-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">Contact Me</h2>
        <p className="text-gray-400 mb-10">
          Cultivating Connections: Reach Out And Connect With Me
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="bg-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="bg-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
          />

          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="bg-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
          />

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="bg-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 text-gray-400">
            <option value="">Service Of Interest</option>
            <option value="web">Web</option>
            <option value="app">App</option>
            <option value="design">Design</option>
            <option value="branding">Branding</option>
          </select>

          <input
            name="timeline"
            type="text"
            placeholder="Timeline"
            value={form.timeline}
            onChange={handleChange}
            className="bg-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 md:col-span-2"
          />

          <textarea
            name="details"
            placeholder="Project Details..."
            value={form.details}
            onChange={handleChange}
            className="bg-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 h-32 resize-none md:col-span-2"></textarea>

          <div className="md:col-span-2 flex justify-center md:justify-end">
            <button
              type="submit"
              className="w-full md:w-auto border border-gray-500 px-6 py-2 rounded-md cursor-pointer 
               hover:bg-amber-600 hover:border-amber-600 text-white font-semibold transition-all duration-300  active:bg-amber-500  ">
              Send
            </button>
          </div>
        </form>
        <ToastContainer autoClose={3000} theme="dark" />
      </div>
    </section>
  );
}
