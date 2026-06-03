import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import logoDark from "../assets/al-logo-black.png";

export default function AshLivingShop() {
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
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-5xl font-serif mb-6 tracking-wide"
        >
          SHOP
        </motion.h1>

        {/* Launching Soon */}
        <p className="text-xl md:text-2xl font-light mb-8 text-gray-700">
          Launching Soon
        </p>

        {/* Intro */}
        <div className="max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed text-gray-700 mb-14 space-y-6">
          <p>The Ash Living Shop is currently being prepared.</p>

          <p>
            Discover Regenerative Essentials and future offerings designed to
            support vitality, balance, wellbeing, and conscious living.
          </p>

          <p>Join our waitlist below to receive updates and early access.</p>
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
              className="
                flex-1
                px-5 py-4
                rounded-full
                border border-black/20
                bg-black/5
                focus:outline-none
              "
            />

            <button
              type="submit"
              className="
                px-8 py-4
                rounded-full
                border border-black
                hover:bg-black
                hover:text-white
                transition
                whitespace-nowrap
              "
            >
              JOIN WAITLIST
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
