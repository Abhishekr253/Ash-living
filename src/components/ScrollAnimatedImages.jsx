import React from "react";
import { Parallax } from "react-parallax";
import "./ScrollAnimatedImages.css";
import { motion } from "framer-motion";

import image1 from "../assets/Aiimage1.jpeg";
import image2 from "../assets/Aiimage2.jpeg";
import image3 from "../assets/Aiimage3.jpeg";
import image4 from "../assets/insideashlivin.jpeg";
import image5 from "../assets/collabarations.jpeg";


const textVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};


const items = [
  {
    title: "Elevate your whole energy’ to The Sovereign Space",
    description:
      "Advanced computer vision that understands, interprets, and reacts to the world in real time.",
    image: image1,
    // buttonText: "Explore",
  },
  {
    title: "Explore Ash",
    description:
      "Advanced computer vision that understands, interprets, and reacts to the world in real time.",
    image:
      "https://corneliuscreative.uk/wp-content/uploads/2023/03/ai-generated-image-water-bottle-1.png",
    buttonText: "Shop Now",
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
      "Ash Living  private immersions are available worldwide, book your private luxury escape where sunrise sets your frequency, sunset restores your system, and deep, cellular level relaxation becomes your new life.",
    image: image2,
    buttonText: "Book NOW",
  },
  {
    title: "Explore Inside",
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
  return (
    <section className="scroll-section">
      {items.map((item, index) => (
        <div className="scroll-row" key={index}>
          {/* LEFT — TEXT */}
         <motion.div
  className={`scroll-text ${isDark ? "dark-text-bg" : "light-text-bg"}`}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  transition={{ staggerChildren: 0.15 }}
>
  <motion.h2 variants={textVariants}>
    {item.title}
  </motion.h2>

  <motion.p variants={textVariants}>
    {item.description}
  </motion.p>

  {item.buttonText && (
    <motion.button
      variants={textVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="
        mt-6 inline-flex items-center
        w-fit px-4 py-2
        rounded-full
        bg-black text-white
        dark:bg-white dark:text-black
        text-sm tracking-wider uppercase
        transition
      "
    >
      {item.buttonText}
    </motion.button>
  )}
</motion.div>


          {/* RIGHT — PARALLAX IMAGE */}
          <div className="scroll-image">
            <Parallax strength={250} bgImage={item.image}>
              <div className="parallax-box" />
            </Parallax>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ScrollAnimatedImages;
