"use client";
import { PanelLeft } from "lucide-react";

import { useAppState } from "@/store/appStore";

import styles from "../AsideLayout.module.scss";

export default function AsideButton() {
  const toggleAside = useAppState((state) => state.toggleAside);
  return (
    <>
      <button onClick={toggleAside} className={styles.toggle}>
        <PanelLeft color="var(--dark-color)" />
      </button>
    </>
  );
}
