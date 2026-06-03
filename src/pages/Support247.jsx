import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Support247() {
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
          24/7 Support
        </h1>

        <div className="text-center text-gray-600 dark:text-gray-400 space-y-6 mb-14">
          <p>
            Conscious support is available whenever you need it.
          </p>

          <p>
            If you are experiencing emotional overwhelm, uncertainty,
            vulnerability, or simply need guidance and support, our team is
            available to receive your request.
          </p>

          <p>
            Please complete the form below and a Conscious Support Specialist
            will respond as soon as possible.
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
            placeholder="How can we support you?"
            className="w-full p-4 rounded-xl border border-gray-300 dark:border-white/20 bg-transparent resize-none"
          />

          <button
            type="submit"
            className="w-full py-4 rounded-full bg-black text-white dark:bg-white dark:text-black"
          >
            Request Support
          </button>
        </form>
      </motion.div>
    </div>
  );
}