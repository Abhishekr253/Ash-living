import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoDark from "../assets/al-logo-black.png";

export default function ExploreAI() {
  const services = [
  {
    title: "AI Video Production",
    description:
      "Transforming concepts into high-impact AI video content designed to communicate your message with cinematic clarity and visual power.",
  },
  {
    title: "Cinematic Storytelling",
    description:
      "Crafting emotionally intelligent narratives that capture attention, build depth, and move your audience through a refined visual journey.",
  },
  {
    title: "Creative Direction",
    description:
      "Guiding the full creative vision so every image, word, tone, and design choice feels aligned, intentional, and brand-led.",
  },
  {
    title: "AI Visual Design",
    description:
      "Designing futuristic AI visuals that give your brand a distinctive, elevated, and forward-thinking digital identity.",
  },
  {
    title: "Content Generation",
    description:
      "Producing clear, intelligent, and purposeful content that strengthens your message and keeps your brand consistently visible.",
  },
  {
    title: "Brand Experiences",
    description:
      "Building immersive moments that help people feel your brand, understand its purpose, and connect with it on a deeper level.",
  },
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
            className="
    mt-4
    mb-8 md:mb-10
    text-center
    whitespace-nowrap
    text-base
    font-bold
    tracking-[0.2em]
    text-black

    sm:text-xl
    md:text-3xl
    sm:tracking-[0.3em]
  "
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
            <p className="text-sm md:text-base lg:text-xl font-light leading-relaxed text-gray-600">
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
            className="max-w-4xl mx-auto mb-16 md:mb-20"
          >
            <h2
              className="
      mt-4
      mb-6 md:mb-10
      text-center
      whitespace-nowrap
      text-base
      font-bold
      tracking-[0.2em]
      text-black

      sm:text-xl
      md:text-2xl
      sm:tracking-[0.2em]
    "
            >
              AI OVERVIEW
            </h2>

            <p className="text-sm md:text-lg font-light leading-relaxed text-gray-600">
              Explore AI combines advanced artificial intelligence with
              strategic creative thinking to produce premium visual experiences,
              compelling narratives, innovative content, and future-focused
              digital solutions.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-20"
          >
            {services.map((service, index) => (
  <div
    key={index}
    className="
      p-5 md:p-8
      rounded-xl md:rounded-2xl
      border border-black/10
      hover:border-black/30
      transition
      text-left
    "
  >
    <h3 className="text-base md:text-xl font-medium mb-3">
      {service.title}
    </h3>

    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
      {service.description}
    </p>
  </div>
))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full max-w-3xl mx-auto grid grid-cols-1 gap-5"
          >
            <h2 className="text-lg sm:text-xl md:text-4xl font-bold mb-3 md:mb-4 tracking-[0.15em] uppercase">
              Make An Enquiry
            </h2>

            <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
              Tell us about your project and how we can help.
            </p>

            <input
              type="text"
              placeholder="Name"
              className="px-4 md:px-5 py-3 md:py-4 rounded-full border border-black/20 bg-white focus:outline-none text-sm md:text-base"
            />

            <input
              type="email"
              placeholder="Email"
              className="px-4 md:px-5 py-3 md:py-4 rounded-full border border-black/20 bg-white focus:outline-none text-sm md:text-base"
            />

            <input
              type="text"
              placeholder="Company / Organisation"
              className="px-4 md:px-5 py-3 md:py-4 rounded-full border border-black/20 bg-white focus:outline-none text-sm md:text-base"
            />

            <textarea
              rows={6}
              placeholder="Tell us about your project..."
              className="px-4 md:px-5 py-3 md:py-4 rounded-3xl border border-black/20 bg-white resize-none focus:outline-none text-sm md:text-base"
            />

            <button
              type="submit"
              className="
      mt-2
      mx-auto
      px-8 md:px-12
      py-2.5 md:py-3.5
      rounded-full
      bg-black
      text-white
      text-xs md:text-sm
      tracking-[0.15em]
      uppercase
      hover:opacity-90
      transition
    "
            >
              SUBMIT ENQUIRY
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
