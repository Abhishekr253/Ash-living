import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import logoDark from "../assets/al-logo-black.png";

export default function Collaboration() {
  const navigate = useNavigate();

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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            type="text"
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
            className="
              md:col-span-2
              px-5 py-3 rounded-full
              border border-black/20
              bg-black/5
              focus:outline-none
            "
          >
            <option value="">Select Collaboration Type</option>
            <option>Speaking Engagement</option>
            <option>Corporate Wellness</option>
            <option>Retreat Partnership</option>
            <option>Educational Programme</option>
            <option>Creative Project</option>
            <option>Community Initiative</option>
            <option>Mentoring</option>
            <option>Other</option>
          </select>

          <textarea
            rows="5"
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
            className="
              md:col-span-2
              mt-4 py-4 rounded-full
              border border-black
              hover:bg-black hover:text-white
              transition
            "
          >
            SUBMIT COLLABORATION REQUEST
          </button>
        </motion.form>
      </div>
    </div>
  );
}
