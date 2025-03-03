import { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Pokemon Dashboard",
  description:
    "Dashboard para explorar la API de Pokemon con Next.js y React Query",
};

export default function MainPage() {
  return (
    <div className={`card ${styles.overviewContainer}`}>
      <section className={styles.overviewContainer__header}>
        <h1 className={styles["overviewContainer__header-title"]}>
          Pokemon Dashboard
        </h1>
        <p className={styles["overviewContainer__header-description"]}>
          Bienvenido a Pokemon Dashboard, una aplicación creada para probar y
          demostrar las capacidades de Next.js y React Query. Utiliza la API
          pública de Pokemon para listar, filtrar y gestionar tus favoritos,
          entre muchas otras funcionalidades.
        </p>
      </section>
      <section className={styles.overviewContainer__features}>
        <h2 className={styles["overviewContainer__features-title"]}>
          Características
        </h2>
        <ul className={styles["overviewContainer__features-list"]}>
          <li className={styles["overviewContainer__features-item"]}>
            Listado de Pokemons
          </li>
          <li className={styles["overviewContainer__features-item"]}>
            Filtrado por nombre y tipo
          </li>
          <li className={styles["overviewContainer__features-item"]}>
            Agregar y remover de favoritos
          </li>
          <li className={styles["overviewContainer__features-item"]}>
            Visualización de estadísticas y detalles
          </li>
          <li className={styles["overviewContainer__features-item"]}>
            Manejo avanzado del estado con React Query
          </li>
          <li className={styles["overviewContainer__features-item"]}>
            Integración de herramientas modernas de Next.js
          </li>
        </ul>
      </section>
      <section className={styles.overviewContainer__demo}>
        <h2 className={styles["overviewContainer__demo-title"]}>Demo</h2>
        <p className={styles["overviewContainer__demo-description"]}>
          Explora el dashboard y experimenta con la previsualización
          interactiva. Próximamente se integrarán nuevos módulos y
          funcionalidades para mejorar la experiencia con la API de Pokemon.
        </p>
      </section>
    </div>
  );
}
