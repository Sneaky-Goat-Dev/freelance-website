import Link from 'next/link';
import Image from 'next/image';
import ArrowIcon from '@/components/ArrowIcon';
import styles from './about.module.css';

const career = [
  {
    year: '2025 — Present',
    role: 'Freelance Web Development',
    desc: 'Building fast, focused websites for small businesses. Design, development, and hosting — all in one place.',
  },
  {
    year: '2024 — 2025',
    role: 'Software Engineer · Africa Wildlife Tracking',
    desc: 'Built software for wildlife conservation and tracking systems. Cloud infrastructure, full-stack development.',
  },
  {
    year: '2023 — 2024',
    role: 'Software Engineer · CustomApp',
    desc: 'Full-stack development and cloud infrastructure. Learned to ship fast and iterate based on real feedback.',
  },
  {
    year: '2022 — 2025',
    role: 'University of Pretoria',
    desc: 'Self-taught software engineering alongside formal studies. Built projects, broke things, learned by doing.',
  },
];

const values = [
  {
    title: 'Fixed fees, in writing.',
    desc: 'I scope once, carefully. The number we agree to is the number you pay. If scope changes, I tell you before it does.',
  },
  {
    title: 'A real phone number.',
    desc: "Saved in your phone as \"Adam\" — not a help desk, not a ticketing portal, not a ten-minute chat queue.",
  },
  {
    title: 'Honest fit checks.',
    desc: "If a template would serve you better than a custom build, I'll point you at one. I'd rather lose a deal than waste your money.",
  },
  {
    title: 'Your code is yours.',
    desc: "Clean, readable, handoff-able. If you outgrow me, I'll help you move.",
  },
];

export default function AboutPage() {
  return (
    <>
      <header className={`${styles.pageHead} container`}>
        <span className="eyebrow">About</span>
        <h1 className="display" style={{ marginTop: '16px' }}>
          One person.<br />
          <span className="serif-italic">On purpose.</span>
        </h1>
      </header>

      <section className={`container ${styles.aboutHero}`}>
        <div className="imgframe" style={{ aspectRatio: '4/5' }}>
          <Image
            src="/adam.jpg"
            alt="Adam Berger"
            width={1200}
            height={1500}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>
        <div>
          <h2 style={{ fontSize: 'clamp(32px, 3.5vw, 48px)' }}>Hi, I&apos;m Adam.</h2>
          <p className={`lead ${styles.heroLead}`}>
            I&apos;m a self-taught software engineer based in Johannesburg. I&apos;ve spent the last few years building software — from wildlife tracking systems to SaaS products — and now I help small businesses get online with clean, fast websites.
          </p>
          <p className={`lead ${styles.heroLead}`}>
            I work alone on purpose. It means every conversation you have is with the person doing the work. Decisions happen fast. And when something needs fixing, there&apos;s no ticket queue — just me.
          </p>
        </div>
      </section>

      <section className={styles.manifesto}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">A short manifesto</span>
            <div>
              <h2>
                What I believe<br />
                <span className="serif-italic">about this work.</span>
              </h2>
            </div>
          </div>

          <div className={styles.manifestoGrid}>
            <div></div>
            <div>
              <p>
                A small business deserves a website built with the same <em>craft</em> a luxury brand gets. The budget is smaller. The stakes are bigger.
              </p>
              <p>
                A good site should feel like walking into the best version of your shop — the shelves straight, the lighting right, the person behind the counter <em>actually looking up</em> when the bell rings.
              </p>
              <p>
                Software rots. That&apos;s a fact. My job isn&apos;t just to build a site — it&apos;s to be the person still paying attention to it three years from now, when the integrations have shifted and the browser has moved on.
              </p>
              <p>
                If my fee saves you more in direct bookings, wholesale leads, or agency retainers than it costs you inside a year, I&apos;ve done my job. If not, we should talk honestly about why.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.career}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">A short career</span>
            <div>
              <h2>
                How I got here<br />
                <span className="serif-italic">(the honest version).</span>
              </h2>
            </div>
          </div>

          {career.map((item, index) => (
            <div key={index} className={styles.careerList}>
              <span className={styles.careerYear}>{item.year}</span>
              <div className={styles.careerRole}>{item.role}</div>
              <div className={styles.careerDesc}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Values</span>
            <div>
              <h2>
                What you can count on<br />
                <span className="serif-italic">from working with me.</span>
              </h2>
            </div>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.value}>
                <h4>{value.title}</h4>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center', padding: '120px 0' }}>
        <div className="container">
          <h2 className="display">
            Enough about me.<br />
            <span className="serif-italic">Tell me about you.</span>
          </h2>
          <Link className="btn btn-primary" href="/contact" style={{ marginTop: '40px' }}>
            Start a project
            <ArrowIcon />
          </Link>
        </div>
      </section>
    </>
  );
}
