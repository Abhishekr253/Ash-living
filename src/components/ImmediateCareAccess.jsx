import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoDark from "../assets/al-logo-black.png";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ImmediateCareAccess() {
  const [formData, setFormData] = useState({
    name: "",
    telephone: "",
    email: "",
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

          message: "Immediate Care Access Request",

          section_name: "Immediate Care Access",

          company_organization: "N/A",
          collaboration_type: "Immediate Care Request",

          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),

          page_url: window.location.href,
          submission_id: `ASH-${Date.now()}`,
        },
        "LxQMBJc2D2fjN75Jp",
      );

      alert("Your request has been submitted.");

      setFormData({
        name: "",
        telephone: "",
        email: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to submit request.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="relative z-10">
        {/* Logo */}
        <div className="pt-10 flex justify-center">
          <Link to="/">
            <img
              src={logoDark}
              alt="Ash Living"
              className="h-12 md:h-14 hover:opacity-80 transition"
            />
          </Link>
        </div>

        {/* Content */}
        <div className="px-6 py-16 max-w-6xl mx-auto text-center">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="
    mt-4
    mb-10
    text-center
    whitespace-nowrap
    text-base
    font-bold
    tracking-[0.2em]
    text-black

    sm:text-3xl
    sm:font-medium
    sm:tracking-[0.2em]
  "
          >
            IMMEDIATE CARE ACCESS
          </motion.h1>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-4xl mx-auto mb-14"
          >
            <p className="text-sm md:text-lg font-light leading-relaxed text-gray-600">
              If you are currently feeling vulnerable and in need of conscious
              support, please fill in your details below and a Conscious Support
              Specialist will respond as soon as possible within a reasonable
              response time.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full max-w-3xl mx-auto grid grid-cols-1 gap-6"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="px-5 py-4 rounded-full border border-black/20 bg-white focus:outline-none"
            />

            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              placeholder="Telephone"
              className="px-5 py-4 rounded-full border border-black/20 bg-white focus:outline-none"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="px-5 py-4 rounded-full border border-black/20 bg-white focus:outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-2 py-4 rounded-full bg-black text-white hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "SUBMITTING..." : "REQUEST SUPPORT"}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
