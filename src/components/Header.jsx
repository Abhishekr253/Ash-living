import React from "react";
import { Moon, Sun, Menu } from "lucide-react";
import logo from "../assets/al-logo.png";
import logoDark from "../assets/al-logo-black.png";

export default function Header({ isDark, toggleTheme, onMenuClick }) {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center ">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={isDark ? logo : logoDark}
            alt="ASH Living Logo"
            className={`
      h-auto object-contain
      ${
        isDark
          ? "w-[100px] sm:w-[150px] max-w-[120px]"
          : "w-[120px] sm:w-[140px] max-w-[80px] "
      }
    `}
          />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
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

          {/* Hamburger Menu */}
          <button
            onClick={onMenuClick}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-7 h-7 text-gray-800 dark:text-gray-200" />
          </button>
        </div>
      </div>
    </header>
  );
}
