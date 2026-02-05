import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import "./ScrollAnimatedImages.css";
import { motion } from "framer-motion";

import image1 from "../assets/Aiimage1.jpeg";
import image3 from "../assets/Aiimage3.jpeg";
import image4 from "../assets/insideashlivin.jpeg";
import image5 from "../assets/collabarations.jpeg";
import shop from "../assets/shop.jpeg";
import calm from "../assets/calm.jpeg";
import inside from "../assets/inside.jpeg";
import astral from "../assets/astral.jpeg";
import space from "../assets/space.jpeg";
import collab from "../assets/collab.jpeg";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const items = [
  {
    title: "The Sovereign Space",
    image: space,
  },
  {
    title: "Ash Living Shop",
    description:
      "Premium wellness products crafted for optimal living. Experience natural solutions that enhance your daily routine and overall wellbeing",
    image: shop,
    buttonText: "SHOP NOW",
  },
  {
    title: "Astral Ascension",
    description:
      "A private sanctuary for transformation that supports stress resilience, clear cognition, and the embodied return to purpose, presence  and personal power.",
    image: astral,
    buttonText: "START ELEVATION",
  },
  {
    title: "Private Immersions",
    description:
      "Ash Living private immersions are available worldwide, book your private luxury escape where sunrise sets your frequency, sunset restores your system, and deep cellular level relaxation becomes your new life.",
    image: calm,
    buttonText: "BOOK NOW",
  },
  {
    title: "Inside Ash Living",
    description:
      "Discover the philosophy and people behind our mission. Learn about our commitment to your transformation.",
    image: inside,
    buttonText: "ACTIVATE ACCESS",
  },
  {
    title: "Collaboration",
    description:
      "Join forces with experts and like-minded individuals. Build meaningful connections that accelerate your journey.",
    image: collab,
    buttonText: "EXPLORE COLLABORATION",
  },
];

function ScrollAnimatedImages({ isDark }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="scroll-section">
      {items.map((item, index) => (
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
              <Parallax strength={250} bgImage={item.image}>
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
