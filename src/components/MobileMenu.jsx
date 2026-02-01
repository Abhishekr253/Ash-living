import { X, Instagram } from "lucide-react";

export default function MobileMenu({ isOpen, onClose, onNavigate, isDark }) {
  return (
    <>
      {/* Backdrop */}
      <div
  className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300
    ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
  `}
  onClick={onClose}
/>


      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[85%] sm:w-[420px]
        bg-black text-white
        transition-transform duration-500 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"} 
        ${isDark ? "bg-black text-white" : "bg-white text-black"}
        `}
      >
        {/* Header */}
       <div className="flex justify-between items-center px-8 py-6">
  <div
    className={`text-sm tracking-widest uppercase ${
      isDark ? "text-gray-400" : "text-gray-500"
    }`}
  >
    Menu
  </div>
  <button onClick={onClose}>
    <X
      className={`w-6 h-6 ${
        isDark ? "text-white" : "text-black"
      }`}
    />
  </button>
</div>


        {/* Nav */}
        <nav className="px-10 mt-16 space-y-8">
  {[
    { label: "Emergency", key: "emergency" },
    { label: "Rise With Us", key: "rise" },
    { label: "Elevate", key: "elevate" },
    { label: "AI Collaboration", key: "ai" },
    { label: "Contact", key: "contact" },
  ].map((item) => (
    <button
      key={item.key}
      onClick={() => {
        onNavigate(item.key);
        onClose();
      }}
      className={`block text-left text-3xl font-light transition
      ${isDark
        ? "text-white hover:text-emerald-400"
        : "text-black hover:text-emerald-600"}`}
    >
      {item.label}
    </button>
  ))}
</nav>


        {/* Footer */}
       <div className="absolute bottom-10 left-10 flex items-center gap-6">
  <a href="https://instagram.com" target="_blank" rel="noreferrer">
    <Instagram
      className={`w-5 h-5 transition ${
        isDark
          ? "text-gray-400 hover:text-white"
          : "text-gray-500 hover:text-black"
      }`}
    />
  </a>
</div>

      </div>
    </>
  );
}
