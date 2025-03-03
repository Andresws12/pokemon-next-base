"use client";
import Image from "next/image";

import { useAppState } from "@/store/appStore";

import styles from "../AsideLayout.module.scss";

import Navbar from "./Navbar";

export default function Aside() {
  const isAsideOpen = useAppState((state) => state.isAsideOpen);

  return (
    <>
      {isAsideOpen && (
        <aside className={styles.aside}>
          <Image src="/img/pokemon.svg" alt="Logo" width={95} height={95} />
          <Navbar />
        </aside>
      )}
    </>
  );
}
