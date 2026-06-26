import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import logoDark from "../assets/al-logo-black.png";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function InsideAshLiving({ isDark = false }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    telephone: "",
    email: "",
    dateTime: "",
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

          section_name: "Inside Ash Living",

          company_organization: "N/A",
          collaboration_type: "Book A Call",

          requested_datetime: formData.dateTime,

          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),

          page_url: window.location.href,
          submission_id: `ASH-${Date.now()}`,
        },
        "LxQMBJc2D2fjN75Jp",
      );

      alert("Your booking request has been submitted.");

      setFormData({
        name: "",
        telephone: "",
        email: "",
        dateTime: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to submit request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-500 ${
        isDark ? "bg-[#080808] text-white" : "bg-white text-black"
      }`}
    >
      {/* Logo */}
      <div className="pt-10 flex justify-center">
        <Link to="/">
          <img
            src={logoDark}
            alt="Ash Living"
            className={`h-12 md:h-14 hover:opacity-80 transition ${
              isDark ? "invert" : ""
            }`}
          />
        </Link>
      </div>

      {/* Content */}
      <div className="px-6 py-16 max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className={`
  mb-8
  whitespace-nowrap
  text-sm
  font-bold
  tracking-[0.25em]

  sm:text-2xl
  sm:font-medium
  sm:tracking-[0.3em]

  ${
    isDark
      ? "text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]"
      : "text-black drop-shadow-[0_0_30px_rgba(0,0,0,0.15)]"
  }
`}
        >
          INSIDE ASH LIVING
        </motion.h1>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className={`
    space-y-5
    text-sm
    md:text-lg
    font-light
    leading-relaxed
    max-w-4xl
    mx-auto
    mb-14
    ${isDark ? "text-white/75" : "text-gray-700"}
  `}
        >
          <p>
            Ash Living is an initiation into the infinite architecture of human
            transformation, where we activate consciousness, emotional
            intelligence, and energetic refinement.
          </p>

          <p>
            Ash Living supports individuals through advanced holistic mentoring,
            metaphysical guidance, and conscious self-mastery, helping them
            return to a more sovereign, awakened, and powerful state of being.
          </p>

          <p>
            To understand the full depth of this work, please book a call to
            speak with Ash directly, where he can explain the process further
            and guide you towards alignment.
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
            className={`
px-5 py-3 rounded-full
backdrop-blur-sm
focus:outline-none
transition-all

${
  isDark
    ? "bg-white/5 border border-white/20 text-white placeholder:text-white/40"
    : "bg-black/5 border border-black/20 text-black placeholder:text-black/40"
}
`}
          />

          <input
            type="tel"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            placeholder="Telephone"
            className={`
  px-5 py-3 rounded-full
  backdrop-blur-sm
  focus:outline-none
  transition-all

  ${
    isDark
      ? "bg-white/5 border border-white/20 text-white placeholder:text-white/40"
      : "bg-black/5 border border-black/20 text-black placeholder:text-black/40"
  }
`}
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={`
  md:col-span-2
  px-5 py-3 rounded-full
  backdrop-blur-sm
  focus:outline-none
  transition-all

  ${
    isDark
      ? "bg-white/5 border border-white/20 text-white placeholder:text-white/40"
      : "bg-black/5 border border-black/20 text-black placeholder:text-black/40"
  }
`}
          />

          <div className="md:col-span-2">
            <label
              className={`block text-sm mb-2 text-left ${
                isDark ? "text-white/60" : "text-gray-600"
              }`}
            >
              Date and Time
            </label>
            <input
              type="datetime-local"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
              className={`
  w-full
  px-5 py-3 rounded-full
  backdrop-blur-sm
  focus:outline-none
  transition-all

  ${
    isDark
      ? "bg-white/5 border border-white/20 text-white"
      : "bg-black/5 border border-black/20 text-black"
  }
`}
            />
          </div>

          <textarea
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className={`
md:col-span-2
px-5
py-4
rounded-2xl
resize-none
backdrop-blur-sm
focus:outline-none
transition-all

${
  isDark
    ? "bg-white/5 border border-white/20 text-white placeholder:text-white/40"
    : "bg-black/5 border border-black/20 text-black placeholder:text-black/40"
}
`}
          />

          <button
            type="submit"
            disabled={loading}
            className={`
md:col-span-2
mt-4
py-4
rounded-full
transition-all
duration-300

${
  isDark
    ? "bg-white text-black hover:bg-[#d6c7a0]"
    : "bg-black text-white hover:bg-[#b08a45] hover:text-black"
}
`}
          >
            {loading ? "SUBMITTING..." : "BOOK A CALL"}
          </button>
        </motion.form>
      </div>
    </div>
  );
}
