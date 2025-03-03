import { Home, Cat } from "lucide-react";
import Link from "next/link";

import styles from "../AsideLayout.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <p className={styles.navbar__titles}>Pages</p>
      <Link className="link" href="/">
        <Home className="mr-1" size={16} />
        Overview
      </Link>
      <Link className="link" href="/dashboard/pokemons">
        <Cat className="mr-1" size={16} />
        Pokemons
      </Link>
    </nav>
  );
}
