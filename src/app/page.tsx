import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import ArrowIcon from '@/components/ArrowIcon';
import styles from './home.module.css';

const workItems = [
  {
    title: 'Halden & Oat — Neighborhood Coffee',
    category: 'E‑commerce · 2025',
    blurb: "A single-origin roaster's first real storefront: a bean subscription, wholesale orders, and a cafe menu — all on one quiet site.",
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&q=80&auto=format&fit=crop',
    wide: true,
  },
  {
    title: 'Bexley & Co.',
    category: 'Law · 2024',
    blurb: 'An estate-planning firm that wanted to feel approachable without feeling casual. A type-led brand refresh and a seven-page site.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80&auto=format&fit=crop',
    wide: false,
  },
  {
    title: 'Meridian Supper Club',
    category: 'Restaurant · 2025',
    blurb: 'A farm-driven supper club with a 20-seat dining room. Online reservations, menus that change weekly, and a slow-email newsletter.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80&auto=format&fit=crop',
    wide: false,
  },
  {
    title: 'Kestrel Joinery',
    category: 'Trade · 2024',
    blurb: 'A custom cabinet shop that was losing leads to a decade-old site. A new portfolio, an honest quote flow, and double the bookings in ninety days.',
    image: 'https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=1200&q=80&auto=format&fit=crop',
    wide: false,
  },
  {
    title: 'The Alder Inn',
    category: 'Hospitality · 2023',
    blurb: "A nine-room boutique inn. A booking system that doesn't feel like a booking system, and a journal their guests actually read.",
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1200&q=80&auto=format&fit=crop',
    wide: false,
  },
  {
    title: 'North Field Clinic',
    category: 'Healthcare · 2024',
    blurb: 'A family practice in the Midwest. Online intake forms, insurance transparency, and a site a 70-year-old can navigate on a Tuesday.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80&auto=format&fit=crop',
    wide: false,
  },
];

const services = [
  {
    num: '01',
    title: 'Design',
    desc: "Brand-aware visual design, typography, and layout. Wireframes and full-fidelity mockups before a single line of code. Your brand, sharpened — not flattened.",
  },
  {
    num: '02',
    title: 'Development',
    desc: 'Hand-built on a clean, modern stack. Fast to load, accessible, CMS-friendly, and easy to update. No bloat, no heavy page-builder tax.',
  },
  {
    num: '03',
    title: 'Hosting & Care',
    desc: 'I host every site I build. Daily backups, SSL, monitoring, small content edits — a flat monthly fee and a phone number that reaches a human.',
  },
];

const testimonials = [
  {
    quote: "Adam is the first designer I've hired who asked about our P&L before he asked about our colors. The site he built brought us three new wholesale accounts in the first month.",
    name: 'Marisol Haaland',
    role: 'Founder · Halden & Oat',
    initial: 'M',
  },
  {
    quote: "We've worked with three agencies over the years. Adam did in six weeks what the last one couldn't do in six months — and he's the only one still answering emails.",
    name: 'Derek Okonkwo',
    role: 'Managing Partner · Bexley & Co.',
    initial: 'D',
  },
  {
    quote: 'He gets it. He respects the craft we put into the food, and he put that same care into our site. Our reservation page converts 40% better than the platform we were on.',
    name: 'Elena Vasquez',
    role: 'Chef & Owner · Meridian Supper Club',
    initial: 'E',
  },
];

const stats = [
  { num: '60+', label: 'Sites shipped' },
  { num: '9 yrs', label: 'Independent practice' },
  { num: '98', label: 'Avg. Lighthouse score' },
  { num: '100%', label: 'Clients still hosted w/ me' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <header className={`${styles.hero} container`}>
        <div className={styles.heroMeta}>
          <span className="pill">
            <span className="pulse"></span> Accepting 2 new projects for Q3
          </span>
          <span className="eyebrow">Est. 2017 · Hosted &amp; cared for in-house</span>
        </div>

        <h1 className={`display ${styles.heroDisplay}`}>
          Websites for<br />businesses that<br /><em>mean business.</em>
        </h1>

        <div className={styles.heroSub}>
          <p className="lead">
            I&apos;m Adam — an independent designer &amp; developer. I design, build, and host websites
            for small and mid-sized businesses who want a site that looks considered,
            loads fast, and quietly pays for itself.
          </p>
          <div className={styles.heroCta}>
            <Link className="btn btn-primary" href="/contact">
              Start a project
              <ArrowIcon />
            </Link>
            <Link className="btn btn-ghost" href="/work">
              See the work
            </Link>
          </div>
        </div>
      </header>

      {/* Marquee */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...Array(4)].map((_, i) => (
            <span key={i}>Design</span>
          ))}
          {[...Array(4)].map((_, i) => (
            <span key={`dev-${i}`}>Development</span>
          ))}
          {[...Array(4)].map((_, i) => (
            <span key={`host-${i}`}>Hosting</span>
          ))}
          {[...Array(4)].map((_, i) => (
            <span key={`care-${i}`}>Care</span>
          ))}
        </div>
      </div>

      {/* Selected Work */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">01 — Selected Work</span>
            <div>
              <h2>
                A small, considered roster<br />
                <span className="serif-italic">of local businesses I&apos;m proud of.</span>
              </h2>
              <p className="lead" style={{ marginTop: '24px' }}>
                Six recent builds. Each one designed, developed, and hosted end-to-end — so the site that launches is the site that keeps working a year later.
              </p>
            </div>
          </div>

          <ScrollReveal className={styles.workGrid}>
            {workItems.map((item, index) => (
              <Link
                href="/work"
                key={index}
                className={`${styles.workItem} ${item.wide ? styles.workItemWide : ''}`}
              >
                <div className={`imgframe ${item.wide ? styles.imgframeWide : styles.imgframe}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={item.wide ? 1600 : 1200}
                    height={item.wide ? 700 : 900}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <div className={styles.workMeta}>
                  <h3 className={styles.workTitle}>{item.title}</h3>
                  <span className={styles.workCat}>{item.category}</span>
                </div>
                <p className={styles.workBlurb}>{item.blurb}</p>
              </Link>
            ))}
          </ScrollReveal>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '64px' }}>
            <Link className="btn btn-ghost" href="/work">
              View all case studies
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">02 — What I Do</span>
            <div>
              <h2>
                Design, development, and hosting —<br />
                <span className="serif-italic">from one person who actually picks up the phone.</span>
              </h2>
            </div>
          </div>

          <ScrollReveal className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.service}>
                <span className={styles.serviceNum}>{service.num}</span>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <Link
                  className="eyebrow"
                  href="/services"
                  style={{ marginTop: 'auto', color: 'var(--accent)' }}
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ padding: 'clamp(48px, 6vw, 80px) 0' }}>
        <div className="container">
          <div className={styles.stats}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.stat}>
                <div className={styles.statNum}>{stat.num}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">03 — Testimonials</span>
            <div>
              <h2>
                What clients say<br />
                <span className="serif-italic">a year or two in.</span>
              </h2>
            </div>
          </div>

          <div className={styles.testimonials}>
            <div className={styles.testiGrid}>
              {testimonials.map((testi, index) => (
                <div key={index} className={styles.testi}>
                  <q>{testi.quote}</q>
                  <div className={styles.testiAuthor}>
                    <span className={styles.avatar}>{testi.initial}</span>
                    <div>
                      <div className={styles.testiName}>{testi.name}</div>
                      <div className={styles.testiRole}>{testi.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBlock}>
        <div className="container">
          <h2 className="display">
            Let&apos;s make<br />
            <span className="serif-italic">something good.</span>
          </h2>
          <p className="lead" style={{ margin: '0 auto 40px' }}>
            Project inquiries, coffee chats, and the occasional rescue job. All welcome.
          </p>
          <Link className="btn btn-primary" href="/contact">
            Start a project
            <ArrowIcon />
          </Link>
        </div>
      </section>
    </>
  );
}
