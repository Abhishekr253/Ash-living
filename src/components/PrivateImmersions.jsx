import { motion } from "framer-motion";
import privateImg from "../assets/calm.jpeg";
import logoDark from "../assets/al-logo-black.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function PrivateImmersions() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "service_rpuefrw",
        "template_dmpxu4o",
        {
          name: formData.name,
          email: formData.email,
          telephone: formData.telephone,
          message: formData.message,

          section_name: "Private Immersions",

          company_organization: "N/A",
          collaboration_type: "Private Immersion Inquiry",

          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),

          page_url: window.location.href,
          submission_id: `ASH-${Date.now()}`,
        },
        "LxQMBJc2D2fjN75Jp",
      );

      alert("Your Private Immersion request has been submitted.");

      setFormData({
        name: "",
        email: "",
        telephone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="relative min-h-screen w-full bg-white md:bg-transparent text-black md:text-white">
      {/* Desktop Background */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${privateImg})` }}
      />
      <div className="hidden md:block absolute inset-0 bg-black/60" />

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Logo */}
        <div className="pt-10 flex justify-center">
          <Link to="/">
            <img
              src={logoDark}
              alt="Logo"
              className="h-12 md:h-14 hover:opacity-80 transition md:invert"
            />
          </Link>
        </div>

        {/* Main Wrapper */}
        <div className="px-6 py-16 max-w-6xl mx-auto text-center">
          {/* Heading */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="
    mt-4
    mb-10
    whitespace-nowrap
    text-lg
    font-bold
    tracking-[0.25em]
    text-center

    sm:text-3xl
    sm:font-medium
    sm:tracking-[0.2em]
  "
          >
            PRIVATE IMMERSIONS
          </motion.h1>

          {/* Mobile Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            className="mb-10 md:hidden"
          >
            <img
              src={privateImg}
              alt="Private Immersion"
              className="w-full rounded-2xl object-cover"
            />
          </motion.div>

          {/* Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            className="space-y-5 text-sm md:text-lg font-light leading-relaxed max-w-3xl mx-auto mb-14"
          >
            <p>
              Hosted in the world’s most beautiful sanctuaries — designed for
              deep regeneration and complete privacy.
            </p>

            <p>
              From Costa Rican rainforest estates to Italian coastal villas,
              every immersion is curated for measurable transformation.
            </p>

            <p>
              Bespoke guidance. Full body optimisation. Absolute discretion.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="md:col-span-2 px-5 py-3 rounded-full border border-black/30 md:border-white/40 bg-black/5 md:bg-white/10 backdrop-blur-sm focus:outline-none"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="md:col-span-2 px-5 py-3 rounded-full border border-black/30 md:border-white/40 bg-black/5 md:bg-white/10 backdrop-blur-sm focus:outline-none"
            />

            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              placeholder="Telephone"
              className="md:col-span-2 px-5 py-3 rounded-full border border-black/30 md:border-white/40 bg-black/5 md:bg-white/10 backdrop-blur-sm focus:outline-none"
            />

            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Please share what you're ready to heal, your preferred destination, nights, and dates."
              className="md:col-span-2 px-5 py-4 rounded-2xl border border-black/30 md:border-white/40 bg-black/5 md:bg-white/10 backdrop-blur-sm focus:outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="md:col-span-2 mt-4 py-4 rounded-full border border-black md:border-white hover:bg-black hover:text-white md:hover:bg-white md:hover:text-black transition disabled:opacity-50"
            >
              {loading ? "SUBMITTING..." : "BEGIN IMMERSION"}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
