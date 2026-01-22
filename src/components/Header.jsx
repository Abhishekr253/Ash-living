import React from "react";
import { Moon, Sun } from "lucide-react";
import logo from "../assets/al-logo.png";
import logoDark from "../assets/al-logo-black.png";

export default function Header({ isDark, toggleTheme }) {
  return (
    <header className="top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={isDark ? logo : logoDark}
            alt="ASH Living Logo"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="w-6 h-6 text-yellow-400" />
          ) : (
            <Moon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          )}
        </button>
      </div>
    </header>
  );
}
