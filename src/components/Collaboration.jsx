import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import logoDark from "../assets/al-logo-black.png";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Collaboration() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    companyOrganization: "",
    email: "",
    telephone: "",
    collaborationType: "",
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

          company_organization: formData.companyOrganization,
          collaboration_type: formData.collaborationType,

          section_name: "Collaboration",

          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),

          page_url: window.location.href,
          submission_id: `ASH-${Date.now()}`,
        },
        "LxQMBJc2D2fjN75Jp",
      );

      alert("Collaboration request submitted successfully.");

      setFormData({
        name: "",
        companyOrganization: "",
        email: "",
        telephone: "",
        collaborationType: "",
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
    <div className="min-h-screen w-full bg-white text-black">
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
    tracking-[0.5em]
    text-black
    text-center

    sm:text-3xl
    sm:font-medium
    sm:tracking-[0.2em]
  "
        >
          COLLABORATION
        </motion.h1>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="space-y-5 text-sm md:text-lg font-light leading-relaxed max-w-4xl mx-auto mb-14 text-gray-700"
        >
          <p>
            An invitation for aligned companies, schools, organisations,
            creatives, leaders, and visionaries who recognise the need for a new
            standard in wellbeing, consciousness, education, and human
            development.
          </p>

          <p>
            Ash Living is open to building meaningful partnerships that bring
            deeper awareness, emotional intelligence, holistic support,
            conscious communication, and transformational experiences into
            powerful new spaces.
          </p>

          <p>
            Whether through talks, mentoring, retreats, corporate wellness,
            creative projects, educational programmes, or community initiatives,
            we welcome collaborations rooted in integrity, purpose, innovation,
            and real impact.
          </p>

          <p>
            If your vision aligns with the Ash Living movement, we invite you to
            connect with us and explore what can be created together.
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
            placeholder="Full Name"
            className="
              px-5 py-3 rounded-full
              border border-black/20
              bg-black/5
              focus:outline-none
            "
          />

          <input
            type="text"
            name="companyOrganization"
            value={formData.companyOrganization}
            onChange={handleChange}
            placeholder="Company / Organisation"
            className="
              px-5 py-3 rounded-full
              border border-black/20
              bg-black/5
              focus:outline-none
            "
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="
              md:col-span-2
              px-5 py-3 rounded-full
              border border-black/20
              bg-black/5
              focus:outline-none
            "
          />

          <input
            type="tel"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            placeholder="Telephone"
            className="
              md:col-span-2
              px-5 py-3 rounded-full
              border border-black/20
              bg-black/5
              focus:outline-none
            "
          />

          <select
            name="collaborationType"
            value={formData.collaborationType}
            onChange={handleChange}
            className="
    md:col-span-2
    px-5 py-3 rounded-full
    border border-black/20
    bg-black/5
    focus:outline-none
  "
          >
            <option value="">Select Collaboration Type</option>
            <option value="Speaking Engagement">Speaking Engagement</option>
            <option value="Corporate Wellness">Corporate Wellness</option>
            <option value="Retreat Partnership">Retreat Partnership</option>
            <option value="Educational Programme">Educational Programme</option>
            <option value="Creative Project">Creative Project</option>
            <option value="Community Initiative">Community Initiative</option>
            <option value="Mentoring">Mentoring</option>
            <option value="Other">Other</option>
          </select>

          <textarea
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="
              md:col-span-2
              px-5 py-4 rounded-2xl
              border border-black/20
              bg-black/5
              resize-none
              focus:outline-none
            "
          />

          <button
            type="submit"
            disabled={loading}
            className="
    md:col-span-2
    mt-4 py-4 rounded-full
    border border-black
    hover:bg-black hover:text-white
    transition
    disabled:opacity-50
  "
          >
            {loading ? "SUBMITTING..." : "SUBMIT COLLABORATION REQUEST"}
          </button>
        </motion.form>
      </div>
    </div>
  );
}
