import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoDark from "../assets/al-logo-black.png";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function RiseWithUs() {
  const [formData, setFormData] = useState({
    name: "",
    telephone: "",
    email: "",
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

          section_name: "Rise With Us",

          company_organization: "N/A",
          collaboration_type: "Growth & Mentorship Inquiry",

          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),

          page_url: window.location.href,
          submission_id: `ASH-${Date.now()}`,
        },
        "LxQMBJc2D2fjN75Jp",
      );

      alert("Thank you for reaching out. We'll be in touch soon.");

      setFormData({
        name: "",
        telephone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Email Error:", error);
      alert("Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="relative min-h-screen w-full bg-white  text-black">
      {/* Desktop Background */}
      <div className="hidden md:block absolute inset-0 " />

      {/* Content */}
      <div className="relative z-10">
        {/* Logo */}
        <div className="pt-10 flex justify-center">
          <Link to="/">
            <img
              src={logoDark}
              alt="Ash Living"
              className="h-12 md:h-14 hover:opacity-80 transition "
            />
          </Link>
        </div>

        <div className="px-6 py-16 max-w-6xl mx-auto text-center">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="
    mt-4
    mb-12
    text-center
    whitespace-nowrap
    text-lg
    font-bold
    tracking-[0.25em]
    text-black

    sm:text-2xl
    sm:font-medium
    sm:tracking-[0.3em]
  "
          >
            RISE WITH US
          </motion.h1>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            className="
  space-y-5
  text-sm
  md:text-lg
  lg:text-xl
  font-light
  leading-relaxed
  text-gray-600
  max-w-3xl
  mx-auto
  mb-16
"
          >
            <p>
              You now have access to a deeper level of growth, refinement, and
              personal transformation.
            </p>

            <p>
              Through conscious mentoring, strategic guidance, emotional
              intelligence, and practical integration, we support individuals in
              creating meaningful and measurable change.
            </p>

            <p>
              If you are ready to elevate your mindset, direction, wellbeing,
              and personal leadership, we invite you to connect with us.
            </p>
          </motion.div>

          {/* Form */}
          <div className="max-w-3xl mx-auto rounded-3xl border border-black/10 p-6 sm:p-10">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.2 }}
              className="grid grid-cols-1 gap-5"
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

              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your goals and what you would like support with."
                className="px-5 py-4 rounded-3xl border border-black/20 bg-white focus:outline-none resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="
    mt-2
    px-6 md:px-8
    py-2.5 md:py-3
    w-fit
    mx-auto
    rounded-full
    bg-black
    text-white
    text-xs md:text-sm
    tracking-[0.12em]
    uppercase
    hover:opacity-90
    transition
    disabled:opacity-50
  "
              >
                {loading ? "SENDING..." : "CONNECT WITH US"}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
}
