import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import ScrollAnimatedImages from "../components/ScrollAnimatedImages";
import aiCreativeVideo from "../assets/Professional_Mode_Astronaut_snowboarding_directly_.mp4";
import circledark from "../assets/circledark.mp4";
import MobileMenu from "../components/MobileMenu";
import { Instagram } from "lucide-react";
import circlelight from "../assets/circlelight.mp4";
import circle from "../assets/circleblue.mp4";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import AshLiving from "../components/soverigncomponent/AshLiving";
import riseBg from "../assets/risee.png";

export default function Home({ isDark, toggleTheme }) {
  const emergencyRef = useRef(null);
  const heroRef = useRef(null);
  const riseRef = useRef(null);
  const productsRef = useRef(null);
  const contactRef = useRef(null);
  const elevateRef = useRef(null);
  const aiRef = useRef(null);
  const dark = true; // or false

  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "service_rpuefrw",
        "template_dmpxu4o",
        {
          name: formData.name,
          email: formData.email,

          telephone: "N/A",
          message:
            "Requested to receive exclusive transmissions, updates and early access.",

          section_name: "Stay Connected",

          company_organization: "N/A",
          collaboration_type: "Newsletter Subscription",

          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),

          page_url: window.location.href,
          submission_id: `ASH-${Date.now()}`,
        },
        "LxQMBJc2D2fjN75Jp",
      );

      alert("Thank you for subscribing.");

      setFormData({
        name: "",
        email: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to subscribe.");
    } finally {
      setLoading(false);
    }
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const sovereignFontStyle = "font-light tracking-wider";
  return (
    <div
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        bg-white dark:bg-black
        text-black dark:text-white
        transition-colors
        text-[14px] sm:text-[16px]
      "
    >
      {/* Header */}
      <Header
        isDark={isDark}
        toggleTheme={toggleTheme}
        onMenuClick={() => setMenuOpen(true)}
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="flex flex-col items-center justify-center text-center px-6 pt-18 mb-12"
      >
        {/* AI Video Circle */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            relative
            w-[280px] h-[280px]
            sm:w-72 sm:h-72
            lg:w-[420px] lg:h-[420px] lg:ms-10
            mt-[-4rem]
            mb-16
            rounded-full
            overflow-hidden
          "
        >
          <video
            src={isDark ? circledark : circle}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-[1.18] rounded-full"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="
            mt-4
            max-w-[90vw]
            text-sm
            font-bold
            tracking-[0.15em]
            text-black
            dark:text-white

            sm:text-2xl
            sm:font-light
            sm:tracking-[0.3em]
            sm:whitespace-nowrap
          "
        >
          ELEVATE YOUR WHOLE ENERGY
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex gap-4 flex-wrap justify-center"
        >
          <button
            onClick={() => navigate("/inside-ash-living")}
            className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium hover:scale-105 transition"
          >
            CONNECT
          </button>

          <button
            onClick={() => navigate("/24-7-support")}
            className="px-6 py-3 rounded-full border border-black/20 dark:border-white/20 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            24/7 SUPPORT
          </button>
        </motion.div>

        {/* Explore button */}
        <motion.button
          className={`mt-16 text-sm sm:text-base ${sovereignFontStyle} tracking-widest uppercase dark:border-white/20 transition-colors hover:cursor-pointer`}
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
        className="pt-[125px] min-h-screen flex items-center justify-center px-4 sm:px-6 py-24 sm:py-32 transition-colors bg-white dark:bg-black overflow-x-hidden"
      >
        {/* Animated Content */}
        <motion.div
          className="relative z-10 w-full max-w-6xl text-center px-4 text-black dark:text-white"
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
            className="text-2xl sm:text-5xl md:text-7xl lg:text-5xl font-serif mb-8 sm:mb-14
                       break-words sm:whitespace-nowrap"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
          >
            EMERGENCY SUPPORT
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-sm sm:text-base md:text-lg font-light mb-14 sm:mb-20 leading-relaxed text-gray-700 dark:text-gray-300 max-w-4xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: "easeOut" },
              },
            }}
          >
            Emergency Support connects you directly to a Conscious Support
            Specialist. Please only continue if this is an emergency situation
            and you require immediate conscious support.
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
              className="px-12 py-4 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium hover:scale-105 transition"
              onClick={() => navigate("/emergency-support")}
            >
              CONNECT
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
              immediate conscious support
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
                  title: "Immediate Care Access",
                  desc: "Connect directly with a conscious support specialist.",
                  path: "/immediate-care-access",
                },
                {
                  title: "Text Help",
                  desc: "Message us for a more high privacy connection.",
                  path: "/text-help",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  onClick={() => navigate(item.path)}
                  whileHover={{ y: -4 }}
                  className="
                    bg-gray-100 dark:bg-white/10
                    p-6
                    rounded-xl
                    text-left
                    border border-gray-200 dark:border-white/20
                    hover:bg-gray-200 dark:hover:bg-white/20
                    transition-all
                    duration-300
                    cursor-pointer
                    group
                  "
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {item.desc}
                  </p>
                </motion.div>
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

      {/* Rise With Us */}
      <section ref={riseRef} className="py-12 sm:py-20 px-4 overflow-x-hidden">
        <div className="max-w-[1500px] mx-auto">
          <motion.div
            className="
            relative
            overflow-hidden
            rounded-[20px]
            sm:rounded-[28px]
            lg:rounded-[36px]
            min-h-[500px]
sm:min-h-[550px]
lg:min-h-[620px]
            shadow-[0_0_120px_rgba(214,199,160,0.18)]
          "
            style={{
              backgroundImage: `url(${riseBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />

            {/* Content */}
            <motion.div
              className="
              relative z-10
              max-w-6xl mx-auto
              min-h-[500px]
sm:min-h-[550px]
lg:min-h-[620px]
              flex flex-col items-center justify-center
              text-center
              px-6 sm:px-10 lg:px-20
            "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.25 } },
              }}
            >
              <motion.h2
                className="
                text-white
                text-[34px]
sm:text-[46px]
md:text-[58px]
lg:text-[50px]
tracking-[-0.02em]
                font-light leading-[0.95] mb-8
              "
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                }}
              >
                RISE
                <br />
                WITH US
              </motion.h2>

              <div className="w-[100px] h-[1px] bg-[#d6c7a0] mb-8" />

              <motion.p
                className="
                text-white/90
                text-[13px]
sm:text-[14px]
lg:text-[15px]

leading-7

max-w-2xl mb-10
              "
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                }}
              >
                You will be entering a high-level support space designed to
                deliver strategic clarity and real integration. Sessions are
                personalised, actionable, and focused on building measurable
                change across mindset, structured direction, and grounded
                accountability.
              </motion.p>

              <motion.button
                onClick={() => navigate("/rise-with-us")}
                className="
                px-8 py-3 text-[11px]
tracking-[0.15em]
uppercase rounded-full
                bg-[#d6c7a0] text-black
                font-medium
                hover:bg-white hover:scale-105
                transition-all duration-500
              "
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                }}
              >
                CONNECT
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div ref={elevateRef} className="m-2 pt-[110px]">
        <AshLiving />
      </div>

      {/* Regenerative Products */}
      <section
        ref={productsRef}
        className="py-20 pt-[125px] sm:py-35 bg-white dark:bg-black transition-colors overflow-x-hidden"
      >
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6"
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
            <h2
              className="
                text-lg sm:text-5xl md:text-5xl
                font-serif
                text-black dark:text-white
                mb-6
                break-words sm:whitespace-nowrap
              "
            >
              REGENERATIVE ESSENTIALS
            </h2>

            <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
              Regeneration begins at the cellular level. Our advanced
              formulations unite precision minerals with premium nutrients to
              restore internal balance, elevate vitality, and support the body's
              innate restorative intelligence.
            </p>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {[
              {
                title: "PLATINUM",
                desc: "A premium, high-frequency formula positioned for refined vitality and elevated performance.",
              },
              {
                title: "MAGNESIUM",
                desc: "A foundational mineral that supports relaxation, muscle function, and nervous-system regulation.",
              },
              {
                title: "GOLD",
                desc: "A classic tonic positioned for clarity, composure, and inner coherence.",
              },
              {
                title: "SILVER",
                desc: "A precision support positioned for external hygiene and clean, protective protocols.",
              },
              {
                title: "COPPER",
                desc: "A vitality mineral positioned for strength, resilience, and cellular energy support.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`
                  p-5 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/15
                  bg-gray-50 dark:bg-white/5 backdrop-blur-sm
                  hover:scale-[1.02] transition
                  ${index === 4 ? "col-span-2 flex justify-center" : ""}
                  lg:col-span-1
                `}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                <div
                  className={index === 4 ? "max-w-md w-full text-center" : ""}
                >
                  <h3 className="text-sm sm:text-lg lg:text-xl font-semibold text-black dark:text-white mb-2 sm:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
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
            <button
              onClick={() => navigate("/shop")}
              className="px-14 py-4 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium hover:scale-105 transition"
            >
              REGENERATE
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Visual Intelligence / AI Section */}
      <section
        ref={aiRef}
        className="pt-[110px] px-3 sm:px-5 lg:px-8 py-8 sm:py-12 overflow-x-hidden"
      >
        <motion.div
          className={`
            relative overflow-hidden
            w-full max-w-5xl mx-auto
            min-h-[380px] sm:min-h-[420px] lg:min-h-[480px]        
            rounded-[24px] sm:rounded-[32px] lg:rounded-[40px]
            ${
              isDark
                ?  "bg-white shadow-[0_0_120px_rgba(0,0,0,0.18)]"
                :"bg-[#080808] shadow-[0_0_120px_rgba(255,255,255,0.18)]"
            }
          `}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Floating Glow */}
          <motion.div
            className={`
              absolute top-0 left-0
              w-[180px] h-[180px]
              sm:w-[260px] sm:h-[260px]
              rounded-full
              ${isDark ?"bg-black/5" : "bg-white/5" }
              blur-[100px]
            `}
            animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
          />

          <div className="relative z-10 min-h-[380px] sm:min-h-[420px] lg:min-h-[480px] flex items-center justify-center">
            <motion.div
              className="
                w-full max-w-3xl mx-auto
                px-5 sm:px-8 text-center
                mt-8 mb-8 sm:mt-12 sm:mb-12 lg:mt-0 lg:mb-0
              "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <h2
                className={`
                  text-[22px] sm:text-[28px] md:text-[40px] lg:text-[40px]
                  font-light leading-[1]
                  ${sovereignFontStyle}
                  ${
                    isDark
                      ?"text-black drop-shadow-[0_0_30px_rgba(0,0,0,0.25)]" 
                      : "text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.35)]"
                  }
                `}
              >
                VISUAL INTELLIGENCE
              </h2>

              <div
                className={`
                  w-[90px] h-[1px] mx-auto my-5
                  ${isDark ? "bg-black/30"  : "bg-white/50"}
                `}
              />

              <p
                className={`
                  text-[13px] sm:text-[14px] md:text-[15px]
                  leading-7 max-w-xl mx-auto
                  ${
                    isDark
                      ?  "text-black/75 drop-shadow-[0_0_15px_rgba(0,0,0,0.15)]" 
                      : "text-white/80 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                  }
                `}
              >
                This cinematic sequence is produced by a leading team in
                advanced AI, delivering dynamic motion, hyperreal detail and
                futuristic world building that sets the standard beyond
                traditional design.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {[
                  "Cinematic Visuals",
                  "Creative Direction",
                  "AI Storytelling",
                  "Immersive Experiences",
                ].map((item) => (
                  <div
                    key={item}
                    className={`
                      px-3 sm:px-4 py-2 rounded-full text-xs
                      ${
                        isDark
                          ?"bg-black/5 text-black/70 border border-black/10" 
                          : "bg-white/5 text-white/75 border border-white/10"
                      }
                    `}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("/explore-ai")}
                className={`
                  mt-10 px-8 py-3 rounded-full
                  transition-all duration-500 hover:scale-105
                  ${
                    isDark
                      ?"bg-black text-white hover:bg-[#b08a45] hover:text-black" 
                      : "bg-white text-black hover:bg-[#d6c7a0]"
                  }
                `}
              >
                Explore AI
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stay Connected */}
      <section
        ref={contactRef}
        className="py-20 sm:py-28 bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-white/10 overflow-x-hidden"
      >
        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 text-center"
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
            className="
              text-lg sm:text-xl md:text-4xl
              font-bold sm:font-medium
              tracking-[0.25em] uppercase
              mb-6 text-black dark:text-white
            "
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
          >
            STAY CONNECTED
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-10"
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            Receive exclusive transmissions, priority updates, and early access
            to private experiences.
          </motion.p>

          <motion.form
            className="max-w-2xl mx-auto space-y-5 mb-14"
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Name"
              className="
                w-full px-5 py-4 rounded-xl
                bg-white dark:bg-white/10
                border border-gray-300 dark:border-white/20
                text-black dark:text-white
                placeholder-gray-500 dark:placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white
              "
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="
                w-full px-5 py-4 rounded-xl
                bg-white dark:bg-white/10
                border border-gray-300 dark:border-white/20
                text-black dark:text-white
                placeholder-gray-500 dark:placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white
              "
            />

            <button
              type="submit"
              disabled={loading}
              className="
                w-full py-4 rounded-full
                bg-black text-white dark:bg-white dark:text-black
                text-sm tracking-widest uppercase
                hover:scale-[1.02] transition disabled:opacity-50
              "
            >
              {loading ? "SUBSCRIBING..." : "STAY CONNECTED"}
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
            <motion.div
              className="flex justify-center mb-12"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  p-3 rounded-full
                  border border-gray-300 dark:border-white/20
                  text-gray-600 dark:text-gray-400
                  hover:text-black dark:hover:text-white
                  hover:border-black dark:hover:border-white
                  hover:scale-105 transition
                "
              >
                <Instagram size={22} strokeWidth={1.5} />
              </a>
            </motion.div>
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
        isDark={isDark}
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
