import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
    <section className="min-h-screen px-3 sm:px-5 lg:px-8 py-4 sm:py-6">
      <motion.div
        className={`
    relative

    min-h-[500px]
h-[65vh]
sm:h-[75vh]
md:h-[85vh]
lg:h-[92vh]

    overflow-hidden
    rounded-[20px]
    sm:rounded-[28px]
    lg:rounded-[36px]

    ${
  dark
    ? "shadow-[0_0_80px_rgba(255,255,255,0.18)]"
    : "shadow-[0_0_80px_rgba(0,0,0,0.28)]"
}
  `}
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: false }}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
  className={`absolute inset-0 ${
    dark
      ? "bg-black/40 backdrop-blur-[1px]"
      : "bg-white/45 backdrop-blur-[1px]"
  }`}
/>

        <motion.div
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
          "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
        >
          <span
            className={`
              mb-4
              tracking-[8px]
              uppercase
              text-sm
              lg:text-xl
              ${dark ? "text-[#d6c7a0]" : "text-[#b08a45]"}
            `}
          >
            {subtitle}
          </span>

          <h1
            className={`
              font-light
              leading-[0.95]
              text-[42px]
sm:text-[65px]
md:text-[85px]
lg:text-[110px]
xl:text-[130px]
              ${dark ? "text-white" : "text-black"}
            `}
          >
            {title}
          </h1>

          <div
            className={`
              mt-5
              mb-6
              h-[1px]
              w-[180px]
              bg-[#d6c7a0]
            `}
          />

          <p
            className={`
              max-w-[280px]
sm:max-w-[520px]
lg:max-w-[720px]

text-[14px]
sm:text-base
lg:text-lg

leading-7
sm:leading-8
              ${dark ? "text-white/90" : "text-black/80"}
            `}
          >
            {description}
          </p>
          {buttonText && path && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8"
            >
              <Link
                to={path}
                className="
  inline-flex
  items-center
  justify-center

  min-w-[170px]

  px-7
  sm:px-8
  lg:px-10

  py-3
  sm:py-4

  text-xs
  sm:text-sm

  font-medium
  tracking-[2px]
  uppercase

  rounded-full

${
  dark
    ? `
      bg-[#d6c7a0]
      text-black
      hover:bg-white
    `
    : `
      bg-black
      text-white
      hover:bg-[#b08a45]
      hover:text-black
    `
}

  transition-all
  duration-500

  hover:scale-105
"
              >
                {buttonText}
              </Link>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
