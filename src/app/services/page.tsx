'use client';

import { useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import ArrowIcon from '@/components/ArrowIcon';
import styles from './services.module.css';

const pillars = [
  {
    num: '01',
    title: 'Design',
    lead: "You tell me what you need, I design it. Clean, considered, and built to last. No endless revisions — just good work, done fast.",
    deliverables: [
      {
        letter: 'A',
        title: 'Visual direction',
        desc: "Typography, color, layout — shaped around your brand and what works for your customers.",
        tag: 'Day 1–2',
      },
      {
        letter: 'B',
        title: 'Content structure',
        desc: 'Every page earns its place. Clear hierarchy, sharp copy, nothing wasted.',
        tag: 'Day 1–2',
      },
    ],
  },
  {
    num: '02',
    title: 'Development',
    lead: 'Hand-built on a modern stack. Fast, accessible, and easy for you to update. No bloat, no page-builder nonsense.',
    deliverables: [
      {
        letter: 'A',
        title: 'Clean code',
        desc: 'Built with Next.js. Fast loading, works on every device, optimized for search.',
        tag: 'Day 2–4',
      },
      {
        letter: 'B',
        title: 'Simple editing',
        desc: "A CMS you'll actually use. Update text and images yourself, no developer needed.",
        tag: 'Day 3–5',
      },
    ],
  },
  {
    num: '03',
    title: 'Hosting & Care',
    lead: "Most agencies disappear after launch. I don't. Your site lives on infrastructure I manage, and I'm the one you email when something needs fixing.",
    deliverables: [
      {
        letter: 'A',
        title: 'Managed hosting',
        desc: 'Global CDN, SSL, daily backups, uptime monitoring. One flat monthly fee.',
        tag: 'Ongoing',
      },
      {
        letter: 'B',
        title: 'Content updates',
        desc: 'Small edits included. Bigger changes turned around in a day or two.',
        tag: 'Ongoing',
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
    a: 'Five days. I work fast and focused. You get a complete, polished site ready to launch by the end of the week.',
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

          <div className={styles.pricingSingle}>
            <div className={styles.priceSingle}>
              <div className={styles.priceLeft}>
                <span className={styles.priceTag}>Complete Package</span>
                <h3>Design, Build & Host</h3>

                <div className={styles.priceAmt}>
                  {pricing.symbol}{pricing.oneOff}<small>once-off</small>
                </div>
                <div className={styles.priceMonthly}>
                  + {pricing.symbol}{pricing.monthly}/mo
                  <span>for hosting & maintenance</span>
                </div>

                <div className={styles.currencyToggle}>
                  <span className="eyebrow">Currency:</span>
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
              </div>

              <div className={styles.priceRight}>
                <ul>
                  <li>Custom design tailored to your brand</li>
                  <li>Fully responsive development</li>
                  <li>CMS for easy content updates</li>
                  <li>Performance optimized</li>
                  <li>SSL, CDN, and daily backups</li>
                  <li>Ongoing support & small edits included</li>
                  <li>5-day turnaround</li>
                </ul>

                <div className={styles.priceFoot}>
                  Prices shown in {pricing.locale} currency. Working with businesses in the US, UK, and South Africa.
                </div>

                <Link className={`btn ${styles.priceCta}`} href="/contact">
                  Let&apos;s talk
                  <ArrowIcon />
                </Link>
              </div>
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
