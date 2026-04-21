import Link from 'next/link';
import Image from 'next/image';
import ArrowIcon from '@/components/ArrowIcon';
import styles from './about.module.css';

const career = [
  {
    year: '2020 — Present',
    role: 'Independent studio',
    desc: 'Founded as a design-and-dev practice for small businesses; added managed hosting in 2021 after the third client in a row came back from a "hosting company" with a broken site and a $4,000 invoice.',
  },
  {
    year: '2017 — 2020',
    role: 'Senior Designer · Oak Ridge Studio',
    desc: 'A ten-person branding shop in the Midwest. Led web design for regional banks, universities, and one very patient orchestra. Learned that constraints make better work.',
  },
  {
    year: '2015 — 2017',
    role: 'Designer / Developer · Various',
    desc: "Agency life, then a brief stint in-house at a SaaS company. Shipped the same landing-page template thirty different ways. Learned a lot about what I don't want to do.",
  },
  {
    year: '2011 — 2015',
    role: 'BFA, Graphic Design · RISD',
    desc: 'Studied type, print, and book design. Learned HTML in the library to build a portfolio site. One thing led to another.',
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

const offHours = [
  {
    image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=900&q=80&auto=format&fit=crop',
    alt: 'Stack of well-worn books and a coffee cup.',
    caption: 'Reading · mostly nonfiction',
  },
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80&auto=format&fit=crop',
    alt: 'A hiking trail winding through mountains at sunset.',
    caption: 'Walking · long, slow, no phone',
  },
  {
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&q=80&auto=format&fit=crop',
    alt: 'Fresh-baked sourdough loaves on a cooling rack.',
    caption: 'Baking · badly, but happily',
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
            I&apos;ve been building websites for small businesses for nine years — the last six as a one-person studio operating out of a garage office with good light and a stubborn cat. I studied design, learned to code by accident, and kept doing both because I couldn&apos;t stand handing my designs to a developer who didn&apos;t care about them the way I did.
          </p>
          <p className={`lead ${styles.heroLead}`}>
            The studio stays at one person on purpose. It means every conversation you have is with the person doing the work. It means decisions happen fast. And it means when something goes wrong on a Saturday morning, there&apos;s no ticket queue between you and the fix.
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

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Off hours</span>
            <div>
              <h2>
                When I&apos;m not at the screen<br />
                <span className="serif-italic">you can find me here.</span>
              </h2>
            </div>
          </div>
          <div className={styles.offHours}>
            {offHours.map((item, index) => (
              <figure key={index}>
                <div className="imgframe" style={{ aspectRatio: '1/1' }}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={900}
                    height={900}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <figcaption>{item.caption}</figcaption>
              </figure>
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
