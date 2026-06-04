import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoDark from "../assets/al-logo-black.png";

export default function Support247() {
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
    text-lg
    font-bold
    tracking-[0.2em]
    text-black

    sm:text-3xl
    sm:font-medium
    sm:tracking-[0.2em]
  "
          >
            24/7 SUPPORT
          </motion.h1>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            className="space-y-6 text-sm md:text-lg font-light leading-relaxed max-w-4xl mx-auto mb-14 text-gray-600"
          >
            <p>
              Conscious support is available for those who require guidance,
              reassurance, or emotional support during moments of overwhelm,
              uncertainty, vulnerability, or transition.
            </p>

            <p>
              If you feel you need support, please complete the form below and
              our Conscious Support Specialist will review your request and
              respond as soon as possible.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full max-w-3xl mx-auto grid grid-cols-1 gap-6"
          >
            <input
              type="text"
              placeholder="Name"
              className="px-5 py-4 rounded-full border border-black/20 bg-white focus:outline-none"
            />

            <input
              type="tel"
              placeholder="Telephone"
              className="px-5 py-4 rounded-full border border-black/20 bg-white focus:outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="px-5 py-4 rounded-full border border-black/20 bg-white focus:outline-none"
            />

            <textarea
              rows="6"
              placeholder="How can we support you?"
              className="px-5 py-4 rounded-3xl border border-black/20 bg-white focus:outline-none resize-none"
            />

            <button
              type="submit"
              className="mt-2 py-4 rounded-full bg-black text-white hover:opacity-90 transition"
            >
              REQUEST SUPPORT
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
