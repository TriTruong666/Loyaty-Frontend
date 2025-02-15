"use client";
import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    if (typeof window === "undefined") return; // ✅ Prevents SSR issues

    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = storedTheme || (systemPrefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (typeof window === "undefined") return prevTheme; // ✅ Prevent SSR errors

      const newTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      return newTheme;
    });
  };

  return { theme, toggleTheme };
};
