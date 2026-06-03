import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ExploreAI() {
  const navigate = useNavigate();

  const services = [
    "AI Video Production",
    "Cinematic Storytelling",
    "Creative Direction",
    "AI Visual Design",
    "Content Generation",
    "Brand Experiences",
  ];

  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gray-100 rounded-full blur-[180px]" />
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="
          absolute top-8 left-6 z-20
          p-3 rounded-full
          border border-gray-300
          hover:bg-gray-100
          transition
        "
      >
        <ArrowLeft size={18} />
      </button>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif mb-8"
        >
          Explore AI
        </motion.h1>

        <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
          Advanced artificial intelligence, cinematic storytelling, and
          human-guided creative direction designed to elevate brands,
          businesses, creators, and visionary projects through premium digital
          experiences.
        </p>
      </section>

      {/* AI Overview */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6">
            AI Overview
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore AI combines advanced artificial intelligence with strategic
            creative thinking to produce premium visual experiences, compelling
            narratives, innovative content, and future-focused digital
            solutions.
          </p>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="
                p-8
                rounded-2xl
                border border-gray-200
                bg-gray-50
                hover:bg-gray-100
                transition
              "
            >
              <h3 className="text-xl font-medium mb-3 text-black">
                {service}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                Premium AI-powered solutions tailored for modern businesses,
                personal brands, creative projects, and transformative digital
                experiences.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 text-center py-20 px-6">
        <h2 className="text-3xl md:text-4xl mb-6">
          Ready To Explore What's Possible?
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600 mb-10">
          Discover how advanced AI can transform content creation,
          storytelling, branding, and digital experiences.
        </p>

        <button
          className="
            px-10 py-4
            rounded-full
            bg-black
            text-white
            hover:scale-105
            transition
          "
        >
          Book A Discovery Call
        </button>
      </section>

      {/* Contact Form */}
      <section className="relative z-10 max-w-3xl mx-auto px-6 pb-24">
        <div className="text-center mb-10">
          <h3 className="text-3xl mb-4">
            Make An Enquiry
          </h3>

          <p className="text-gray-600">
            Tell us about your project and how we can help.
          </p>
        </div>

        <form
          className="space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Name"
            className="
              w-full
              p-4
              rounded-xl
              bg-white
              border border-gray-300
              text-black
              placeholder-gray-500
              focus:outline-none
              focus:ring-2
              focus:ring-black
            "
          />

          <input
            type="email"
            placeholder="Email"
            className="
              w-full
              p-4
              rounded-xl
              bg-white
              border border-gray-300
              text-black
              placeholder-gray-500
              focus:outline-none
              focus:ring-2
              focus:ring-black
            "
          />

          <input
            type="text"
            placeholder="Company / Organisation"
            className="
              w-full
              p-4
              rounded-xl
              bg-white
              border border-gray-300
              text-black
              placeholder-gray-500
              focus:outline-none
              focus:ring-2
              focus:ring-black
            "
          />

          <textarea
            rows={6}
            placeholder="Tell us about your project..."
            className="
              w-full
              p-4
              rounded-xl
              bg-white
              border border-gray-300
              text-black
              placeholder-gray-500
              resize-none
              focus:outline-none
              focus:ring-2
              focus:ring-black
            "
          />

          <button
            type="submit"
            className="
              w-full
              py-4
              rounded-full
              bg-black
              text-white
              hover:scale-[1.02]
              transition
            "
          >
            Submit Enquiry
          </button>
        </form>
      </section>
    </div>
  );
}