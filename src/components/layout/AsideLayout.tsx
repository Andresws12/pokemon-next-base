import styles from "./AsideLayout.module.scss";
import Aside from "./components/Aside";
import Header from "./components/Header";

interface AsideLayoutProps {
  children: React.ReactNode;
}

export default function AsideLayout({ children }: AsideLayoutProps) {
  return (
    <div className={styles.dashboard}>
      <div className={styles.container}>
        <Aside />
        <main className={styles.main}>
          <Header />
          <article className={styles.content}>{children}</article>
        </main>
      </div>
    </div>
  );
}
