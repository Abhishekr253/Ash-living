import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import aiCreativeVideo from "../assets/Professional_Mode_Astronaut_snowboarding_directly_.mp4";
import Aiimage1 from "../assets/Aiimage1.jpeg";
import Aiimage2 from "../assets/Aiimage2.jpeg";
import Aipoweredcollab from "../assets/Aipoweredcollab.jpeg";
import Collaborations from "../assets/collabarations.jpeg";
import InsideAshLiving from "../assets/insideashlivin.jpeg";
import Aiimage3 from "../assets/Aiimage3.jpeg";
import Rise from "../assets/risewithus.jpeg";

const items = [
  {
    name: "ASH LIVING PRODUCTS",
    description:
      "Premium wellness products crafted for optimal living. Experience natural solutions that enhance your daily routine and overall wellbeing.",
    image: Aiimage1,
    color: "text-green-700 dark:text-green-400",
    bgColor: "bg-green-700/20",
  },
  {
    name: "SOVEREIGN SPACE",
    description:
      "Your personal sanctuary for growth and transformation. A dedicated environment for self-discovery and empowerment.",
    image: Aiimage3,
    color: "text-blue-700 dark:text-blue-400",
    bgColor: "bg-blue-700/20",
  },
  {
    name: "COLLABORATION",
    description:
      "Join forces with experts and like-minded individuals. Build meaningful connections that accelerate your journey.",
    image: Collaborations,
    color: "text-yellow-600 dark:text-yellow-400",
    bgColor: "bg-yellow-600/20",
  },
  {
    name: "AI SYSTEMS",
    description:
      "Intelligent support systems for personalized guidance. Leverage cutting-edge technology for your growth.",
    image: Aipoweredcollab,
    color: "text-gray-600 dark:text-gray-400",
    bgColor: "bg-gray-600/20",
  },
  {
    name: "WHOLENESS",
    description:
      "Achieve complete harmony of mind, body, and spirit. Our holistic approach ensures balanced development.",
    image: Aiimage2,
    color: "text-orange-700 dark:text-orange-400",
    bgColor: "bg-orange-700/20",
  },
  {
    name: "INSIDE ASH LIVING",
    description:
      "Discover the philosophy and people behind our mission. Learn about our commitment to your transformation.",
    image: InsideAshLiving,
    color: "text-purple-700 dark:text-purple-400",
    bgColor: "bg-purple-700/20",
  },
];

const regenerateItems = [
  {
    name: "MORINGA",
    color: "text-green-700 dark:text-green-400",
  },
  {
    name: "MAGNESIUM",
    color: "text-blue-700 dark:text-blue-400",
  },
  {
    name: "GOLD",
    color: "text-yellow-600 dark:text-yellow-400",
  },
  {
    name: "SILVER",
    color: "text-gray-600 dark:text-gray-400",
  },
  {
    name: "COPPER",
    color: "text-orange-700 dark:text-orange-400",
  },
];

// Font style class that matches the first section's "THE SOVEREIGN SPACE"
const sovereignFontStyle = "font-light tracking-wider";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const emergencyRef = useRef(null);

  // Debounced scroll handler for better performance
  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;

    const containerItems =
      containerRef.current.querySelectorAll(".item-section");
    const viewportCenter = window.scrollY + window.innerHeight / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    containerItems.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const itemCenter = rect.top + window.scrollY + rect.height / 2;
      const distance = Math.abs(viewportCenter - itemCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  }, [activeIndex]);

  useEffect(() => {
    let ticking = false;

    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollHandler, { passive: true });
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [handleScroll]);

  // Preload images
  useEffect(() => {
    items.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, []);

  return (
    <>
      {/* First Section - Main Hero */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1
            className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl ${sovereignFontStyle} text-black dark:text-white mb-6 sm:mb-8`}
          >
            THE SOVEREIGN
            <br />
            SPACE
          </h1>

          <p
            className={`text-base sm:text-lg md:text-xl font-light text-gray-600 dark:text-gray-400 mb-12 sm:mb-16 max-w-2xl mx-auto tracking-wide`}
          >
            Elevate your whole energy
          </p>

          <div className="flex flex-col items-center">
            {/* Primary buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button variant="primary">Connect</Button>
              <Button variant="secondary">24/7 Support</Button>
            </div>

            {/* Animated arrows */}
            <motion.div
              className="mt-10 flex flex-col items-center space-y-1 hover:cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              onClick={() =>
                emergencyRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              {[0, 1].map((i) => (
                <motion.span
                  key={i}
                  className="block w-3 h-3 border-b border-r border-gray-500 dark:border-gray-300 rotate-45"
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                />
              ))}
            </motion.div>

            {/* Explore button */}
            <motion.button
              className={`mt-6 text-sm sm:text-base ${sovereignFontStyle} text-gray-600 dark:text-gray-300 tracking-widest uppercase hover:text-black dark:hover:text-white transition-colors hover:cursor-pointer`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                emergencyRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              Explore
            </motion.button>
          </div>
        </div>
      </section>

      <section         ref={emergencyRef} className="relative bg-black text-white py-20 sm:py-28 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-blue-900/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl ${sovereignFontStyle}`}
            >
              AI-Powered
              <br />
              Collaborative Creativity
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl">
              We combine human empathy with artificial intelligence to create
              meaningful, adaptive, and visually powerful experiences. Our AI
              works alongside people — enhancing creativity, not replacing it.
            </p>

            <ul className="space-y-3 text-gray-200 text-sm sm:text-base">
              <li>• Human-guided AI content generation</li>
              <li>• Emotion-aware creative design</li>
              <li>• Adaptive visuals & intelligent storytelling</li>
              <li>• Ethical and responsible AI usage</li>
            </ul>

            <div className="pt-4">
              <Button
                variant="primary"
                className="px-8 py-3 text-base sm:text-lg"
              >
                Explore AI Collaboration
              </Button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/30 to-blue-500/30 blur-2xl rounded-3xl" />

            <img
              src={Aipoweredcollab}
              alt="AI Collaborative Creativity"
              className="relative rounded-2xl shadow-2xl object-cover w-full h-[420px]"
            />

            {/* Caption */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-4 rounded-xl text-sm text-gray-200">
              AI-generated visual guided by human creativity
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= AI CREATIVE VIDEO SECTION ================= */}
      <section className="relative min-h-screen w-full overflow-hidden bg-black">
        {/* Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={aiCreativeVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <motion.div
            className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {/* Left Content */}
            <div className="space-y-6">
              <h2
                className={`text-3xl sm:text-4xl md:text-6xl mt-5 ${sovereignFontStyle}`}
              >
                AI-Generated
                <br />
                Visual Intelligence
              </h2>

              <p className="text-base sm:text-lg md:text-xl font-light text-gray-200 leading-relaxed max-w-xl">
                This cinematic sequence is created through advanced AI systems —
                blending motion, realism, and imagination to communicate ideas
                beyond traditional design.
              </p>

              <ul className="space-y-3 text-sm sm:text-base text-gray-300">
                <li>• Professionally generated AI visuals</li>
                <li>• Human-guided creative direction</li>
                <li>• Emotion-driven cinematic storytelling</li>
                <li>• Designed for immersive digital experiences</li>
              </ul>

              <div className="pt-4 ">
                <Button variant="primary" size="lg">
                  Explore AI Creations
                </Button>
              </div>
            </div>

            {/* Right Highlight Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl mb-6  sm:mb-0 "
            >
              <h4 className="text-lg sm:text-xl font-light tracking-wide mb-3">
                Featured AI Scene
              </h4>

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                A professional-grade AI-generated sequence demonstrating motion,
                physics, and creativity — crafted to feel cinematic, grounded,
                and intentional.
              </p>

              <div className="mt-4 text-xs uppercase tracking-widest text-gray-300">
                AI Video · Creative Mode
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Second Section - Emergency Section */}
      <section

        className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 bg-gray-900 relative"
        style={{
          backgroundImage: `url(${Aiimage2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Animated Content */}
        <motion.div
          className="relative z-10 max-w-4xl text-center text-white px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
        >
          {/* Heading */}
          <motion.h2
            className={`text-3xl sm:text-4xl md:text-6xl ${sovereignFontStyle} mb-6 sm:mb-8`}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
          >
            EMERGENCY
            <br />
            CONNECT
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-base sm:text-lg md:text-xl font-light mb-8 sm:mb-12 leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: "easeOut" },
              },
            }}
          >
            If you are currently experiencing a mental health emergency, click
            below to connect with support immediately.
          </motion.p>

          {/* Primary Button */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <Button
              variant="primary"
              className="px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg md:text-xl"
              onClick={() => alert("Connecting to emergency services...")}
            >
              Connect
            </Button>
          </motion.div>

          {/* ================== EXTRA CONTENT ================== */}

          <motion.div
            className="mt-12 sm:mt-16 space-y-10"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {/* Reassurance */}
            <motion.p
              className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 },
                },
              }}
            >
              You are not alone. Help is available 24/7 and completely
              confidential. Reaching out is a sign of strength.
            </motion.p>

            {/* Emergency Options Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7 },
                },
              }}
            >
              {[
                {
                  title: "Call Support",
                  desc: "Talk directly with a trained crisis counselor.",
                },
                {
                  title: "Text Help",
                  desc: "Send a message for discreet support anytime.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-left hover:bg-white/15 transition"
                >
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-200">{item.desc}</p>
                </div>
              ))}
            </motion.div>

            {/* Safety Disclaimer */}
            <motion.p
              className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto leading-relaxed"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 0.6 },
                },
              }}
            >
              If you believe your life or someone else’s life is in immediate
              danger, please contact your local emergency number right now.
            </motion.p>

            {/* Secondary CTA */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
            >
              <button className="text-sm sm:text-base underline text-gray-200 hover:text-white transition">
                Need non-emergency mental health support?
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Third Section - Connect & Products Section */}
      <section className="py-12 sm:py-20">
        <motion.div
          className="max-w-6xl mx-auto w-full px-4 sm:px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
        >
          {/* Main Title */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
          >
            <h2
              className={`text-3xl sm:text-4xl md:text-6xl ${sovereignFontStyle} text-black dark:text-white mb-6 sm:mb-8`}
            >
              RISE WITH US
            </h2>

            <p
              className={`text-base sm:text-lg md:text-xl font-light text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-12 ${sovereignFontStyle}`}
            >
              Please enquire here if you'd like private, 1:1 guidance. You will
              be entering a high-level support space designed to deliver real
              integration.
            </p>

            <p
              className={`text-sm sm:text-base md:text-lg font-light text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8 ${sovereignFontStyle}`}
            >
              Sessions are personalised, actionable, and focused on building
              measurable change across mindset, structured direction, and
              grounded accountability.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            className="text-center mb-8 sm:mb-12"
            variants={{
              hidden: { opacity: 0, scale: 0.96 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
          >
            <img
              src={Rise}
              alt="Support Illustration"
              className="mx-auto w-64 sm:w-96 md:w-[700px] lg:w-[900px] max-w-full rounded-lg shadow-xl"
            />
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="text-center mb-12 sm:mb-20"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <Button variant="primary" size="lg">
              NEED SUPPORT
            </Button>
          </motion.div>
        </motion.div>

        {/* Interactive Stack Section */}
        <div ref={containerRef} className="relative w-full">
          {/* Background Images - Sticky container with crossfade animation */}

          {/* Background Images - Sticky container with crossfade animation */}
          <div
            className="
  sticky top-0
  min-h-[100svh]
  sm:h-screen
  w-full
  flex
  flex-col
  justify-center
  items-center
  overflow-hidden
  px-4 sm:px-6
"
          >
            {/* Heading overlay */}
            <h3
              className={`absolute top-24 sm:top-32 md:top-40 z-20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
  text-center text-white dark:text-gray-200 ${sovereignFontStyle}`}
            >
              Elevate your whole energy
            </h3>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {/* IMAGE */}
                <img
                  src={items[activeIndex].image}
                  alt={items[activeIndex].name}
                  className="
        w-full h-full object-cover
        object-center
        sm:object-center
      "
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

                {/* Subtle texture */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Content Container */}
          <div className="relative z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                {/* Left Column - Stacked Items */}
                <div className="space-y-24 sm:space-y-32 lg:space-y-40">
                  {items.map((item, index) => (
                    <motion.div
                      key={index}
                      ref={(el) => (itemRefs.current[index] = el)}
                      data-index={index}
                      className={`item-section min-h-[60vh] sm:min-h-[70vh] flex flex-col justify-center relative px-2`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Background glow for active item */}
                      {activeIndex === index && (
                        <motion.div
                          className={`absolute -inset-4 sm:-inset-6 rounded-xl sm:rounded-2xl ${item.bgColor} blur-xl opacity-50`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.5 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}

                      <div className="relative">
                        <h3
                          className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl ${sovereignFontStyle} ${item.color} mb-4 sm:mb-6 md:mb-8 leading-tight`}
                        >
                          {item.name}
                        </h3>

                        {/* Enhanced description with better contrast */}
                        <motion.p
                          className="text-base sm:text-lg md:text-xl font-light text-white leading-relaxed mb-4 sm:mb-6 md:mb-8 max-w-2xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: activeIndex === index ? 1 : 0.5 }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.description}
                        </motion.p>

                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{
                            opacity: activeIndex === index ? 1 : 0.3,
                            x: activeIndex === index ? 0 : -10,
                          }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <Button
                            variant="secondary"
                            size={window.innerWidth < 640 ? "sm" : "lg"}
                            className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-white"
                          >
                            Explore {item.name.split(" ")[0]}
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Right Column - Progress indicator */}
                <div className="hidden lg:flex flex-col justify-center sticky top-0 h-screen">
                  <div className="pl-12 border-l border-white/20">
                    <motion.div
                      className="mb-8 sm:mb-12"
                      key={activeIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-xs sm:text-sm text-white/70 font-light tracking-wider uppercase">
                        Currently Active
                      </span>
                      <h4
                        className={`text-lg sm:text-xl md:text-2xl ${sovereignFontStyle} ${items[activeIndex].color} mt-1 sm:mt-2`}
                      >
                        {items[activeIndex].name}
                      </h4>
                    </motion.div>

                    {/* Progress dots */}
                    <div className="space-y-4 sm:space-y-6">
                      {items.map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-3 sm:space-x-4 cursor-pointer group"
                          onClick={() => {
                            itemRefs.current[index]?.scrollIntoView({
                              behavior: "smooth",
                              block: "center",
                            });
                          }}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <div className="relative">
                            <motion.div
                              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 ${
                                activeIndex === index
                                  ? `border-white ${item.color.replace(
                                      "text-",
                                      "bg-",
                                    )}`
                                  : "border-white/30"
                              }`}
                              animate={{
                                scale: activeIndex === index ? 1.1 : 1,
                              }}
                              transition={{ duration: 0.2 }}
                            />
                            {activeIndex === index && (
                              <motion.div
                                className="absolute inset-0 rounded-full bg-white/30"
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              />
                            )}
                          </div>
                          <span
                            className={`text-sm sm:text-base ${sovereignFontStyle} transition-all duration-200 ${
                              activeIndex === index
                                ? "text-white"
                                : "text-white/50 group-hover:text-white/70"
                            }`}
                          >
                            {item.name.split(" ")[0]}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regenerate Section */}
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-12 sm:py-20">
          <div className="text-center max-w-3xl mx-auto">
            {/* Section Title */}
            <h3
              className={`text-2xl sm:text-3xl md:text-4xl ${sovereignFontStyle} text-black dark:text-white mb-6`}
            >
              REGENERATE
            </h3>

            {/* Explanation */}
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
              Regeneration begins at the cellular level. Our regenerative
              formulations combine essential minerals and plant-based nutrients
              designed to restore balance, strengthen vitality, and support the
              body’s natural healing processes from within.
            </p>
          </div>

          {/* Products */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {regenerateItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 text-center transition-all"
              >
                {/* Visual Marker */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 group-hover:scale-110 transition">
                  <span className={`text-xl font-semibold ${item.color}`}>
                    {item.name.charAt(0)}
                  </span>
                </div>

                {/* Product Name */}
                <h4
                  className={`text-sm sm:text-base tracking-widest ${sovereignFontStyle} ${item.color}`}
                >
                  {item.name}
                </h4>

                {/* Optional descriptor */}
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  Regenerative Mineral
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
