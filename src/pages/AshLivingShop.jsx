import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AshLivingShop() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center px-6">
      <button
        onClick={() => navigate(-1)}
        className="
          absolute top-8 left-6
          p-3 rounded-full
          border border-gray-300 dark:border-white/20
          hover:bg-gray-100 dark:hover:bg-white/10
          transition
        "
      >
        <ArrowLeft size={18} />
      </button>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        {/* Branding */}
        <p className="tracking-[0.35em] uppercase text-xs sm:text-sm mb-6 text-gray-500 dark:text-gray-400">
          Ash Living
        </p>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif mb-6">
          Shop
        </h1>

        {/* Launching Soon */}
        <p className="text-xl md:text-2xl font-light mb-8 text-gray-700 dark:text-gray-300">
          Launching Soon
        </p>

        {/* Intro */}
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed mb-12 text-base sm:text-lg">
          The Ash Living Shop is currently being prepared. Discover
          Regenerative Essentials and future offerings designed to support
          vitality, balance, wellbeing, and conscious living. Join our waitlist
          below to receive updates and early access.
        </p>

        {/* Email Signup */}
        <form
          className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="
              flex-1
              px-5 py-4
              rounded-full
              bg-transparent
              border border-gray-300 dark:border-white/20
              text-black dark:text-white
              placeholder-gray-500 dark:placeholder-gray-400
              focus:outline-none
              focus:ring-2
              focus:ring-black
              dark:focus:ring-white
            "
          />

          <button
            type="submit"
            className="
              px-8 py-4
              rounded-full
              bg-black text-white
              dark:bg-white dark:text-black
              hover:scale-105
              transition
              whitespace-nowrap
            "
          >
            Join Waitlist
          </button>
        </form>
      </motion.div>
    </div>
  );
}