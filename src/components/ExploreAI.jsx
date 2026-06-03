import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoDark from "../assets/al-logo-black.png";

export default function ExploreAI() {
  const services = [
    "AI Video Production",
    "Cinematic Storytelling",
    "Creative Direction",
    "AI Visual Design",
    "Content Generation",
    "Brand Experiences",
  ];

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
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif mb-10 tracking-wide"
          >
            EXPLORE AI
          </motion.h1>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <p className="text-lg md:text-xl font-light leading-relaxed text-gray-600">
              Advanced artificial intelligence, cinematic storytelling, and
              human-guided creative direction designed to elevate brands,
              businesses, creators, and visionary projects through premium
              digital experiences.
            </p>
          </motion.div>

          {/* AI Overview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              AI Overview
            </h2>

            <p className="text-lg font-light leading-relaxed text-gray-600">
              Explore AI combines advanced artificial intelligence with
              strategic creative thinking to produce premium visual
              experiences, compelling narratives, innovative content, and
              future-focused digital solutions.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="
                  p-8
                  rounded-2xl
                  border border-black/10
                  hover:border-black/30
                  transition
                "
              >
                <h3 className="text-xl font-medium mb-3">{service}</h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  Premium AI-powered solutions tailored for modern businesses,
                  personal brands, creative projects, and transformative
                  digital experiences.
                </p>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-6">
              Ready To Explore What's Possible?
            </h2>

            <p className="max-w-3xl mx-auto text-lg font-light text-gray-600 mb-10">
              Discover how advanced AI can transform content creation,
              storytelling, branding, and digital experiences.
            </p>

            <button
              className="
                px-10 py-4
                rounded-full
                bg-black
                text-white
                hover:opacity-90
                transition
              "
            >
              BOOK A DISCOVERY CALL
            </button>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full max-w-3xl mx-auto grid grid-cols-1 gap-6"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Make An Enquiry
            </h2>

            <p className="text-gray-600 mb-4">
              Tell us about your project and how we can help.
            </p>

            <input
              type="text"
              placeholder="Name"
              className="px-5 py-4 rounded-full border border-black/20 bg-white focus:outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="px-5 py-4 rounded-full border border-black/20 bg-white focus:outline-none"
            />

            <input
              type="text"
              placeholder="Company / Organisation"
              className="px-5 py-4 rounded-full border border-black/20 bg-white focus:outline-none"
            />

            <textarea
              rows={6}
              placeholder="Tell us about your project..."
              className="px-5 py-4 rounded-3xl border border-black/20 bg-white resize-none focus:outline-none"
            />

            <button
              type="submit"
              className="mt-2 py-4 rounded-full bg-black text-white hover:opacity-90 transition"
            >
              SUBMIT ENQUIRY
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}