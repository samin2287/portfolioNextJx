"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "./Container";
import { FaEnvelope, FaWhatsapp, FaLocationDot, FaPaperPlane, FaClock } from "react-icons/fa6";
import "aos/dist/aos.css";

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
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

  const constructWhatsAppUrl = () => {
    const message = `Hi Zubayer,\n\nI reached out via your portfolio website:\n• Name: ${form.name || "Client"}\n• Email: ${form.email || "N/A"}\n• Phone: ${form.phone || "N/A"}\n• Service: ${form.service || "General Inquiry"}\n• Timeline: ${form.timeline || "Flexible"}\n\nProject Details:\n${form.details || "I'd like to discuss a project."}`;
    return `https://wa.me/8801640916341?text=${encodeURIComponent(message)}`;
  };

  const constructMailtoUrl = () => {
    const subject = `Portfolio Inquiry from ${form.name || "Client"} (${form.service || "General"})`;
    const body = `Hi Zubayer,\n\nName: ${form.name || "Client"}\nEmail: ${form.email || "N/A"}\nPhone: ${form.phone || "N/A"}\nService: ${form.service || "General Inquiry"}\nTimeline: ${form.timeline || "Flexible"}\n\nProject Details:\n${form.details || "I'd like to discuss a project."}`;
    return `mailto:zubayersamin210@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();

    if (!isValid) {
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      toast.error(
        "Contact form service is not configured (missing NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY). Please reach out directly via WhatsApp or Email below."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          timeline: form.timeline || "Flexible",
          message: form.details,
          subject: `Portfolio Message from ${form.name} (${form.service})`,
          from_name: form.name,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        toast.success(
          "Thank you! Your message has been sent successfully. I will get back to you soon!"
        );
        setForm({
          name: "",
          email: "",
          phone: "",
          service: "",
          timeline: "",
          details: "",
        });
        setErrors({});
      } else {
        toast.error(
          data.message ||
            "Could not send automatically. Please reach out directly via WhatsApp or Email below."
        );
      }
    } catch (err) {
      toast.error(
        "Network connection error. Please reach out directly via WhatsApp or Email below."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      data-aos="fade-up"
      data-aos-duration="700"
      className="bg-gray-900 py-16 sm:py-20 lg:py-24"
    >
      <Container>
        {/* Section Heading */}
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Contact Me
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Cultivating Connections: Reach out to discuss new projects, creative collaborations, or opportunities.
          </p>
        </div>

        {/* 2-Column Layout: Contact Info Cards + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700/60 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Let&apos;s talk about your project
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Have a question or looking to build a high-performance web application? Send a message or connect directly through any channel.
              </p>

              <div className="space-y-4">
                {/* Email Item */}
                <a
                  href={constructMailtoUrl()}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-gray-800/80 border border-gray-700/50 hover:border-amber-500/50 hover:bg-gray-800 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 text-lg group-hover:scale-110 transition-transform">
                    <FaEnvelope />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-xs text-gray-400 font-medium">Email</span>
                    <span className="text-sm font-semibold text-gray-200 group-hover:text-amber-400 transition-colors truncate block">
                      zubayersamin210@gmail.com
                    </span>
                  </div>
                </a>

                {/* WhatsApp Item */}
                <a
                  href={constructWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-gray-800/80 border border-gray-700/50 hover:border-emerald-500/50 hover:bg-gray-800 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 text-lg group-hover:scale-110 transition-transform">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400 font-medium">WhatsApp</span>
                    <span className="text-sm font-semibold text-gray-200 group-hover:text-emerald-400 transition-colors">
                      +880 1640 916341
                    </span>
                  </div>
                </a>

                {/* Location Item */}
                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-gray-800/80 border border-gray-700/50">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 text-lg">
                    <FaLocationDot />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400 font-medium">Location</span>
                    <span className="text-sm font-semibold text-gray-200">
                      Dhaka, Bangladesh (Remote Worldwide)
                    </span>
                  </div>
                </div>

                {/* Availability Badge */}
                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-gray-800/80 border border-gray-700/50">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 text-lg">
                    <FaClock />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400 font-medium">Status</span>
                    <span className="text-sm font-semibold text-emerald-400 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Available for Projects & Roles
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-gray-800/90 to-gray-900 border border-gray-700/60 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="sr-only">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Your Name *"
                      aria-label="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      className={`bg-gray-800/90 border p-3 rounded-lg focus:outline-none focus:ring-2 w-full text-gray-100 transition-all ${
                        errors.name
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-700 focus:border-amber-500 focus:ring-amber-500/20"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="sr-only">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="Your Email *"
                      aria-label="Your Email"
                      value={form.email}
                      onChange={handleChange}
                      className={`bg-gray-800/90 border p-3 rounded-lg focus:outline-none focus:ring-2 w-full text-gray-100 transition-all ${
                        errors.email
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-700 focus:border-amber-500 focus:ring-amber-500/20"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="sr-only">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="Phone Number *"
                      aria-label="Phone Number"
                      value={form.phone}
                      onChange={handleChange}
                      className={`bg-gray-800/90 border p-3 rounded-lg focus:outline-none focus:ring-2 w-full text-gray-100 transition-all ${
                        errors.phone
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-700 focus:border-amber-500 focus:ring-amber-500/20"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="sr-only">
                      Service Of Interest
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      aria-label="Service Of Interest"
                      value={form.service}
                      onChange={handleChange}
                      className={`bg-gray-800/90 border p-3 rounded-lg focus:outline-none focus:ring-2 w-full transition-all ${
                        form.service ? "text-gray-100" : "text-gray-400"
                      } ${
                        errors.service
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-700 focus:border-amber-500 focus:ring-amber-500/20"
                      }`}
                    >
                      <option value="" className="text-gray-400">
                        Select a Service *
                      </option>
                      <option value="Frontend Development" className="text-gray-100">
                        Frontend Development (React / Next.js)
                      </option>
                      <option value="Webflow Development" className="text-gray-100">
                        Webflow Development
                      </option>
                      <option value="UI/UX Design" className="text-gray-100">
                        UI/UX Design & Prototyping
                      </option>
                      <option value="Full Stack Integration" className="text-gray-100">
                        Full Stack / API Integration
                      </option>
                      <option value="Website Optimization" className="text-gray-100">
                        Performance & Website Optimization
                      </option>
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-xs mt-1">{errors.service}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-timeline" className="sr-only">
                    Project Timeline
                  </label>
                  <input
                    id="contact-timeline"
                    name="timeline"
                    type="text"
                    placeholder="Project Timeline (e.g. 2 weeks, 1 month, Urgent)"
                    aria-label="Project Timeline"
                    value={form.timeline}
                    onChange={handleChange}
                    className="bg-gray-800/90 border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 w-full text-gray-100 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-details" className="sr-only">
                    Project Details
                  </label>
                  <textarea
                    id="contact-details"
                    name="details"
                    placeholder="Tell me about your project, goals, or requirements... *"
                    aria-label="Project Details"
                    rows={4}
                    value={form.details}
                    onChange={handleChange}
                    className={`bg-gray-800/90 border p-3 rounded-lg focus:outline-none focus:ring-2 resize-none w-full text-gray-100 transition-all ${
                      errors.details
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-700 focus:border-amber-500 focus:ring-amber-500/20"
                    }`}
                  />
                  {errors.details && (
                    <p className="text-red-500 text-xs mt-1">{errors.details}</p>
                  )}
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg font-semibold text-white transition-all duration-300 shadow-lg ${
                      isSubmitting
                        ? "bg-amber-600/50 cursor-not-allowed text-gray-300"
                        : "bg-[#FD6F00] hover:bg-[#ff8a33] hover:shadow-[#FD6F00]/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                    }`}
                  >
                    <span>{isSubmitting ? "Sending Message..." : "Send Message"}</span>
                    <FaPaperPlane className="text-sm" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <ToastContainer autoClose={3500} theme="dark" position="bottom-right" />
      </Container>
    </section>
  );
}
