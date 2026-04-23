import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import ArrowIcon from '@/components/ArrowIcon';
import styles from './home.module.css';

const featuredWork = {
  title: 'The Auto Shed',
  category: 'Automotive · 2025',
  blurb: "A premium pre-owned vehicle dealership needed a website that could match the quality of their inventory. Clean design, seamless browsing, and a focus on building trust with potential buyers.",
  image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80&auto=format&fit=crop',
  link: 'https://autoshed-bmw.vercel.app/',
  stats: [
    { num: '5', label: 'Days to launch' },
    { num: '100', label: 'Lighthouse score' },
  ],
};

const moreWork = {
  title: 'Relay',
  category: 'SaaS · 2025',
  blurb: 'AI-powered customer support automation. A landing page built for clarity and conversion.',
  image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80&auto=format&fit=crop',
  link: 'https://userelay.ai',
};

const services = [
  {
    num: '01',
    title: 'Design',
    desc: "Visual design, typography, and layout shaped around your brand and your customers.",
    icon: '◐',
  },
  {
    num: '02',
    title: 'Development',
    desc: 'Hand-built on a modern stack. Fast, accessible, and easy to update.',
    icon: '⌘',
  },
  {
    num: '03',
    title: 'Hosting & Care',
    desc: 'I host every site I build. Backups, SSL, monitoring, and ongoing support included.',
    icon: '◉',
  },
];

const promises = [
  {
    title: 'Fixed pricing',
    desc: 'Know the cost before we start. No surprise invoices.',
  },
  {
    title: '5-day delivery',
    desc: 'From kickoff to launch in one focused week.',
  },
  {
    title: 'Direct line',
    desc: 'Talk to me, not a support queue or AI chatbot.',
  },
  {
    title: 'Owned by you',
    desc: 'Your code, your content, no vendor lock-in.',
  },
];

const testimonials = [
  {
    quote: "Adam delivered exactly what we needed in less time than we expected. The site looks premium and our customers notice.",
    name: "Sarah Mitchell",
    role: "The Auto Shed",
    initial: "S",
  },
  {
    quote: "Finally, a developer who actually listens. No jargon, no upsells, just solid work delivered on time.",
    name: "James Cooper",
    role: "Relay AI",
    initial: "J",
  },
  {
    quote: "Working with Adam felt like having someone on our team. Fast responses, thoughtful suggestions, and a site we're proud of.",
    name: "Lisa Chen",
    role: "Bloom Studio",
    initial: "L",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <header className={`${styles.hero} container`}>
        <div className={styles.heroContent}>
          <div className={`${styles.heroMeta} hero-animate`}>
            <span className="pill">
              <span className="pulse"></span> Accepting new projects
            </span>
          </div>

          <h1 className={`display ${styles.heroDisplay} hero-animate-delay-1`}>
            Websites for businesses that <em>mean business.</em>
          </h1>

          <div className={`${styles.heroSub} hero-animate-delay-2`}>
            <p className="lead">
              I&apos;m Adam, an independent designer and developer based in Johannesburg. I design, build, and host websites for small businesses who want a site that looks considered, loads fast, and quietly pays for itself.
            </p>
            <div className={`${styles.heroCta} hero-animate-delay-3`}>
              <Link className="btn btn-primary" href="/contact">
                Start a project
                <ArrowIcon />
              </Link>
              <Link className="btn btn-ghost" href="/services">
                See how it works
              </Link>
            </div>
          </div>
        </div>

        <div className={`${styles.heroVisual} hero-animate-delay-4`}>
          <div className={`${styles.heroCard} float-animation`}>
            <div className={styles.heroCardInner}>
              <span className={styles.heroCardLabel}>Latest project</span>
              <span className={styles.heroCardTitle}>The Auto Shed</span>
              <span className={styles.heroCardMeta}>Launched 2025</span>
            </div>
          </div>
        </div>
      </header>

      {/* Marquee */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...Array(2)].map((_, setIndex) => (
            [...Array(8)].map((_, i) => {
              const words = ['Design', 'Development', 'Hosting'];
              return <span key={`${setIndex}-${i}`}>{words[i % 3]}</span>;
            })
          ))}
        </div>
      </div>

      {/* Featured Work */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Selected Work</span>
            <div>
              <h2>
                Recent projects<br />
                <span className="serif-italic">I&apos;m proud of.</span>
              </h2>
            </div>
          </div>

          <ScrollReveal>
            <a
              href={featuredWork.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.featuredWork}
            >
              <div className={styles.featuredImage}>
                <div className="imgframe" style={{ aspectRatio: '16/10' }}>
                  <Image
                    src={featuredWork.image}
                    alt={featuredWork.title}
                    width={1600}
                    height={1000}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    priority
                  />
                </div>
              </div>
              <div className={styles.featuredContent}>
                <span className={styles.featuredCat}>{featuredWork.category}</span>
                <h3 className={styles.featuredTitle}>{featuredWork.title}</h3>
                <p className={styles.featuredBlurb}>{featuredWork.blurb}</p>
                <div className={styles.featuredStats}>
                  {featuredWork.stats.map((stat, i) => (
                    <div key={i} className={styles.featuredStat}>
                      <span className={styles.featuredStatNum}>{stat.num}</span>
                      <span className={styles.featuredStatLabel}>{stat.label}</span>
                    </div>
                  ))}
                </div>
                <span className={styles.featuredLink}>
                  View project <ArrowIcon />
                </span>
              </div>
            </a>
          </ScrollReveal>

          <ScrollReveal className={styles.moreWork}>
            <a
              href={moreWork.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.workItem}
            >
              <div className={`imgframe ${styles.imgframe}`}>
                <Image
                  src={moreWork.image}
                  alt={moreWork.title}
                  width={800}
                  height={600}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <div className={styles.workMeta}>
                <h3 className={styles.workTitle}>{moreWork.title}</h3>
                <span className={styles.workCat}>{moreWork.category}</span>
              </div>
              <p className={styles.workBlurb}>{moreWork.blurb}</p>
            </a>
            <div className={styles.workCta}>
              <p>Each project designed, built, and hosted end-to-end by me.</p>
              <Link className="btn btn-ghost" href="/contact">
                Yours could be next
                <ArrowIcon />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What I Do</span>
            <div>
              <h2>
                Design, development, hosting<br />
                <span className="serif-italic">from one person.</span>
              </h2>
            </div>
          </div>

          <ScrollReveal className={`${styles.servicesGrid} reveal-stagger`}>
            {services.map((service, index) => (
              <div key={index} className={styles.service}>
                <span className={styles.serviceIcon}>{service.icon}</span>
                <span className={styles.serviceNum}>{service.num}</span>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </ScrollReveal>

          <div className={styles.servicesCta}>
            <Link className="btn btn-ghost" href="/services">
              See pricing &amp; details
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Promises */}
      <section className={styles.promisesSection}>
        <div className="container">
          <ScrollReveal className={`${styles.promises} reveal-stagger`}>
            {promises.map((promise, index) => (
              <div key={index} className={styles.promise}>
                <h4>{promise.title}</h4>
                <p>{promise.desc}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Kind Words</span>
            <div>
              <h2>
                What clients say<br />
                <span className="serif-italic">about working together.</span>
              </h2>
            </div>
          </div>

          <ScrollReveal className={`testimonials`}>
            <div className="testi-grid">
              {testimonials.map((testi, index) => (
                <div key={index} className="testi">
                  <q>{testi.quote}</q>
                  <div className="testi-author">
                    <div className="testi-avatar">{testi.initial}</div>
                    <div>
                      <div className="testi-name">{testi.name}</div>
                      <div className="testi-role">{testi.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBlock}>
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: 'center', marginBottom: '24px' }}>Ready?</span>
          <h2 className="display">
            Let&apos;s build<br />
            <em>something great.</em>
          </h2>
          <p className="lead" style={{ margin: '24px auto 40px', textAlign: 'center' }}>
            I take on a handful of projects each quarter. Let&apos;s talk about yours.
          </p>
          <div className={styles.ctaButtons}>
            <Link className="btn btn-primary" href="/contact">
              Start a conversation
              <ArrowIcon />
            </Link>
            <Link className="btn btn-ghost" href="/about">
              Learn about me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
