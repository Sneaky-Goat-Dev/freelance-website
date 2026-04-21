'use client';

import { useState, useSyncExternalStore } from 'react';
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
        desc: 'Next.js or Astro depending on what the site needs. CDN-delivered. Typical largest-contentful-paint under 1.5s on a 3G phone.',
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
        desc: 'Shopify, Stripe, booking systems, Formspree, Mailchimp, Calendly — whatever your business already runs on.',
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
    lead: "This is where most agencies disappear. I don't. Your site lives on infrastructure I run, and I'm the person you email when something needs fixing.",
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
        desc: 'Small edits included. New page, new photos, a rewritten About — usually turned around in a day or two.',
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

type Currency = 'ZAR' | 'USD' | 'GBP';

interface PricingData {
  symbol: string;
  oneOff: string;
  monthly: string;
  locale: string;
}

const pricingByCurrency: Record<Currency, PricingData> = {
  ZAR: { symbol: 'R', oneOff: '5,000', monthly: '500', locale: 'South Africa' },
  USD: { symbol: '$', oneOff: '275', monthly: '28', locale: 'United States' },
  GBP: { symbol: '£', oneOff: '220', monthly: '22', locale: 'United Kingdom' },
};

const faqs = [
  {
    q: 'Do I have to host with you?',
    a: "Yes. It's a package, not a menu. I host every site I build because that's how I make sure it still works a year from now — and because the integrated pricing saves you hassle. If you absolutely need to host elsewhere, I can recommend another builder.",
  },
  {
    q: 'What happens if I want to leave?',
    a: "Your site is yours. I hand over a clean codebase, your CMS, your domain, and your content. No proprietary lock-in, no ransom. You'll be up and running somewhere else within a week.",
  },
  {
    q: 'How long does a project take?',
    a: 'Four to eight weeks, depending on scope and complexity. Most projects land around six weeks from kickoff to launch.',
  },
  {
    q: 'What if I already have a designer?',
    a: 'Happy to collaborate. I can build out designs from an existing brand team. Pricing adjusts accordingly.',
  },
  {
    q: 'Where do you work?',
    a: 'I work with businesses in the United States, United Kingdom, and South Africa. Most projects run remotely with video calls for kickoff and check-ins.',
  },
];

function detectCurrency(): Currency {
  if (typeof window === 'undefined') return 'USD';
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const locale = navigator.language;

  // Check for South Africa
  if (timezone.includes('Johannesburg') || locale.includes('za') || locale === 'en-ZA') {
    return 'ZAR';
  }
  // Check for UK
  if (timezone.includes('London') || locale === 'en-GB') {
    return 'GBP';
  }
  // Default to USD
  return 'USD';
}

function subscribeToCurrency() {
  // Currency doesn't change, but we need a valid subscription
  return () => {};
}

function getCurrencySnapshot(): Currency {
  return detectCurrency();
}

function getCurrencyServerSnapshot(): Currency {
  return 'USD';
}

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const detectedCurrency = useSyncExternalStore(subscribeToCurrency, getCurrencySnapshot, getCurrencyServerSnapshot);
  const [currency, setCurrency] = useState<Currency>(detectedCurrency);

  const pricing = pricingByCurrency[currency];

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
                Simple, honest pricing.<br />
                <span className="serif-italic">One package, everything included.</span>
              </h2>
              <p className="lead" style={{ marginTop: '24px' }}>
                No tiers to compare. No hidden fees. Just one straightforward package that includes everything you need.
              </p>
            </div>
          </div>

          <div className={styles.pricing} style={{ justifyContent: 'center' }}>
            <div className={`${styles.price} ${styles.priceFeature}`} style={{ maxWidth: '480px' }}>
              <span className={styles.priceTag}>Complete Package</span>
              <h3>Design, Build & Host</h3>

              <div className={styles.currencyToggle}>
                  <span className="eyebrow" style={{ marginRight: '12px' }}>Currency:</span>
                  {(['ZAR', 'USD', 'GBP'] as Currency[]).map((cur) => (
                    <button
                      key={cur}
                      onClick={() => setCurrency(cur)}
                      className={`${styles.currencyBtn} ${currency === cur ? styles.currencyBtnActive : ''}`}
                    >
                      {cur}
                    </button>
                  ))}
                </div>

              <div className={styles.priceAmt}>
                {pricing.symbol}{pricing.oneOff} <small>once-off</small>
              </div>
              <div className={styles.priceMonthly}>
                + {pricing.symbol}{pricing.monthly}/mo <span>for hosting & maintenance</span>
              </div>

              <ul>
                <li>Custom design tailored to your brand</li>
                <li>Fully responsive development</li>
                <li>CMS for easy content updates</li>
                <li>Performance optimized (98+ Lighthouse)</li>
                <li>SSL, CDN, and daily backups</li>
                <li>Ongoing support & small edits included</li>
                <li>4–6 week turnaround</li>
              </ul>

              <div className={styles.priceFoot}>
                Prices shown in {pricing.locale} currency. Working with businesses in the US, UK, and South Africa.
              </div>

              <Link
                className={`btn btn-ghost ${styles.priceCta}`}
                href="/contact"
                style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'var(--bg)' }}
              >
                Let&apos;s talk
              </Link>
            </div>
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
            <span className="serif-italic">get started?</span>
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
