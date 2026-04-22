"use client";

import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.css";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const current = (document.documentElement.dataset.theme as Theme) || "light";
    setTheme(current);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  // Render placeholder until hydrated to avoid mismatch
  const label = theme === "dark" ? "Light" : "Dark";

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label="Toggle color theme"
      suppressHydrationWarning
    >
      <span className={styles.dot} aria-hidden />
      <span suppressHydrationWarning>{theme ? label : ""}</span>
    </button>
  );
}
