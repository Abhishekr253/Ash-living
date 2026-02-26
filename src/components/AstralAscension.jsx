import { motion } from "framer-motion";
import astralImg from "../assets/astral.jpeg";
import logoDark from "../assets/al-logo-black.png";
import { Link } from "react-router-dom";

export default function AstralAscension() {
  return (
    <div className="relative min-h-screen w-full bg-white md:bg-transparent text-black md:text-white">

      {/* Desktop Background */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${astralImg})` }}
      />
      <div className="hidden md:block absolute inset-0 bg-black/60" />

      {/* Content Wrapper */}
      <div className="relative z-10">

        {/* Logo */}
        <div className="pt-10 flex justify-center">
          <Link to="/">
            <img
              src={logoDark}
              alt="Logo"
              className="h-12 md:h-14 hover:opacity-80 transition md:invert"
            />
          </Link>
        </div>

        {/* Main Section */}
        <div className="px-6 py-16 max-w-6xl mx-auto text-center">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.08em] leading-[0.95] mb-10"
          >
            ASTRAL ASCENSION
          </motion.h1>

          {/* Mobile Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            className="mb-10 md:hidden"
          >
            <img
              src={astralImg}
              alt="Astral Ascension"
              className="w-full rounded-2xl object-cover"
            />
          </motion.div>

          {/* Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            className="space-y-6 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-14"
          >
            <p>
              Ash Living Astral Ascension is a high level inner cellular
              regeneration optimisation pathway.
            </p>

            <p>
              We utilise high grade, earth sourced medicine held in a private
              sanctuary.
            </p>

            <p>
              Your ascension is guided to your responses, restoring alignment
              and a measurable return to stability and strength.
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
              placeholder="First name"
              className="px-5 py-3 rounded-full border border-black/30 md:border-white/40 bg-black/5 md:bg-white/10 backdrop-blur-sm focus:outline-none"
            />

            <input
              type="text"
              placeholder="Last name"
              className="px-5 py-3 rounded-full border border-black/30 md:border-white/40 bg-black/5 md:bg-white/10 backdrop-blur-sm focus:outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="md:col-span-2 px-5 py-3 rounded-full border border-black/30 md:border-white/40 bg-black/5 md:bg-white/10 backdrop-blur-sm focus:outline-none"
            />

            <input
              type="tel"
              placeholder="Telephone"
              className="md:col-span-2 px-5 py-3 rounded-full border border-black/30 md:border-white/40 bg-black/5 md:bg-white/10 backdrop-blur-sm focus:outline-none"
            />

            <button
              type="submit"
              className="md:col-span-2 mt-4 py-4 rounded-full border border-black md:border-white hover:bg-black hover:text-white md:hover:bg-white md:hover:text-black transition"
            >
              BEGIN ASCENSION
            </button>
          </motion.form>

        </div>
      </div>
    </div>
  );
}