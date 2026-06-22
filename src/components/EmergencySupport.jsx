import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoDark from "../assets/al-logo-black.png";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function EmergencySupport() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    telephone: "",
    email: "",
    location: "",
    safeNow: "Yes",
    supportType: "Emotional overwhelm",
    message: "",
    callbackRequired: "Yes",
    emergencyCallout: "Yes",
    understandsCharges: "Yes, I understand",
    contactConsent: false,
    medicalDisclaimer: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "service_rpuefrw",
        "template_gbska2k",
        {
          section_name: "Emergency Support",

          name: formData.name,
          email: formData.email,
          telephone: formData.telephone,

          location: formData.location,

          safe_now: formData.safeNow,
          support_type: formData.supportType,

          message: formData.message,

          callback_required: formData.callbackRequired,
          emergency_callout: formData.emergencyCallout,

          understands_charges: formData.understandsCharges,

          contact_consent: formData.contactConsent ? "Yes" : "No",

          medical_disclaimer: formData.medicalDisclaimer
            ? "Accepted"
            : "Not Accepted",

          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),

          page_url: window.location.href,
          submission_id: `ASH-EM-${Date.now()}`,
        },
        "LxQMBJc2D2fjN75Jp",
      );

      alert(`Thank you for contacting Ash Living Emergency Support.

Your request has been safely received.

A member of our support team will review your message and respond as soon as possible.`);

      setFormData({
        name: "",
        telephone: "",
        email: "",
        location: "",
        safeNow: "Yes",
        supportType: "Emotional overwhelm",
        message: "",
        callbackRequired: "Yes",
        emergencyCallout: "Yes",
        understandsCharges: "Yes, I understand",
        contactConsent: false,
        medicalDisclaimer: false,
      });
    } catch (error) {
      console.error(error);
      alert("Failed to submit request. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Logo */}
      <div className="pt-10 flex justify-center">
        <Link to="/">
          <img
            src={logoDark}
            alt="Ash Living"
            className="h-12 md:h-14 hover:opacity-80 transition"
          />
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-2xl md:text-4xl font-bold uppercase tracking-[0.2em]">
            Emergency Support
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            If you need urgent wellbeing support, please complete the form below
            and a member of our team will review your request as soon as
            possible.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Full Name */}
          <div>
            <label className="block mb-2 text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full px-5 py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Mobile Number
            </label>
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              required
              placeholder="Enter your mobile number"
              className="w-full px-5 py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
              className="w-full px-5 py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Current Location / Postcode
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="Enter your location or postcode"
              className="w-full px-5 py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>

          {/* Safe Right Now */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Are you safe right now?
            </label>
            <select
              name="safeNow"
              value={formData.safeNow}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
            >
              <option>Yes</option>
              <option>No</option>
              <option>Unsure</option>
            </select>
          </div>

          {/* Support Type */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              What type of support do you need?
            </label>
            <select
              name="supportType"
              value={formData.supportType}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
            >
              <option>Emotional overwhelm</option>
              <option>Anxiety / panic</option>
              <option>Relationship or family situation</option>
              <option>Grief or loss</option>
              <option>Feeling unsafe</option>
              <option>Urgent guidance</option>
              <option>Other</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Briefly explain what is happening
            </label>
            <textarea
              rows={6}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us how we can support you..."
              className="w-full px-5 py-4 rounded-3xl border border-gray-300 resize-none focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>

          {/* Callback */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Do you need a call-back?
            </label>
            <select
              name="callbackRequired"
              value={formData.callbackRequired}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
            >
              <option>Yes</option>
              <option>No</option>
              <option>Text first please</option>
            </select>
          </div>

          {/* Emergency Call Out */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Do you require an emergency call-out?
            </label>
            <select
              name="emergencyCallout"
              value={formData.emergencyCallout}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
            >
              <option>Yes</option>
              <option>No</option>
              <option>Unsure</option>
            </select>
          </div>

          {/* Charges */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Are you aware that emergency call-outs and specialist support
              responses are chargeable?
            </label>
            <select
              name="understandsCharges"
              value={formData.understandsCharges}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
            >
              <option>Yes, I understand</option>
              <option>I would like costs confirmed first</option>
            </select>
          </div>

          {/* Consent */}
          <div className="space-y-4">
            <label className="flex gap-3 text-sm text-gray-700">
              <input
                type="checkbox"
                name="contactConsent"
                checked={formData.contactConsent}
                onChange={handleChange}
                required
                className="mt-1"
              />
              <span>
                I consent to Ash Living contacting me regarding this emergency
                support request.
              </span>
            </label>

            <label className="flex gap-3 text-sm text-gray-700">
              <input
                type="checkbox"
                name="medicalDisclaimer"
                checked={formData.medicalDisclaimer}
                onChange={handleChange}
                required
                className="mt-1"
              />
              <span>
                I understand that Ash Living is a wellbeing and support service,
                not a medical emergency service. If I am in immediate danger or
                require urgent medical assistance, I should contact 999
                immediately.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-full bg-black text-white text-sm tracking-[0.15em] uppercase hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "SUBMITTING..." : "SUBMIT REQUEST"}
          </button>
        </motion.form>
      </div>
    </div>
  );
}
