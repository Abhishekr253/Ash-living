import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import logoDark from "../assets/al-logo-black.png";

export default function InsideAshLiving() {
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
    mb-8
    whitespace-nowrap
    text-sm
    font-light
    tracking-[0.25em]
    text-black

    sm:text-2xl
    sm:font-medium
    sm:tracking-[0.3em]
  "
        >
          INSIDE ASH LIVING
        </motion.h1>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="space-y-6 text-lg md:text-xl font-light leading-relaxed max-w-4xl mx-auto mb-14 text-gray-700"
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            placeholder="Name"
            className="
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
            type="datetime-local"
            className="
              md:col-span-2
              px-5 py-3 rounded-full
              border border-black/20
              bg-black/5
              focus:outline-none
            "
          />

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
            BOOK A CALL
          </button>
        </motion.form>
      </div>
    </div>
  );
}
