import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Collaboration() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-32 pb-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto"
      >
        {/* Back Button */}
        <motion.button
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)}
          className="
            inline-flex items-center gap-2
            px-4 py-2
            rounded-full
            border border-gray-200 dark:border-white/20
            text-sm tracking-[0.15em] uppercase
            hover:bg-gray-100 dark:hover:bg-white/10
            transition
            mb-10
          "
        >
          <ArrowLeft size={16} />
          Back
        </motion.button>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-serif text-center mb-8">
          Collaboration
        </h1>

        {/* Content */}
        <div className="space-y-6 text-center text-gray-600 dark:text-gray-400 leading-relaxed mb-14">
          <p>
            An invitation for aligned companies, schools, organisations,
            creatives, leaders, and visionaries who recognise the need for a
            new standard in wellbeing, consciousness, education, and human
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
        </div>

        {/* Form */}
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="
              w-full p-4 rounded-xl
              border border-gray-300 dark:border-white/20
              bg-white dark:bg-white/5
              focus:outline-none
            "
          />

          <input
            type="text"
            placeholder="Company / Organisation"
            className="
              w-full p-4 rounded-xl
              border border-gray-300 dark:border-white/20
              bg-white dark:bg-white/5
              focus:outline-none
            "
          />

          <input
            type="email"
            placeholder="Email"
            className="
              w-full p-4 rounded-xl
              border border-gray-300 dark:border-white/20
              bg-white dark:bg-white/5
              focus:outline-none
            "
          />

          <input
            type="tel"
            placeholder="Telephone"
            className="
              w-full p-4 rounded-xl
              border border-gray-300 dark:border-white/20
              bg-white dark:bg-white/5
              focus:outline-none
            "
          />

          <select
            className="
              w-full p-4 rounded-xl
              border border-gray-300 dark:border-white/20
              bg-white dark:bg-white/5
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
            rows={6}
            placeholder="Message"
            className="
              w-full p-4 rounded-xl
              border border-gray-300 dark:border-white/20
              bg-white dark:bg-white/5
              resize-none
              focus:outline-none
            "
          />

          <button
            type="submit"
            className="
              w-full py-4
              rounded-full
              bg-black text-white
              dark:bg-white dark:text-black
              hover:scale-[1.02]
              transition
            "
          >
            Submit Collaboration Request
          </button>
        </form>
      </motion.div>
    </div>
  );
}