"use client";

import { useEffect, useState } from "react";
import { SECTIONS, SITE, type SectionId } from "@/lib/content";
import ThemeToggle from "./ThemeToggle";
import styles from "./Sidebar.module.css";

const pad = (n: number) => String(n).padStart(2, "0");

export default function Sidebar() {
  const [active, setActive] = useState<SectionId>("about");

  useEffect(() => {
    const onScroll = () => {
      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top < 160 && r.bottom > 160) {
          setActive(id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.eyebrow}>2026 · ver. 05</div>
      <div className={styles.name}>{SITE.name}</div>
      <div className={styles.meta}>{SITE.role}</div>
      <div className={styles.meta}>{SITE.location}</div>
      <div className={styles.avatar} aria-hidden>
        🍩
      </div>

      <nav className={styles.nav}>
        {SECTIONS.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`${styles.navItem} ${active === s.id ? styles.navActive : ""}`}
          >
            <span className="idx-num">{pad(i + 1)}</span>
            <span>{s.label}</span>
            <span
              className={styles.dot}
              aria-hidden
              style={{ opacity: active === s.id ? 1 : 0 }}
            >
              ●
            </span>
          </a>
        ))}
      </nav>

      <div className={styles.socials}>
        {SITE.socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`ln ${styles.social}`}
          >
            <span className={styles.socialLabel}>{s.label}</span>
            <span className={styles.socialHandle}>{s.handle}</span>
          </a>
        ))}
      </div>

      <div className={styles.toggleWrap}>
        <ThemeToggle />
      </div>
    </aside>
  );
}
