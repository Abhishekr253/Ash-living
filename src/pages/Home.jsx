import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import ScrollAnimatedImages from "../components/ScrollAnimatedImages";
import Rise from "../assets/risewithus.jpeg";
import aiCreativeVideo from "../assets/Professional_Mode_Astronaut_snowboarding_directly_.mp4";
import circle from "../assets/circle.gif";
import MobileMenu from "../components/MobileMenu";

export default function Home({ isDark, toggleTheme }) {
  const emergencyRef = useRef(null);
  const heroRef = useRef(null);
  const riseRef = useRef(null);
  const productsRef = useRef(null);
  const contactRef = useRef(null);
  const elevateRef = useRef(null);
  const aiRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const sovereignFontStyle = "font-light tracking-wider";
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors">
      {/* Header */}
      <Header
        isDark={isDark}
        toggleTheme={toggleTheme}
        onMenuClick={() => setMenuOpen(true)}
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="flex flex-col items-center justify-center text-center px-6 pt-32 mb-12"
      >
        {/* AI Video Circle */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
    relative
    w-80 h-80           /* ⬅ increased */
    sm:w-96 sm:h-96     /* ⬅ larger on bigger screens */
    lg:w-[420px] lg:h-[420px]
    mb-16
    rounded-full
    overflow-hidden
    shadow-2xl
    border border-black/10 dark:border-white/10
  "
        >
          <img
            src={circle}
            alt="AI Orb"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-4 max-w-xl text-2xl text-gray-600 dark:text-gray-400"
        >
          Elevate Your Whole Energy.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex gap-4 flex-wrap justify-center"
        >
          <button className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium hover:scale-105 transition">
            Connect
          </button>

          <button className="px-6 py-3 rounded-full border border-black/20 dark:border-white/20 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition">
            24/7 Support
          </button>
        </motion.div>

        {/* Explore button */}
        <motion.button
          className={`mt-16 text-sm sm:text-base ${sovereignFontStyle} text-gray-800 tracking-widest uppercase hover:text-black transition-colors hover:cursor-pointer`}
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

        {/* Animated arrows */}
        <motion.div
          className="mt-2 flex flex-col items-center hover:cursor-pointer"
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
          <motion.span
            className="block w-3 h-3 border-b border-r border-gray-400 rotate-45"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </motion.div>
      </section>

      {/* Emergency Support */}
      <section
        ref={emergencyRef}
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-24 sm:py-32 transition-colors bg-white dark:bg-black"
      >
        {/* Animated Content */}
        <motion.div
          className="relative z-10 max-w-6xl text-center px-4 text-black dark:text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.25 } },
          }}
        >
          {/* Heading */}
          <motion.h2
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif mb-10 sm:mb-14"
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
            SUPPORT
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-light mb-14 sm:mb-20 leading-relaxed text-gray-700 dark:text-gray-300"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: "easeOut" },
              },
            }}
          >
            If you are currently in need of urgent assistance or feel at
            immediate risk, please click below to connect with urgent support.
          </motion.p>

          {/* Connect Button */}
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
            <button
              className="px-12 sm:px-16 py-4 sm:py-5 text-lg sm:text-xl md:text-2xl rounded-full bg-black text-white dark:bg-white dark:text-black hover:scale-105 transition"
              onClick={() => alert("Connecting to emergency services...")}
            >
              Connect
            </button>
          </motion.div>

          {/* Additional Content */}
          <motion.div
            className="mt-20 sm:mt-28 space-y-16"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {/* Reassurance */}
            <motion.p
              className="text-sm sm:text-base max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              High-privacy support is available 24/7. Please reach out for
              immediate, confidential assistance.
            </motion.p>

            {/* Emergency Options */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
            >
              {[
                {
                  title: "Call Support",
                  desc: "Immediate Care Access.Connect directly with a Conscious Support Specialist.",
                },
                {
                  title: "Text Help",
                  desc: " Message us for more high privacy connection.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-white/10 p-6 rounded-xl text-left border border-gray-200 dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20 transition"
                >
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {item.desc}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Safety Disclaimer */}
            <motion.p
              className="text-xs sm:text-sm max-w-xl mx-auto leading-relaxed text-gray-500 dark:text-gray-400"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.6 } },
              }}
            >
              If you believe you, or someone else, is at immediate risk of
              serious harm, please contact your local emergency services
              immediately.
            </motion.p>

            {/* Secondary CTA */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Rise With Us - FLOWED */}
      <section ref={riseRef} className="py-12 sm:py-20">
        <motion.div
          className="max-w-6xl mx-auto w-full px-4 sm:px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.25 } },
          }}
        >
          {/* Main Title & Description */}
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
              className={`text-3xl sm:text-4xl md:text-6xl font-serif text-black dark:text-white mb-6 sm:mb-8`}
            >
              RISE WITH US
            </h2>

            <p className="text-base sm:text-lg md:text-xl font-light text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-8">
              Join our mission to leverage AI for smarter living. Connect with
              us to explore opportunities, share ideas, and grow together in a
              world of intelligent automation and innovation.
            </p>
          </motion.div>

          {/* Optional Illustration/Image */}
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
              src={Rise} // make sure `Rise` is imported at the top
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
            <button className="px-12 py-4 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium hover:scale-105 transition">
              Connect
            </button>
          </motion.div>
        </motion.div>
      </section>

      <div ref={elevateRef} className="m-2">
        {/* Scroll Animated Images Component */}
        <ScrollAnimatedImages />
      </div>

      {/* Regenerative Products */}
      <section
        ref={productsRef}
        className="py-20 sm:py-28 bg-white dark:bg-black transition-colors"
      >
        <motion.div
          className="max-w-7xl mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400 mb-4">
              Regenerative Essentials
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-black dark:text-white mb-6">
              Elemental Regeneration
            </h2>

            <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
              Regeneration begins at the cellular level. Our advanced
              formulations unite precision minerals with premium nutrients to
              restore internal balance, elevate vitality, and support the body’s
              innate restorative intelligence.
            </p>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {[
              {
                title: "PLATINUM",
                desc: "A nutrient-dense superleaf supporting detoxification, immune strength, and metabolic balance.",
              },
              {
                title: "Magnesium",
                desc: "Essential for nervous system regulation, deep rest, muscle recovery, and stress resilience.",
              },
              {
                title: "Gold",
                desc: "Traditionally used to enhance clarity, longevity, and cellular communication.",
              },
              {
                title: "Silver",
                desc: "Known for antimicrobial balance and immune system support at a foundational level.",
              },
              {
                title: "Copper",
                desc: "Supports connective tissue health, circulation, and bio-electrical balance.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl border border-gray-200 dark:border-white/15 bg-gray-50 dark:bg-white/5 backdrop-blur-sm hover:scale-[1.02] transition"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center mt-20"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <button className="px-14 py-4 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium hover:scale-105 transition">
              Explore Regeneration
            </button>
          </motion.div>
        </motion.div>
      </section>

      <section ref={aiRef} className="relative min-h-screen w-full overflow-hidden bg-black">
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
                <button variant="primary" size="lg">
                  Explore AI Creations
                </button>
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

      {/* Stay Connected */}
      <section
        ref={contactRef}
        className="py-20 sm:py-28 bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-white/10"
      >
        <motion.div
          className="max-w-6xl mx-auto px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 text-black dark:text-white"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
          >
            Stay Connected
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-10"
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            Receive updates, insights, and early access to regenerative
            experiences.
          </motion.p>

          {/* Email Signup */}
          <motion.form
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto mb-14"
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="
          w-full sm:flex-1
          px-5 py-3 rounded-full
          bg-white dark:bg-white/10
          border border-gray-300 dark:border-white/20
          text-black dark:text-white
          placeholder-gray-500 dark:placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white
        "
            />

            <button
              type="submit"
              className="
          px-8 py-3 rounded-full
          bg-black text-white
          dark:bg-white dark:text-black
          text-sm tracking-widest uppercase
          hover:scale-105 transition
        "
            >
              Sign Up
            </button>
          </motion.form>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6 mb-12 text-sm tracking-widest uppercase"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.6 } },
            }}
          >
            {["Instagram", "X", "LinkedIn", "YouTube"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </motion.div>

          {/* Policy Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 text-xs text-gray-500 dark:text-gray-400"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.6 } },
            }}
          >
            <a
              href="#"
              className="hover:text-black dark:hover:text-white transition"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-black dark:hover:text-white transition"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-black dark:hover:text-white transition"
            >
              Cookie Policy
            </a>
          </motion.div>
        </motion.div>
      </section>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={(section) => {
          const map = {
            hero: heroRef,
            emergency: emergencyRef,
            rise: riseRef,
            products: productsRef,
            contact: contactRef,
            elevate: elevateRef,
            ai: aiRef,
          };

          map[section]?.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}
      />
    </div>
  );
}
