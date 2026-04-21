import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import ArrowIcon from '@/components/ArrowIcon';
import styles from './home.module.css';

const workItems = [
  {
    title: 'The Auto Shed — Premium Dealership',
    category: 'Automotive · 2025',
    blurb: "A premium pre-owned vehicle dealership. Sleek, trustworthy, designed to showcase their quality inventory.",
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80&auto=format&fit=crop',
    link: 'https://autoshed-bmw.vercel.app/',
    wide: true,
  },
  {
    title: 'Relay',
    category: 'SaaS · 2025',
    blurb: 'An AI-powered platform that needed a landing page as sophisticated as their product. Focused on clarity and conversion.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop',
    link: 'https://userelay.ai',
    wide: false,
  },
  {
    title: 'Blade & Throne',
    category: 'Barbershop · 2024',
    blurb: 'A modern barbershop with a clean booking flow and gallery that shows off their craft.',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200&q=80&auto=format&fit=crop',
    link: '#',
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
    quote: "Adam understood exactly what we needed. The site he built captures the premium feel of our dealership perfectly — professional, clean, and it actually brings in new customers.",
    name: 'James Mitchell',
    role: 'Owner · The Auto Shed',
    initial: 'J',
  },
  {
    quote: "Working with Adam was refreshingly straightforward. He delivered a landing page that converts better than anything we've had before. Highly recommend.",
    name: 'Sarah Chen',
    role: 'Co-founder · Relay',
    initial: 'S',
  },
  {
    quote: 'He gets it. He respects the craft we put into every cut, and he put that same care into our site. Online bookings are up 60% since launch.',
    name: 'Marcus Thompson',
    role: 'Owner · Blade & Throne',
    initial: 'M',
  },
];

const stats = [
  { num: '3', label: 'Sites shipped' },
  { num: '2 yrs', label: 'Building websites' },
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
            <span className="pulse"></span> Accepting new projects
          </span>
          <span className="eyebrow">Hosted &amp; cared for in-house</span>
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
                <span className="serif-italic">of businesses I&apos;m proud of.</span>
              </h2>
              <p className="lead" style={{ marginTop: '24px' }}>
                Recent builds. Each one designed, developed, and hosted end-to-end — so the site that launches is the site that keeps working a year later.
              </p>
            </div>
          </div>

          <ScrollReveal className={styles.workGrid}>
            {workItems.map((item, index) => (
              <a
                href={item.link}
                key={index}
                target={item.link !== '#' ? '_blank' : undefined}
                rel={item.link !== '#' ? 'noopener noreferrer' : undefined}
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
              </a>
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
                <span className="serif-italic">about working together.</span>
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
