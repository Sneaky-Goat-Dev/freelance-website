import Link from 'next/link';
import Image from 'next/image';
import ArrowIcon from '@/components/ArrowIcon';
import styles from './about.module.css';

const career = [
  {
    year: '2025 - Present',
    role: 'Freelance Web Development',
    desc: 'Building fast, focused websites for small businesses. Design, development, and hosting all in one place.',
  },
  {
    year: '2024 - 2025',
    role: 'Software Engineer · Africa Wildlife Tracking',
    desc: 'Built software for wildlife conservation and tracking systems. Cloud infrastructure, full-stack development.',
  },
  {
    year: '2023 - 2024',
    role: 'Software Engineer · CustomApp',
    desc: 'Full-stack development and cloud infrastructure. Learned to ship fast and iterate based on real feedback.',
  },
  {
    year: '2022 - 2025',
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
    desc: "Saved in your phone as \"Adam\", not a help desk or ticketing portal.",
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
          About <em>Me</em>
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
            I&apos;m a self-taught software engineer based in Johannesburg. I&apos;ve spent the last few years building software, from wildlife tracking systems to SaaS products, and now I help small businesses get online with clean, fast websites.
          </p>
          <p className={`lead ${styles.heroLead}`}>
            I work alone on purpose. Every conversation you have is with the person doing the work. Decisions happen fast. And when something needs fixing, there&apos;s no ticket queue, just me.
          </p>
        </div>
      </section>

      <section className={styles.manifesto}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">My approach</span>
            <div>
              <h2>
                How I think<br />
                <span className="serif-italic">about this work.</span>
              </h2>
            </div>
          </div>

          <div className={styles.manifestoGrid}>
            <div></div>
            <div>
              <p>
                Small businesses deserve the same quality of work that larger companies get. Different budget, same standards.
              </p>
              <p>
                A website should represent your business well—clear, professional, and easy for customers to use.
              </p>
              <p>
                Websites require ongoing attention. I don&apos;t just build and disappear. I maintain what I create.
              </p>
              <p>
                The goal is <em>return on investment</em>. If your site brings in more business than it costs, we&apos;ve done this right.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.career}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">My career</span>
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
          <p className="lead" style={{ margin: '24px auto 40px' }}>
            Have a project in mind? I&apos;d love to hear about it.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn btn-primary" href="/contact">
              Start a conversation
              <ArrowIcon />
            </Link>
            <Link className="btn btn-ghost" href="/services">
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
