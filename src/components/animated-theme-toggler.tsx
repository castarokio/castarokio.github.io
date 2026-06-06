"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export function AnimatedThemeToggler() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <motion.span
        className="theme-toggle__thumb"
        animate={{ x: isDark ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 420, damping: 30 }}
      >
        {isDark ? <Moon size={14} /> : <Sun size={14} />}
      </motion.span>
      <Sun size={13} aria-hidden="true" />
      <Moon size={13} aria-hidden="true" />
    </button>
  );
}
