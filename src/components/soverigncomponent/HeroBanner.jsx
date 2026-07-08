import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroBanner({
  subtitle,
  title,
  description,
  buttonText,
  path,
  isDark = true,
}) {
  return (
    <section className="py-12 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* ── Card ── */}
        <motion.div
          className={`
            relative overflow-hidden
            rounded-[24px] sm:rounded-[32px] lg:rounded-[40px]
            min-h-[260px] sm:min-h-[340px] lg:min-h-[420px]
            ${
              isDark
                ? "bg-[#080808] shadow-[0_0_120px_rgba(255,255,255,0.18)]"
                : "bg-white shadow-[0_0_120px_rgba(0,0,0,0.18)]"
            }
          `}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Floating glow — matches the reference component's pattern */}
          <motion.div
            className={`
              absolute top-0 left-0
              w-[180px] h-[180px] sm:w-[260px] sm:h-[260px]
              rounded-full blur-[100px]
              ${isDark ? "bg-white/5" : "bg-black/5"}
            `}
            animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
          />

          {/* ── Content ── */}
          <motion.div
            className="
              relative z-10
              min-h-[520px] lg:min-h-[650px]
              flex flex-col items-center justify-center
              text-center px-8
            "
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            {/* Subtitle */}
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={`
                uppercase tracking-[7px] text-[10px] mb-5
                ${isDark ? "text-white/65" : "text-black/60"}
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
                text-[42px] sm:text-[65px] md:text-[85px] lg:text-[90px] xl:text-[60px]
                ${
                  isDark
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
                h-[1px] my-8
                ${isDark ? "bg-white/35" : "bg-black/20"}
              `}
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className={`
                max-w-2xl text-[15px] sm:text-[17px] leading-8
                ${isDark ? "text-white/80" : "text-black/75"}
              `}
            >
              {description}
            </motion.p>

            {/* Button */}
            {buttonText && path && (
              <motion.div
                className="mt-10"
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  to={path}
                  className={`
                    inline-flex items-center justify-center
                    px-10 py-4 rounded-full
                    tracking-[2px] transition-all duration-500
                    ${
                      isDark
                        ? "bg-white text-black hover:bg-[#d6c7a0]"
                        : "bg-black text-white hover:bg-[#333]"
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
