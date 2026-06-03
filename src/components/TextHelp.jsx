import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TextHelp() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-32 pb-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto"
      >
        <motion.button
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)}
          className="
    flex items-center gap-2
    mb-10
    text-sm
    tracking-widest
    uppercase
    text-gray-600
    dark:text-gray-400
    hover:text-black
    dark:hover:text-white
    transition
  "
        >
          <ArrowLeft size={16} />
          Back
        </motion.button>

        <h1 className="text-4xl md:text-6xl font-serif text-center mb-8">
          Text Help
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-14">
          Text Support is available if you do not feel fully comfortable
          speaking and would prefer a more private way to reach out.
        </p>

        <p className="text-center text-gray-600 dark:text-gray-400 leading-relaxed mb-14">
          Please send us a message below, and a Conscious Support Specialist
          will respond with care, discretion, and full respect for your privacy.
        </p>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 rounded-xl border border-gray-300 dark:border-white/20 bg-white dark:bg-white/5"
          />

          <input
            type="tel"
            placeholder="Telephone"
            className="w-full p-4 rounded-xl border border-gray-300 dark:border-white/20 bg-white dark:bg-white/5"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-xl border border-gray-300 dark:border-white/20 bg-white dark:bg-white/5"
          />

          <textarea
            rows={6}
            placeholder="Message"
            className="w-full p-4 rounded-xl border border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 resize-none"
          />

          <button
            type="submit"
            className="w-full py-4 rounded-full bg-black text-white dark:bg-white dark:text-black hover:scale-[1.02] transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
}
