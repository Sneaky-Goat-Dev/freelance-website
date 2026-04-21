'use client';

import { useState } from 'react';
import Link from 'next/link';
import ArrowIcon from '@/components/ArrowIcon';
import styles from './services.module.css';

const pillars = [
  {
    num: '01',
    title: 'Design',
    lead: "The shape of the thing before it gets built. Research, structure, typography, art direction — decisions made on paper, not in production.",
    deliverables: [
      {
        letter: 'A',
        title: 'Brand & visual system',
        desc: "Logo refinement, type pairing, color system, and photo direction. Enough to feel distinct, restrained enough to last five years.",
        tag: 'Week 1–2',
      },
      {
        letter: 'B',
        title: 'Sitemap & content architecture',
        desc: 'Every page earns its place. I cut ruthlessly and write headings before I draw boxes.',
        tag: 'Week 1',
      },
      {
        letter: 'C',
        title: 'Wireframes & high-fidelity mockups',
        desc: 'Two rounds of flats per page, in Figma, shared live. You see the full site before I write a single line of HTML.',
        tag: 'Week 2–3',
      },
      {
        letter: 'D',
        title: 'Copywriting (collaborative)',
        desc: 'I write the first draft. You correct the voice. We land it together. Good copy is 70% of good design.',
        tag: 'Week 2–4',
      },
    ],
  },
  {
    num: '02',
    title: 'Development',
    lead: 'Hand-built sites on a clean, modern stack. No page-builder bloat, no abandoned plugins, no surprise bills. Fast, accessible, and editable by a human.',
    deliverables: [
      {
        letter: 'A',
        title: 'Static-first architecture',
        desc: 'Astro, Eleventy, or Next.js depending on what the site needs. CDN-delivered. Typical largest-contentful-paint under 1.5s on a 3G phone.',
        tag: 'Week 3–5',
      },
      {
        letter: 'B',
        title: "CMS you'll actually use",
        desc: 'Sanity or a lightweight Markdown flow. Edit pages like Google Docs. No "page builder" with 40 nested blocks.',
        tag: 'Week 4–5',
      },
      {
        letter: 'C',
        title: 'Integrations that fit',
        desc: 'Shopify, Stripe, Resy, ThinkReservations, Formspree, Mailchimp, Buttondown, Calendly — whatever your business already runs on.',
        tag: 'Week 4–6',
      },
      {
        letter: 'D',
        title: 'Accessibility & performance QA',
        desc: "WCAG AA minimum, AAA where it matters. Real-device testing. Lighthouse scores I'd show my mom.",
        tag: 'Week 5–6',
      },
    ],
  },
  {
    num: '03',
    title: 'Hosting & Care',
    lead: "This is where most agencies disappear. I don't. Your site lives on infrastructure I run, and I'm the person you email when the Wi-Fi goes down at the cafe.",
    deliverables: [
      {
        letter: 'A',
        title: 'Managed hosting',
        desc: 'Global CDN, auto-renewing SSL, 99.9% uptime, DDoS-ready. One flat monthly fee. No per-hit metering, no mystery overage.',
        tag: 'Ongoing',
      },
      {
        letter: 'B',
        title: 'Daily backups & monitoring',
        desc: "30 days of rolling backups. Uptime and performance alerts. I usually know something's wrong before you do.",
        tag: 'Ongoing',
      },
      {
        letter: 'C',
        title: 'Content updates',
        desc: 'Small edits included. New page, new photos, a rewritten About — usually turned around in a day or two, at no extra cost on Care+.',
        tag: 'Ongoing',
      },
      {
        letter: 'D',
        title: 'Annual review',
        desc: "Every year, an hour-long call. What's working, what's not, what's next. A site is a living thing.",
        tag: 'Yearly',
      },
    ],
  },
];

const pricing = [
  {
    tag: 'Starter',
    title: 'The Refresh',
    price: '$4.8k',
    monthly: '+ $45/mo',
    features: [
      '1–3 pages, copy included',
      'Existing brand, polished',
      '2 rounds of revisions',
      '4-week turnaround',
      'Hosting & care included',
    ],
    foot: 'Best for: solo operators, single-location shops.',
    featured: false,
  },
  {
    tag: 'Most common',
    title: 'The Small Business',
    price: '$12k',
    monthly: '+ $85/mo',
    features: [
      '5–10 page custom site',
      'Brand refresh + art direction',
      'CMS for non-technical editing',
      'One primary integration (e‑commerce, booking, etc.)',
      '6–8 week turnaround',
      'Hosting & care+ included',
    ],
    foot: 'Best for: cafés, restaurants, clinics, law firms, boutique inns.',
    featured: true,
  },
  {
    tag: 'Custom',
    title: 'The Full Build',
    price: 'From $22k',
    monthly: '+ $150/mo',
    features: [
      '10+ pages, multi-audience',
      'Full identity work',
      'Complex integrations & flows',
      'On-location photography (optional)',
      '10–14 week timeline',
      'Hosting, care, priority support',
    ],
    foot: 'Best for: multi-location, multi-service, or fundraising businesses.',
    featured: false,
  },
];

const faqs = [
  {
    q: 'Do I have to host with you?',
    a: "Yes. It's a package, not a menu. I host every site I build because that's how I make sure it still works a year from now — and because the integrated pricing saves most clients a few thousand a year in agency retainer fees. If you absolutely need to host elsewhere, I can recommend another builder.",
  },
  {
    q: 'What happens if I want to leave?',
    a: "Your site is yours. I hand over a clean codebase, your CMS, your domain, and your content. No proprietary lock-in, no ransom. You'll be up and running somewhere else within a week.",
  },
  {
    q: 'How long does a project take?',
    a: 'Four to fourteen weeks, depending on scope. The Small Business package — the one most clients land on — averages seven weeks from kickoff to launch.',
  },
  {
    q: 'Do you do ongoing retainers?',
    a: 'Sort of. Every site includes Care (hosting + monitoring + backups) or Care+ (adds small content edits). I don\'t do open-ended "growth retainers" — I\'d rather you call me when you need something real.',
  },
  {
    q: 'What if I already have a designer?',
    a: 'Happy to collaborate. Roughly a quarter of my work is building out designs from an existing brand team. Pricing adjusts downward accordingly.',
  },
  {
    q: 'Where are you based?',
    a: 'United States. I work with businesses across North America and Europe. Most projects run remotely with one optional on-site day for kickoff or photography.',
  },
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <header className={`${styles.pageHead} container`}>
        <span className="eyebrow">Services</span>
        <h1 className="display" style={{ marginTop: '16px' }}>
          Three things,<br />
          <span className="serif-italic">done thoroughly.</span>
        </h1>
        <p className="lead" style={{ marginTop: '24px' }}>
          I design, build, and host every site I take on. No subcontractors. No handoff. One person, start to finish, from the first sketch to the fifth year of uptime.
        </p>
      </header>

      <main className="container">
        {pillars.map((pillar, index) => (
          <section key={index} className={styles.pillar}>
            <div className={styles.pillarHead}>
              <div className={styles.pillarNum}>
                {pillar.num}<em>.</em>
              </div>
              <h2>{pillar.title}</h2>
              <p className="lead">{pillar.lead}</p>
            </div>
            <ul className={styles.deliverables}>
              {pillar.deliverables.map((d, i) => (
                <li key={i}>
                  <span className={styles.dNum}>{d.letter}</span>
                  <div className={styles.dBody}>
                    <h4>{d.title}</h4>
                    <p>{d.desc}</p>
                  </div>
                  <span className={styles.dTag}>{d.tag}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>

      {/* Pricing */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Pricing</span>
            <div>
              <h2>
                Three honest shapes.<br />
                <span className="serif-italic">Fixed scope, fixed fee.</span>
              </h2>
              <p className="lead" style={{ marginTop: '24px' }}>
                Most small businesses need one of three things. If your project doesn&apos;t fit, we&apos;ll scope it together — transparently, in writing.
              </p>
            </div>
          </div>

          <div className={styles.pricing}>
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`${styles.price} ${plan.featured ? styles.priceFeature : ''}`}
              >
                <span className={styles.priceTag}>{plan.tag}</span>
                <h3>{plan.title}</h3>
                <div className={styles.priceAmt}>
                  {plan.price} <small>{plan.monthly}</small>
                </div>
                <ul>
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className={styles.priceFoot}>{plan.foot}</div>
                <Link
                  className={`btn btn-ghost ${styles.priceCta}`}
                  href="/contact"
                  style={plan.featured ? { borderColor: 'rgba(255,255,255,0.2)', color: 'var(--bg)' } : {}}
                >
                  Let&apos;s talk
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <div>
              <h2>
                A few things<br />
                <span className="serif-italic">people usually ask.</span>
              </h2>
            </div>
          </div>

          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <details
                key={index}
                className={styles.faq}
                open={openFaq === index}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenFaq(openFaq === index ? null : index);
                }}
              >
                <summary>
                  {faq.q}
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center', padding: '120px 0', borderTop: '1px solid var(--rule)' }}>
        <div className="container">
          <h2 className="display">
            Ready to<br />
            <span className="serif-italic">get specific?</span>
          </h2>
          <p className="lead" style={{ margin: '24px auto 40px' }}>
            Tell me about the business. I&apos;ll tell you what I&apos;d do.
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
