import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import "./ScrollAnimatedImages.css";
import { motion } from "framer-motion";

import image1 from "../assets/Aiimage1.jpeg";
import image2 from "../assets/Aiimage2.jpeg";
import image3 from "../assets/Aiimage3.jpeg";
import image4 from "../assets/insideashlivin.jpeg";
import image5 from "../assets/collabarations.jpeg";
import Rise from "../assets/risewithus.jpeg";
import beach from "../assets/beach.png"

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const items = [
  {
    title: "The Sovereign Space",
    image: image1,
  },
  {
    title: "Ash Living Shop",
    description:
      "Premium wellness products crafted for optimal living. Experience natural solutions that enhance your daily routine and overall wellbeing",
    image: Rise,
    buttonText: "SHOP NOW",
  },
  {
    title: "Sovereign Space",
    description:
      "Automate complex workflows using adaptive AI that learns and improves continuously.",
    image: image3,
    buttonText: "START ELEVATION",
  },
  {
    title: "Private Immersions",
    description:
      "Ash Living private immersions are available worldwide, book your private luxury escape where sunrise sets your frequency, sunset restores your system, and deep, cellular level relaxation becomes your new life.",
    image: beach,
    buttonText: "BOOK NOW",
  },
  {
    title: "Inside Ash Living",
    description:
      "Experience next-generation intelligence designed for human-centric interaction.",
    image: image4,
    buttonText: "ACTIVATE ACCESS",
  },
  {
    title: "Collaboration",
    description:
      "Join forces with experts and like-minded individuals. Build meaningful connections that accelerate your journey.",
    image: image5,
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
                className="button arrow-btn"
              >
                <span className="btn-text">{item.buttonText}</span>

                <motion.span
                  className="btn-arrow"
                  initial="idle"
                  animate="idle"
                  variants={{
                    idle: {
                      x: [0, 4, 0],
                      opacity: 1,
                      transition: {
                        duration: 1.8,
                        ease: "easeInOut",
                        repeat: Infinity,
                      },
                    },
                    hover: {
                      x: 10,
                      transition: {
                        duration: 0.25,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  →
                </motion.span>
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
