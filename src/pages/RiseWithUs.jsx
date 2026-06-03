import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RiseWithUs() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-32 pb-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <button
          onClick={() => navigate(-1)}
          className="mb-10 flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-white/20"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        <h1 className="text-4xl md:text-6xl font-serif text-center mb-8">
          Rise With Us
        </h1>

        <div className="text-center text-gray-600 dark:text-gray-400 space-y-6 mb-14">
          <p>
            Rise With Us is an invitation into a deeper level of growth,
            refinement, and personal transformation.
          </p>

          <p>
            Through conscious mentoring, strategic guidance, emotional
            intelligence, and practical integration, we support individuals in
            creating meaningful and measurable change.
          </p>

          <p>
            If you are ready to elevate your mindset, direction, wellbeing,
            and personal leadership, we invite you to connect with us below.
          </p>
        </div>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 rounded-xl border border-gray-300 dark:border-white/20 bg-transparent"
          />

          <input
            type="tel"
            placeholder="Telephone"
            className="w-full p-4 rounded-xl border border-gray-300 dark:border-white/20 bg-transparent"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-xl border border-gray-300 dark:border-white/20 bg-transparent"
          />

          <textarea
            rows={6}
            placeholder="Tell us about your goals and what you would like support with"
            className="w-full p-4 rounded-xl border border-gray-300 dark:border-white/20 bg-transparent resize-none"
          />

          <button
            type="submit"
            className="w-full py-4 rounded-full bg-black text-white dark:bg-white dark:text-black"
          >
            Connect With Us
          </button>
        </form>
      </motion.div>
    </div>
  );
}