import type { ReactNode } from "react";
import Reveal from "./Reveal";
import styles from "./Section.module.css";

type Props = {
  id: string;
  index: number;
  title: string;
  right?: ReactNode;
  children: ReactNode;
};

const pad = (n: number) => String(n).padStart(2, "0");

export default function Section({ id, index, title, right, children }: Props) {
  return (
    <section id={id} className={styles.section}>
      <Reveal>
        <header className={styles.header}>
          <span className={`idx-num ${styles.marker}`}>§ {pad(index)}</span>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.rule} aria-hidden />
          {right ? <span className={styles.right}>{right}</span> : null}
        </header>
      </Reveal>
      {children}
    </section>
  );
}
