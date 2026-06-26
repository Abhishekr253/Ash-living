// HeroBanner.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import sov from "../../assets/sovsp.png";

export default function HeroBanner({
  image,
  subtitle,
  title,
  description,
  buttonText,
  path,
  dark = true,
}) {
  return (
    <section className="py-12 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className={`
    relative
    overflow-hidden

    rounded-[24px]
    sm:rounded-[32px]
    lg:rounded-[40px]

    min-h-[260px]
    sm:min-h-[340px]
    lg:min-h-[420px]

    ${
      dark
        ? "shadow-[0_0_90px_rgba(255,255,255,0.18)]"
        : "shadow-[0_0_90px_rgba(0,0,0,0.18)]"
    }
  `}
         style={{
  backgroundImage: `url(${sov})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
}}
        >
          {/* Overlay */}
          <div
            className={`absolute inset-0 ${
              dark
                ? "bg-black/55 backdrop-blur-[2px]"
                : "bg-white/55 backdrop-blur-[2px]"
            }`}
          />

          {/* Content */}
          <motion.div
            className="
    relative
    z-10

    min-h-[520px]
    lg:min-h-[650px]

    flex
    flex-col
    items-center
    justify-center

    text-center

    px-8
"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Subtitle */}
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={`
uppercase
tracking-[7px]
text-[10px]
mb-5

${dark ? "text-white/65" : "text-black/55"}
`}
            >
              {subtitle}
            </motion.span>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className={`
              font-light leading-[0.95]
              text-[42px] sm:text-[65px] md:text-[85px]
              lg:text-[90px] xl:text-[60px]
              ${
                dark
                  ? "text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                  : "text-black drop-shadow-[0_0_40px_rgba(0,0,0,0.15)]"
              }
            `}
            >
              {title}
            </motion.h1>

            {/* Divider */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 180 }}
              transition={{ delay: 0.5, duration: 1 }}
              className={`
w-[160px]
h-[1px]
my-8

${dark ? "bg-white/35" : "bg-black/20"}
`}
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className={`
max-w-2xl

text-[15px]
sm:text-[17px]

leading-8

${dark ? "text-white/80" : "text-black/75"}
`}
            >
              {description}
            </motion.p>

            {/* Button */}
            {buttonText && path && (
              <motion.div
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  to={path}
                  className={`
mt-10

inline-flex
items-center
justify-center

px-10
py-4

rounded-full

tracking-[2px]

transition-all
duration-500

${
  dark
    ? "bg-white text-black hover:bg-[#d6c7a0]"
    : "bg-black text-white hover:bg-[#b08a45] hover:text-black"
}
`}
                >
                  {buttonText}
                </Link>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
