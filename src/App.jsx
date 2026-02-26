import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AstralAscension from "./components/AstralAscension";
import PrivateImmersions from "./components/PrivateImmersions";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  // Initialize theme from localStorage or default to false (light mode)
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme !== null) {
      return savedTheme === "dark";
    }
    // Check system preference as fallback
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Apply theme to document and save to localStorage
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <Router>
      <ScrollToTop /> 
      <Routes>
        <Route
          path="/"
          element={<Home isDark={isDark} toggleTheme={() => setIsDark(prev => !prev)} />}
        />
        <Route path="/astral-ascension" element={<AstralAscension />} />
        <Route path="/private-immersions" element={<PrivateImmersions />} />
      </Routes>
    </Router>
  );
}
