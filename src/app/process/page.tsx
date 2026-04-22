import Link from 'next/link';
import ArrowIcon from '@/components/ArrowIcon';
import styles from './process.module.css';

const phases = [
  {
    num: '01',
    duration: 'Day 1',
    title: 'Kickoff',
    desc: "A quick call to understand your business and what you need. We align on scope and I get to work.",
    deliverables: [
      'Discovery call',
      'Scope and pricing confirmed',
    ],
    left: true,
  },
  {
    num: '02',
    duration: 'Day 1-2',
    title: 'Design',
    desc: "I design the site based on your requirements. Visual direction, layout, and content structure.",
    deliverables: [
      'Visual direction',
      'Page layouts',
    ],
    left: false,
  },
  {
    num: '03',
    duration: 'Day 2-4',
    title: 'Build',
    desc: "I build the site and share a staging link. You can review it on any device and request changes.",
    deliverables: [
      'Working site on staging',
      'CMS setup',
    ],
    left: true,
  },
  {
    num: '04',
    duration: 'Day 5',
    title: 'Launch',
    desc: "Final polish, testing, and we go live. Your site is ready.",
    deliverables: [
      'Performance optimization',
      'Live deployment',
    ],
    left: false,
  },
  {
    num: '05',
    duration: 'Ongoing',
    title: 'Care',
    desc: "Your site lives on infrastructure I manage. Hosting, backups, monitoring, and support included.",
    deliverables: [
      'Managed hosting',
      'Ongoing support',
    ],
    left: true,
  },
];

const principles = [
  {
    num: 'P.01',
    title: 'Fast is a feature.',
    desc: "A slow site loses customers. Performance is a priority, not an afterthought.",
  },
  {
    num: 'P.02',
    title: 'Copy matters.',
    desc: "The words on your site are as important as the design. Clear messaging converts.",
  },
  {
    num: 'P.03',
    title: 'Timeless over trendy.',
    desc: "Clean, considered design that ages well. No gimmicks.",
  },
  {
    num: 'P.04',
    title: 'You own your site.',
    desc: "No proprietary page builders. No lock-in. Your code is yours.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <header className={`${styles.pageHead} container`}>
        <span className="eyebrow">Process</span>
        <h1 className="display" style={{ marginTop: '16px' }}>
          Five days,<br />
          <span className="serif-italic">start to finish.</span>
        </h1>
        <p className="lead" style={{ marginTop: '24px' }}>
          A straightforward process. No endless meetings, no scope creep. Here&apos;s how it works.
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
            Ready to<br />
            <span className="serif-italic">get started?</span>
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
