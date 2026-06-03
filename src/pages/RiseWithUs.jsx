import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoDark from "../assets/al-logo-black.png";

export default function RiseWithUs() {
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif mb-10 tracking-wide"
          >
            RISE WITH US
          </motion.h1>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            className="space-y-6 text-base md:text-lg font-light leading-relaxed max-w-4xl mx-auto mb-14"
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
              placeholder="Tell us about your goals and what you would like support with."
              className="px-5 py-4 rounded-3xl border border-black/20 bg-white focus:outline-none resize-none"
            />

            <button
              type="submit"
              className="mt-2 py-4 rounded-full bg-black text-white hover:opacity-90 transition"
            >
              CONNECT WITH US
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
