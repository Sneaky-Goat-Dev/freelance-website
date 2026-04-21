import Link from 'next/link';
import ArrowIcon from '@/components/ArrowIcon';
import styles from './process.module.css';

const phases = [
  {
    num: '01',
    duration: 'Week 0 · Before anything',
    title: 'Listening',
    desc: "A 45-minute call. No slides, no proposal template. I ask about the business: how you make money, who you compete with, what a good year looks like. If we're not a fit, I'll tell you before you sign anything.",
    deliverables: [
      'Discovery call & written recap',
      'Honest fit check',
      'Scope + fixed fee in writing',
    ],
    left: true,
  },
  {
    num: '02',
    duration: 'Week 1',
    title: 'Strategy & structure',
    desc: "We sit down for a two-hour session — usually over Zoom, sometimes in person if you're nearby. We decide what the site is for, who it's for, and what the three most important pages are. Everything after this flows from that document.",
    deliverables: [
      'Audience & goals brief',
      'Sitemap & page priorities',
      'Content inventory',
    ],
    left: false,
  },
  {
    num: '03',
    duration: 'Week 2–3',
    title: 'Design',
    desc: "I design the home page and one representative inner page first. We review, refine, refine again. Only when those two feel right do I design the rest — otherwise we'd be correcting the same mistake seven times.",
    deliverables: [
      'Art direction & type studies',
      'Two rounds of page mockups',
      'Copy drafted in parallel',
    ],
    left: true,
  },
  {
    num: '04',
    duration: 'Week 4–5',
    title: 'Build',
    desc: "Head down in code. I send a staging link on day three and update it daily from there. You can poke at it on your phone, leave comments, change your mind. That's the point.",
    deliverables: [
      'Hand-built front-end',
      'CMS setup & training',
      'Integrations wired in',
    ],
    left: false,
  },
  {
    num: '05',
    duration: 'Week 6',
    title: 'Polish & launch',
    desc: "The week I earn my fee. Real-device testing on six phones. Accessibility audit. Page-speed tuning. Redirects from the old site. DNS cutover at a quiet hour on a weekday — never Friday.",
    deliverables: [
      'A11y + performance QA',
      'Analytics & search console',
      'Launch-day monitoring',
    ],
    left: true,
  },
  {
    num: '06',
    duration: 'Forever after',
    title: 'Care',
    desc: "Your site lives on infrastructure I run. I monitor it, back it up, patch it, and answer your emails within a day. Once a year we sit down and decide what the next chapter looks like.",
    deliverables: [
      'Managed hosting & monitoring',
      'Monthly uptime & perf report',
      'Annual strategy review',
    ],
    left: false,
  },
];

const principles = [
  {
    num: 'P.01',
    title: 'Fast is a feature.',
    desc: "A site that takes three seconds to load is a site that's losing you money. Performance isn't an afterthought — it's the first decision.",
  },
  {
    num: 'P.02',
    title: 'Copy is design.',
    desc: "The words on a button matter more than the shape of it. I write before I draw, and I'll push back on weak copy even when it's not technically in scope.",
  },
  {
    num: 'P.03',
    title: 'Taste ages better than trend.',
    desc: "Glassmorphism, parallax, whatever the next one is — I'll politely decline. Your grandkids should be able to read this site.",
  },
  {
    num: 'P.04',
    title: 'Own your stack.',
    desc: "No proprietary page builders. No lock-in. If you ever want to leave me, I'll help you pack your boxes myself.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <header className={`${styles.pageHead} container`}>
        <span className="eyebrow">Process</span>
        <h1 className="display" style={{ marginTop: '16px' }}>
          Slow on purpose,<br />
          <span className="serif-italic">fast where it counts.</span>
        </h1>
        <p className="lead" style={{ marginTop: '24px' }}>
          Six weeks, six phases. No sprints, no mood boards that go nowhere, no pixel-pushing the night before launch. Here&apos;s exactly how it goes.
        </p>
      </header>

      <main className="container">
        <div className={styles.timeline}>
          {phases.map((phase, index) => (
            <section key={index} className={styles.phase}>
              {phase.left ? (
                <>
                  <div className={styles.phaseLeft}>
                    <span className={styles.phaseDuration}>{phase.duration}</span>
                    <span className={styles.phaseNum}>{phase.num}<em>.</em></span>
                    <h3>{phase.title}</h3>
                    <p>{phase.desc}</p>
                    <ul>
                      {phase.deliverables.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.dot}><span></span></div>
                  <div className={styles.phaseRight}></div>
                </>
              ) : (
                <>
                  <div className={styles.phaseLeft}>
                    <span className={styles.phaseDuration}>{phase.duration}</span>
                  </div>
                  <div className={styles.dot}><span></span></div>
                  <div className={styles.phaseRight}>
                    <span className={styles.phaseNum}>{phase.num}<em>.</em></span>
                    <h3>{phase.title}</h3>
                    <p>{phase.desc}</p>
                    <ul>
                      {phase.deliverables.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </section>
          ))}
        </div>
      </main>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Principles</span>
            <div>
              <h2>
                Four beliefs<br />
                <span className="serif-italic">I won&apos;t quietly abandon.</span>
              </h2>
            </div>
          </div>

          <div className={styles.principleGrid}>
            {principles.map((principle, index) => (
              <div key={index} className={styles.principle}>
                <span className={styles.principleNum}>{principle.num}</span>
                <h3>{principle.title}</h3>
                <p>{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center', padding: '120px 0' }}>
        <div className="container">
          <h2 className="display">
            Shall we<br />
            <span className="serif-italic">begin at week zero?</span>
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
