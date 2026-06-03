import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function InsideAshLiving() {
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
          Inside Ash Living
        </h1>

        {/* Description */}
        <div className="space-y-6 text-center text-gray-600 dark:text-gray-400 leading-relaxed mb-14">
          <p>
            Ash Living is an initiation into the infinite architecture of human
            transformation, where we activate consciousness, emotional
            intelligence, and energetic refinement.
          </p>

          <p>
            Ash Living supports individuals through advanced holistic
            mentoring, metaphysical guidance, and conscious self-mastery,
            helping them return to a more sovereign, awakened, and powerful
            state of being.
          </p>

          <p>
            To understand the full depth of this work, please book a call to
            speak with Ash directly, where he can explain the process further
            and guide you towards alignment.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Name"
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
            type="datetime-local"
            className="
              w-full p-4 rounded-xl
              border border-gray-300 dark:border-white/20
              bg-white dark:bg-white/5
              focus:outline-none
            "
          />

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
            Book a Call
          </button>
        </form>
      </motion.div>
    </div>
  );
}