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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!form.service.trim()) {
      newErrors.service = "Please select a service";
    }
    if (!form.details.trim()) {
      newErrors.details = "Please add some project details";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();

    if (!isValid) {
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
    setErrors({});
  };

  return (
    <section
      id="contact"
      className="bg-gray-900 flex items-center justify-center px-6 py-12"
    >
      <div className="max-w-3xl w-full text-center text-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">Contact Me</h2>
        <p className="text-gray-400 mb-10">
          Cultivating Connections: Reach Out And Connect With Me
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <div>
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className={`bg-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 w-full ${
                errors.name
                  ? "border-2 border-red-500 focus:ring-red-500"
                  : "focus:ring-amber-600"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1 text-left">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className={`bg-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 w-full ${
                errors.email
                  ? "border-2 border-red-500 focus:ring-red-500"
                  : "focus:ring-amber-600"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 text-left">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className={`bg-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 w-full ${
                errors.phone
                  ? "border-2 border-red-500 focus:ring-red-500"
                  : "focus:ring-amber-600"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1 text-left">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className={`bg-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 text-gray-400 w-full ${
                errors.service
                  ? "border-2 border-red-500 focus:ring-red-500"
                  : "focus:ring-amber-600"
              }`}
            >
              <option value="">Service Of Interest</option>
              <option value="web">Web</option>
              <option value="app">App</option>
              <option value="design">Design</option>
              <option value="branding">Branding</option>
            </select>
            {errors.service && (
              <p className="text-red-500 text-sm mt-1 text-left">
                {errors.service}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <input
              name="timeline"
              type="text"
              placeholder="Timeline"
              value={form.timeline}
              onChange={handleChange}
              className="bg-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 w-full"
            />
          </div>

          <div className="md:col-span-2">
            <textarea
              name="details"
              placeholder="Project Details..."
              value={form.details}
              onChange={handleChange}
              className={`bg-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 h-32 resize-none w-full ${
                errors.details
                  ? "border-2 border-red-500 focus:ring-red-500"
                  : "focus:ring-amber-500"
              }`}
            ></textarea>
            {errors.details && (
              <p className="text-red-500 text-sm mt-1 text-left">
                {errors.details}
              </p>
            )}
          </div>

          <div className="md:col-span-2 flex justify-center md:justify-end">
            <button
              type="submit"
              className="w-full md:w-auto border border-gray-500 px-6 py-2 rounded-md cursor-pointer 
               hover:bg-amber-600 hover:border-amber-600 text-white font-semibold transition-all duration-300  active:bg-amber-500  "
            >
              Send
            </button>
          </div>
        </form>
        <ToastContainer autoClose={3000} theme="dark" />
      </div>
    </section>
  );
}
