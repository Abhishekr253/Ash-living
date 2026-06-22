import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AstralAscension from "./components/AstralAscension";
import PrivateImmersions from "./components/PrivateImmersions";
import ScrollToTop from "./components/ScrollToTop";
import ImmediateCareAccess from "./components/ImmediateCareAccess";
import TextHelp from "./components/TextHelp";
import InsideAshLiving from "./components/InsideAshLiving";
import Collaboration from "./components/Collaboration";
import Support247 from "./pages/Support247";
import RiseWithUs from "./pages/RiseWithUs";
import AshLivingShop from "./pages/AshLivingShop";
import ExploreAI from "./components/ExploreAI";
import EmergencySupport from "./components/EmergencySupport";

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
          element={
            <Home
              isDark={isDark}
              toggleTheme={() => setIsDark((prev) => !prev)}
            />
          }
        />
        <Route path="/astral-ascension" element={<AstralAscension />} />
        <Route path="/private-immersions" element={<PrivateImmersions />} />
        654+
        <Route
          path="/immediate-care-access"
          element={<ImmediateCareAccess />}
        />
        <Route path="/text-help" element={<TextHelp />} />
        <Route path="/inside-ash-living" element={<InsideAshLiving />} />
        <Route path="/collaborations" element={<Collaboration />} />
        <Route path="/24-7-support" element={<Support247 />} />
        <Route path="/rise-with-us" element={<RiseWithUs />} />
        <Route path="/shop" element={<AshLivingShop />} />
        <Route path="/explore-ai" element={<ExploreAI />} />
        <Route path="/emergency-support" element={<EmergencySupport />} />
      </Routes>
    </Router>
  );
}
