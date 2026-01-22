import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Header
        isDark={isDark}
        toggleTheme={() => setIsDark((prev) => !prev)}
      />
      <Hero />
    </div>
  );
}
