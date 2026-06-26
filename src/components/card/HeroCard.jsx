import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroCard({
  image,
  subtitle,
  title,
  description,
  buttonText,
  path,
  dark = true,
}) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const dividerVariants = {
    hidden: {
      width: 0,
      opacity: 0,
    },
    visible: {
      width: 100,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
      className={`
        relative
        h-[420px]
        sm:h-[450px]
        md:h-[500px]
        overflow-hidden
        rounded-[24px]
        sm:rounded-[28px]
        ${
          dark
            ? "bg-[#080808] shadow-[0_0_120px_rgba(255,255,255,0.18)]"
            : "bg-white shadow-[0_0_120px_rgba(0,0,0,0.18)]"
        }
      `}
    >
      {/* Background */}
      {image && (
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 1.2 }}
        />
      )}

      {/* Overlay */}
      <div
        className={`absolute inset-0 ${
          dark
            ? "bg-black/55 backdrop-blur-[1px]"
            : "bg-white/55 backdrop-blur-[1px]"
        }`}
      />

      {/* Floating Glow */}
      <motion.div
        className={`
          absolute
          -top-20
          -left-20
          w-[250px]
          h-[250px]
          rounded-full
          blur-[100px]
          ${dark ? "bg-white/5" : "bg-black/5"}
        `}
        animate={{
          x: [0, 20, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="
          absolute
          inset-0
          z-10
          flex
          flex-col
          justify-center
          items-center
          text-center
          px-6
          sm:px-8
        "
      >
        {/* Subtitle */}
        <motion.span
          variants={itemVariants}
          className={`
            uppercase
            text-[10px]
            tracking-[6px]
            mb-3
            ${dark ? "text-white/70" : "text-black/60"}
          `}
        >
          {subtitle}
        </motion.span>

        {/* Title */}
        <motion.h3
          variants={itemVariants}
          className={`
            text-[24px]
            sm:text-[30px]
            md:text-[36px]
            lg:text-[42px]
            xl:text-[40px]

            font-light
            leading-none
            tracking-[-0.02em]
            whitespace-nowrap

            ${
              dark
                ? "text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.35)]"
                : "text-black drop-shadow-[0_0_30px_rgba(0,0,0,0.25)]"
            }
          `}
        >
          {title}
        </motion.h3>

        {/* Divider */}
        <motion.div
          variants={dividerVariants}
          className={`
            h-[1px]
            my-5
            ${dark ? "bg-white/50" : "bg-black/30"}
          `}
        />

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className={`
            max-w-sm
            text-[13px]
            sm:text-[14px]
            leading-7
            mb-7
            ${
              dark
                ? "text-white/80 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                : "text-black/75 drop-shadow-[0_0_15px_rgba(0,0,0,0.15)]"
            }
          `}
        >
          {description}
        </motion.p>

        {/* Button */}
        {buttonText && path && (
          <motion.div
            variants={itemVariants}
            whileHover={{
              scale: 1.08,
              y: -2,
            }}
          >
            <Link
              to={path}
              className={`
                inline-flex
                items-center
                justify-center

                px-8
                py-3

                rounded-full

                text-[11px]
                tracking-[2px]
                uppercase

                transition-all
                duration-500

                ${
                  dark
                    ? "bg-white text-black hover:bg-[#d6c7a0] shadow-[0_0_30px_rgba(255,255,255,0.25)]"
                    : "bg-black text-white hover:bg-[#333] shadow-[0_0_30px_rgba(0,0,0,0.2)]"
                }
              `}
            >
              {buttonText}
            </Link>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
