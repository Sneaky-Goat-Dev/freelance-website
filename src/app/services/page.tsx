'use client';

import { useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import ArrowIcon from '@/components/ArrowIcon';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './services.module.css';

const services = [
  {
    num: '01',
    title: 'Design',
    icon: '◐',
    lead: "Clean, considered visual design shaped around your brand and your customers.",
    items: [
      'Visual direction & typography',
      'Content structure & hierarchy',
      'Mobile-first responsive layouts',
    ],
  },
  {
    num: '02',
    title: 'Development',
    icon: '⌘',
    lead: 'Hand-built on a modern stack. Fast, accessible, and easy for you to update.',
    items: [
      'Built with Next.js & Tailwind',
      'SEO & performance optimized',
      'CMS for easy content updates',
    ],
  },
  {
    num: '03',
    title: 'Hosting & Care',
    icon: '◉',
    lead: "Your site lives on infrastructure I manage. I'm the one you email when something needs fixing.",
    items: [
      'Global CDN & SSL included',
      'Daily backups & monitoring',
      'Ongoing support & updates',
    ],
  },
];

const timeline = [
  { day: 'Day 1', title: 'Kickoff', desc: 'Discovery call, scope alignment, and I get to work.' },
  { day: 'Day 1-2', title: 'Design', desc: 'Visual direction, layouts, and content structure.' },
  { day: 'Day 2-4', title: 'Build', desc: 'Development and staging preview for your review.' },
  { day: 'Day 5', title: 'Launch', desc: 'Final polish, testing, and we go live.' },
  { day: 'Ongoing', title: 'Care', desc: 'Hosting, support, and updates included.' },
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
    a: "Yes. I host every site I build because that's how I make sure it still works a year from now. If you need to host elsewhere, I can recommend another builder.",
  },
  {
    q: 'What happens if I want to leave?',
    a: "Your site is yours. I hand over a clean codebase, your CMS, your domain, and your content. No proprietary lock-in, no ransom. You'll be up and running somewhere else within a week.",
  },
  {
    q: 'How long does a project take?',
    a: "Five days for a standard site. I work fast and focused. Larger or more complex projects may take longer—I'll scope it honestly upfront.",
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

  if (timezone.includes('Johannesburg') || locale.includes('za') || locale === 'en-ZA') {
    return 'ZAR';
  }
  if (timezone.includes('London') || locale === 'en-GB') {
    return 'GBP';
  }
  return 'USD';
}

function subscribeToCurrency() {
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
          Design, build, host.<br />
          <span className="serif-italic">All in one place.</span>
        </h1>
        <p className="lead" style={{ marginTop: '24px', maxWidth: '52ch' }}>
          No subcontractors. No handoff. One person from first sketch to fifth year of uptime.
        </p>
      </header>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <ScrollReveal className={`${styles.servicesGrid} reveal-stagger`}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceHeader}>
                  <span className={styles.serviceIcon}>{service.icon}</span>
                  <span className={styles.serviceNum}>{service.num}</span>
                </div>
                <h3>{service.title}</h3>
                <p className={styles.serviceLead}>{service.lead}</p>
                <ul className={styles.serviceList}>
                  {service.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timelineSection}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Process</span>
            <div>
              <h2>
                Five days,<br />
                <span className="serif-italic">start to finish.</span>
              </h2>
            </div>
          </div>

          <ScrollReveal className={styles.timeline}>
            {timeline.map((step, index) => (
              <div key={index} className={styles.timelineStep}>
                <span className={styles.timelineDay}>{step.day}</span>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Pricing</span>
            <div>
              <h2>
                One package.<br />
                <span className="serif-italic">Everything included.</span>
              </h2>
            </div>
          </div>

          <ScrollReveal className={styles.pricingSingle}>
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
                  <li>Performance optimized (100 Lighthouse)</li>
                  <li>SSL, CDN, and daily backups</li>
                  <li>Ongoing support & small edits included</li>
                  <li>5-day turnaround for standard sites</li>
                </ul>

                <div className={styles.priceFoot}>
                  Prices shown in {pricing.locale} currency. Larger projects quoted individually.
                </div>

                <Link className={`btn ${styles.priceCta}`} href="/contact">
                  Let&apos;s talk
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <div>
              <h2>
                Common questions,<br />
                <span className="serif-italic">honest answers.</span>
              </h2>
            </div>
          </div>

          <ScrollReveal className={styles.faqList}>
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
                <summary>{faq.q}</summary>
                <div className={styles.faqAnswer}>
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className="display">
            Ready to<br />
            <span className="serif-italic">get started?</span>
          </h2>
          <p className="lead" style={{ margin: '24px auto 40px', textAlign: 'center' }}>
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
