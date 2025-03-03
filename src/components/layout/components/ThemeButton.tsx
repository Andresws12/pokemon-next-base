"use client";

import { Sun, Moon } from "lucide-react";

import styles from "../AsideLayout.module.scss";

import { useAppState } from "@/store/appStore";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useAppState();

  const changeTheme = () => {
    toggleTheme(theme === "light" ? "dark" : "light");
    document.body.classList.toggle("dark");
  };
  return (
    <button onClick={changeTheme} className={styles.toggle}>
      {theme === "light" ? (
        <Sun className="size-4" color="var(--dark-color)" />
      ) : (
        <Moon className="size-4" color="var(--dark-color)" />
      )}
    </button>
  );
}
