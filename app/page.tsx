import { SITE } from "@/lib/content";
import Sidebar from "./components/Sidebar";
import MobileTopBar from "./components/MobileTopBar";
import Section from "./components/Section";
import Reveal from "./components/Reveal";
import styles from "./page.module.css";

const ext = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

export default function HomePage() {
  return (
    <>
      <MobileTopBar />
      <div className={styles.shell}>
        <Sidebar />
        <main className={styles.main}>
          {/* About */}
          <Section id="about" index={1} title="About">
            <Reveal>
              <p className={styles.lede}>{SITE.bio}</p>
            </Reveal>
            <Reveal delay={80}>
              <p className={styles.note}>{SITE.note}</p>
            </Reveal>
            <Reveal delay={120}>
              <div className={styles.aliases}>
                <span className={styles.aliasesLabel}>aka</span>
                <span>{SITE.aliases.join(" · ")}</span>
              </div>
            </Reveal>
          </Section>

          {/* Career */}
          <Section id="career" index={2} title="Career">
            {SITE.career.map((c, i) => (
              <Reveal key={c.org} delay={i * 30}>
                <article className={styles.entry}>
                  <header className={styles.entryHead}>
                    <a href={c.href} {...ext} className="ln ln--u">
                      {c.org}
                    </a>
                    <span className={`idx-num ${styles.entryDate}`}>{c.period}</span>
                  </header>
                  <div className={styles.entryRole}>{c.role}</div>
                  <p className={styles.entrySummary}>{c.summary}</p>
                  <ul className={styles.bullets}>
                    {c.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </Section>

          {/* Education */}
          <Section id="education" index={3} title="Education">
            {SITE.education.map((e, i) => (
              <Reveal key={e.institution + i} delay={i * 30}>
                <article className={styles.entry}>
                  <header className={styles.entryHead}>
                    <span className={styles.entryOrg}>{e.institution}</span>
                    <span className={`idx-num ${styles.entryDate}`}>{e.period}</span>
                  </header>
                  <div className={styles.entryRole}>{e.degree}</div>
                  {e.summary && <p className={styles.entrySummary}>{e.summary}</p>}
                  {e.bullets && (
                    <ul className={styles.bullets}>
                      {e.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            ))}
          </Section>

          {/* Writing */}
          <Section
            id="writing"
            index={4}
            title="Writing"
            right={
              <a
                href="https://medium.com/@ChiHaoLu"
                {...ext}
                className="ln"
                style={{ color: "var(--ink-3)" }}
              >
                all on Medium →
              </a>
            }
          >
            <ul className={styles.list}>
              {SITE.writing.map((w) => (
                <li key={w.href}>
                  <a
                    href={w.href}
                    {...ext}
                    className={`row ln ${styles.writingRow}`}
                  >
                    <span className={styles.writingTitle}>{w.title}</span>
                    <span className={`idx-num ${styles.writingTag}`}>{w.series}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Section>

          {/* Talks */}
          <Section id="talks" index={5} title="Talks">
            <ul className={styles.list}>
              {SITE.talks.map((t) => (
                <li key={t.href + t.date}>
                  <a
                    href={t.href}
                    {...ext}
                    className={`row ln ${styles.talkRow}`}
                  >
                    <span className={styles.talkTitle}>
                      {t.title}{" "}
                      <span className={styles.talkVenue}>/ {t.venue}</span>
                    </span>
                    <span className={`idx-num ${styles.talkKind}`}>{t.kind}</span>
                    <span className={`idx-num ${styles.talkDate}`}>{t.date}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Section>

          {/* Open Source */}
          <Section id="open-source" index={6} title="Open Source">
            <h3 className={styles.subhead}>Side Projects</h3>
            <ul className={styles.list}>
              {SITE.openSource.sideProjects.map((p) => (
                <li key={p.href}>
                  <a
                    href={p.href}
                    {...ext}
                    className={`row ln ${styles.projectRow}`}
                  >
                    <span>{p.title}</span>
                    <span className={styles.projectDesc}>{p.description}</span>
                  </a>
                </li>
              ))}
            </ul>
            <h3 className={styles.subhead} style={{ marginTop: 32 }}>
              Contributions
            </h3>
            <ul className={styles.list}>
              {SITE.openSource.contributions.map((c) => (
                <li key={c.href}>
                  <a
                    href={c.href}
                    {...ext}
                    className={`row ln ${styles.repoRow}`}
                  >
                    <span>{c.repo}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Section>

          {/* Recognition */}
          <Section id="recognition" index={7} title="Recognition">
            <h3 className={styles.subhead}>Awards</h3>
            <ul className={styles.list}>
              {SITE.recognition.awards.map((a) => (
                <li key={a.href + a.title}>
                  <a
                    href={a.href}
                    {...ext}
                    className={`row ln ${styles.awardRow}`}
                  >
                    <span>{a.title}</span>
                    <span className={styles.awardVenue}>{a.venue}</span>
                  </a>
                </li>
              ))}
            </ul>
            <h3 className={styles.subhead} style={{ marginTop: 32 }}>
              Publishments
            </h3>
            <ul className={styles.list}>
              {SITE.recognition.publishments.map((p) => (
                <li key={p.href}>
                  <a
                    href={p.href}
                    {...ext}
                    className={`row ln ${styles.publishRow}`}
                  >
                    <span>{p.title}</span>
                    <span className={`idx-num ${styles.publishKind}`}>{p.kind}</span>
                    <span className={`idx-num ${styles.publishYear}`}>{p.year}</span>
                  </a>
                </li>
              ))}
            </ul>
            <h3 className={styles.subhead} style={{ marginTop: 32 }}>
              Volunteer
            </h3>
            <ul className={styles.list}>
              {SITE.recognition.volunteer.map((v) => (
                <li key={v.href}>
                  <a
                    href={v.href}
                    {...ext}
                    className={`row ln ${styles.awardRow}`}
                  >
                    <span>{v.title}</span>
                    <span className={styles.awardVenue}>{v.venue}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Section>

          {/* Contact */}
          <Section id="contact" index={8} title="Contact">
            <div className={styles.contactGrid}>
              {SITE.socials.map((s) => (
                <div key={s.label} className="leader" style={{ fontSize: 13 }}>
                  <span style={{ color: "var(--ink-3)" }}>{s.label}</span>
                  <span className="dots" />
                  <a href={s.href} {...ext} className="ln ln--u">
                    {s.handle}
                  </a>
                </div>
              ))}
            </div>
          </Section>

          <footer className={styles.footer}>
            <span>© {new Date().getFullYear()} {SITE.name}</span>
            <span>Last update: {SITE.lastUpdated}</span>
          </footer>
        </main>
      </div>
    </>
  );
}
