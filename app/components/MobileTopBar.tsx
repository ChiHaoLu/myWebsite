"use client";

import { useEffect, useState } from "react";
import { SECTIONS, SITE } from "@/lib/content";
import ThemeToggle from "./ThemeToggle";
import styles from "./MobileTopBar.module.css";

const pad = (n: number) => String(n).padStart(2, "0");

export default function MobileTopBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={styles.bar}>
        <a href="#about" className={styles.brand} onClick={() => setOpen(false)}>
          {SITE.name}
        </a>
        <div className={styles.actions}>
          <ThemeToggle />
          <button
            type="button"
            className={styles.menuBtn}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {open && (
        <div className={styles.drawer}>
          <nav className={styles.drawerNav}>
            {SECTIONS.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={styles.drawerItem}
                onClick={() => setOpen(false)}
              >
                <span className="idx-num">{pad(i + 1)}</span>
                <span>{s.label}</span>
              </a>
            ))}
          </nav>
          <div className={styles.drawerSocials}>
            {SITE.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`ln ${styles.drawerSocial}`}
              >
                <span className={styles.socialLabel}>{s.label}</span>
                <span>{s.handle}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
