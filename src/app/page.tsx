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
};

const secondWork = {
  title: 'Relay',
  category: 'SaaS · 2025',
  blurb: 'AI-powered customer support automation. A landing page built for clarity and conversion.',
  image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80&auto=format&fit=crop',
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
    desc: 'From kickoff to launch in one focused week. Larger projects scoped accordingly.',
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
            Websites for businesses that<br /><em>mean business.</em>
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
          <div className={styles.heroShowcase}>
            <a
              href="https://autoshed-bmw.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.browserMockup} float-animation`}
            >
              <div className={styles.browserChrome}>
                <div className={styles.browserDots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className={styles.browserAddress}>
                  <span>autoshed-bmw.vercel.app</span>
                </div>
              </div>
              <div className={styles.browserContent}>
                <Image
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80&auto=format&fit=crop"
                  alt="The Auto Shed - Latest Project"
                  width={800}
                  height={500}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <div className={styles.browserLabel}>
                <span className={styles.browserLabelText}>Latest project</span>
                <span className={styles.browserLabelTitle}>The Auto Shed</span>
              </div>
            </a>

            <div className={styles.heroExperience}>
              <span className={styles.heroExpNumber}>8</span>
              <span className={styles.heroExpLabel}>Years building for the web</span>
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
              <h2>Recent projects</h2>
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
                <span className={styles.featuredLink}>
                  View project <ArrowIcon />
                </span>
              </div>
            </a>
          </ScrollReveal>

          <ScrollReveal className={styles.secondWork}>
            <a
              href={secondWork.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.featuredWork}
            >
              <div className={styles.featuredImage}>
                <div className="imgframe" style={{ aspectRatio: '16/10' }}>
                  <Image
                    src={secondWork.image}
                    alt={secondWork.title}
                    width={1600}
                    height={1000}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
              </div>
              <div className={styles.featuredContent}>
                <span className={styles.featuredCat}>{secondWork.category}</span>
                <h3 className={styles.featuredTitle}>{secondWork.title}</h3>
                <p className={styles.featuredBlurb}>{secondWork.blurb}</p>
                <span className={styles.featuredLink}>
                  View project <ArrowIcon />
                </span>
              </div>
            </a>
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
