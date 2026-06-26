import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoDark from "../assets/al-logo-black.png";

export default function AshLivingShop({ isDark = false }) {
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
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`
            mt-4
            mb-6
            text-center
            whitespace-nowrap
            text-lg
            font-bold
            tracking-[0.25em]

            sm:text-3xl
            sm:font-medium
            sm:tracking-[0.3em]

            ${
              isDark
                ? "text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]"
                : "text-black drop-shadow-[0_0_30px_rgba(0,0,0,0.15)]"
            }
          `}
        >
          SHOP
        </motion.h1>

        {/* Launching Soon */}
        <p
          className={`text-xl md:text-2xl font-light mb-8 ${
            isDark ? "text-white/70" : "text-gray-700"
          }`}
        >
          Launching Soon
        </p>

        {/* Intro */}
        <div
          className={`max-w-3xl mx-auto text-sm md:text-xl font-light leading-relaxed mb-14 space-y-6 ${
            isDark ? "text-white/80" : "text-gray-700"
          }`}
        >
          <p>The Ash Living Shop is currently being prepared.</p>

          <p>
            Discover Regenerative Essentials and future offerings designed to
            support vitality, balance, wellbeing, and conscious living.
          </p>

          <p>
            Join our waitlist below to receive updates and early access.
          </p>
        </div>

        {/* Waitlist Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Email Address"
              className={`
                flex-1
                px-5 py-4
                rounded-full
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
              className={`
                px-8
                py-4
                rounded-full
                transition-all
                duration-300
                whitespace-nowrap

                ${
                  isDark
                    ? "bg-white text-black hover:bg-[#d6c7a0]"
                    : "bg-black text-white hover:bg-[#b08a45] hover:text-black"
                }
              `}
            >
              JOIN WAITLIST
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}