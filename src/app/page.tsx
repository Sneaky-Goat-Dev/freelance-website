import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import ArrowIcon from '@/components/ArrowIcon';
import styles from './home.module.css';

const workItems = [
  {
    title: 'The Auto Shed',
    category: 'Automotive · 2025',
    blurb: "A premium pre-owned vehicle dealership. Clean design that builds trust and showcases quality inventory.",
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80&auto=format&fit=crop',
    link: 'https://autoshed-bmw.vercel.app/',
  },
  {
    title: 'Relay',
    category: 'SaaS · 2025',
    blurb: 'AI-powered customer support automation. A landing page built for clarity and conversion.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80&auto=format&fit=crop',
    link: 'https://userelay.ai',
  },
];

const services = [
  {
    num: '01',
    title: 'Design',
    desc: "Visual design, typography, and layout shaped around your brand and your customers.",
  },
  {
    num: '02',
    title: 'Development',
    desc: 'Hand-built on a modern stack. Fast, accessible, and easy to update.',
  },
  {
    num: '03',
    title: 'Hosting & Care',
    desc: 'I host every site I build. Backups, SSL, monitoring, and ongoing support included.',
  },
];

const stats = [
  { num: 'Fast', label: '5-day turnaround' },
  { num: 'Reliable', label: 'Built to last' },
  { num: 'Direct', label: 'You talk to me' },
  { num: 'Ongoing', label: 'Hosting included' },
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
            I&apos;m Adam, an independent designer and developer. I design, build, and host websites
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
            <span className="eyebrow">01 / Selected Work</span>
            <div>
              <h2>
                Recent projects<br />
                <span className="serif-italic">I&apos;m proud of.</span>
              </h2>
              <p className="lead" style={{ marginTop: '24px' }}>
                Designed, developed, and hosted end-to-end.
              </p>
            </div>
          </div>

          <ScrollReveal className={styles.workGridTwo}>
            {workItems.map((item, index) => (
              <a
                href={item.link}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.workItem}
              >
                <div className={`imgframe ${styles.imgframe}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1200}
                    height={800}
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
              View case studies
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">02 / What I Do</span>
            <div>
              <h2>
                Design, development, and hosting<br />
                <span className="serif-italic">from one person.</span>
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

      {/* CTA */}
      <section className={styles.ctaBlock}>
        <div className="container">
          <h2 className="display">
            Let&apos;s make<br />
            <span className="serif-italic">something good.</span>
          </h2>
          <p className="lead" style={{ margin: '0 auto 40px' }}>
            Ready to discuss your project? Get in touch.
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
