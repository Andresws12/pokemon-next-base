"use client";
import styles from "../AsideLayout.module.scss";

import AsideButton from "./AsideButton";
import ThemeButton from "./ThemeButton";

export default function Header() {
  return (
    <header className={styles.header}>
      <AsideButton />
      <ThemeButton />
    </header>
  );
}
