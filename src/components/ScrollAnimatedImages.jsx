import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import "./ScrollAnimatedImages.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/Aiimage1.jpeg";
import image3 from "../assets/Aiimage3.jpeg";
import image4 from "../assets/insideashlivin.jpeg";
import image5 from "../assets/collabarations.jpeg";
import shop from "../assets/shop.png";
import calm from "../assets/immersion.png";
import inside from "../assets/living.png";
import astral from "../assets/Ascension.png";
import space from "../assets/space.png";
import collab from "../assets/collaboration.png";
import { path } from "framer-motion/client";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const items = [
  // {
  //   title: "The Sovereign Space",
  //   image: space,
  // },
  {
    title: "Ash Living Shop",
    description:
      "Premium wellness products crafted for optimal living. Experience natural solutions that enhance your daily routine and overall wellbeing",
    image: shop,
    buttonText: "SHOP NOW",
    path: "/shop",
  },
  {
    title: "Astral Ascension",
    description:
      "A private sanctuary for transformation that supports stress resilience, clear cognition, and the embodied return to purpose, presence  and personal power.",
    image: astral,
    buttonText: "START ELEVATION",
    path: "/astral-ascension",
  },
  {
    title: "Private Immersions",
    description:
      "Ash Living private immersions are available worldwide, book your private luxury escape where sunrise sets your frequency, sunset restores your system, and deep cellular level relaxation becomes your new life.",
    image: calm,
    buttonText: "BOOK NOW",
    path: "/private-immersions",
  },
  {
    title: "Inside Ash Living",
    description:
      "Discover the philosophy and people behind our mission. Learn about our commitment to your transformation.",
    image: inside,
    buttonText: "ACCESS",
    path: "/inside-ash-living",
  },
  {
    title: "Collaboration",
    description:
      "Join forces with experts and like-minded individuals. Build meaningful connections that accelerate your journey.",
    image: collab,
    buttonText: "EXPLORE",
    path: "/collaborations",
  },
];

function ScrollAnimatedImages({ isDark }) {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="scroll-section">
      <section className="min-h-screen px-3 sm:px-5 lg:px-8 py-4 sm:py-6">
        <motion.div
          className="
      sovereign-hero
      relative
      h-[85vh]
      sm:h-[88vh]
      lg:h-[92vh]
      overflow-hidden
      rounded-[20px]
      sm:rounded-[28px]
      lg:rounded-[36px]
      shadow-[0_40px_120px_rgba(0,0,0,0.45)]
    "
          initial={{
            scale: 1.06,
          }}
          whileInView={{
            scale: 1,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          style={{
            backgroundImage: `url(${space})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px]" />

          {/* Content */}
          <motion.div
            className="
        absolute
        inset-0
        z-10
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-6
        sm:px-10
        lg:px-20
      "
            initial={{
              opacity: 0,
              y: 80,
              scale: 1.03,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: false,
              amount: 0.4,
            }}
            transition={{
              duration: 1.5,
            }}
          >
            {/* Subtitle */}
            <motion.span
              className="
          mb-4
          text-[15px]
          sm:text-[13px]
          lg:text-[30px]
          tracking-[6px]
          sm:tracking-[10px]
          text-[#d6c7a0]
          font-medium
  sm:font-medium
        "
              initial={{
                opacity: 0,
                letterSpacing: "20px",
              }}
              whileInView={{
                opacity: 1,
                letterSpacing: "8px",
              }}
              transition={{
                duration: 1.3,
              }}
            >
              THE
            </motion.span>

            {/* Title */}
            <motion.h1
              className="
          text-white
          font-light
          leading-[0.95]

          text-[48px]
          sm:text-[70px]
          md:text-[88px]
          lg:text-[110px]
        "
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 1.2,
              }}
            >
              SOVEREIGN
              <br />
              SPACE
            </motion.h1>

            {/* Decorative Line */}
            <motion.div
              className="
          mt-5
          mb-6
          h-[1px]
          bg-[#d6c7a0]

          w-[120px]
          sm:w-[160px]
          lg:w-[220px]
        "
              initial={{
                width: 0,
              }}
              whileInView={{
                width: "100%",
                maxWidth: "220px",
              }}
              transition={{
                delay: 0.8,
                duration: 1,
              }}
            />

            {/* Description */}
            <motion.p
              className="
          max-w-[280px]
          sm:max-w-[520px]
          lg:max-w-[720px]

          text-white/90

          text-sm
          sm:text-base
          lg:text-lg

          leading-7
          sm:leading-8
        "
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1,
                duration: 1,
              }}
            >
              A private sanctuary for elevated consciousness, transformation and
              self-mastery.
            </motion.p>

            {/* Scroll Hint */}
            {/* <motion.div
        className="absolute bottom-8 sm:bottom-10"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
      >
        <div
          className="
            h-10
            w-6
            sm:h-14
            sm:w-8
            rounded-full
            border
            border-[#d6c7a0]/70
            flex
            justify-center
          "
        >
          <div
            className="
              mt-2
              h-2
              w-2
              sm:h-3
              sm:w-3
              rounded-full
              bg-[#d6c7a0]
            "
          />
        </div>
      </motion.div> */}
          </motion.div>
        </motion.div>
      </section>
      {items.slice(1).map((item, index) => (
        <div className="scroll-row" key={index}>
          {/* TEXT */}
          <motion.div
            className={`scroll-text ${isDark ? "dark-text-bg" : "light-text-bg"}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.15 }}
          >
            <motion.h2 className="text" variants={textVariants}>
              {item.title}
            </motion.h2>
            <motion.p className="text" variants={textVariants}>
              {item.description}
            </motion.p>

            {item.buttonText && (
              <motion.button
                variants={textVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                onClick={() => item.path && navigate(item.path)}
                className={`button arrow-btn ${
                  isDark ? "btn-light" : "btn-dark"
                }`}
              >
                <span className="btn-text">{item.buttonText}</span>
              </motion.button>
            )}
          </motion.div>

          {/* IMAGE */}
          <div className="scroll-image">
            {isMobile ? (
              <div className="mobile-image-container">
                <img
                  src={item.image}
                  alt={item.title}
                  className="mobile-image"
                />
              </div>
            ) : (
              <Parallax strength={160} bgImage={item.image}>
                <div className="parallax-box" />
              </Parallax>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

export default ScrollAnimatedImages;
