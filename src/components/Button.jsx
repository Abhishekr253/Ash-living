import React from "react";

export default function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
}) {
  const baseStyles =
    "px-12 py-4 rounded-full font-light tracking-widest text-sm uppercase transition-all duration-300";

  const variantStyles = {
    primary:
      "bg-black dark:bg-white text-white dark:text-black hover:scale-105",
    secondary:
      "border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
