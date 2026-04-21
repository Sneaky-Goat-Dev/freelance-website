'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import ArrowIcon from '@/components/ArrowIcon';
import styles from './work.module.css';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'ecom', label: 'E‑commerce' },
  { id: 'pro', label: 'Professional services' },
  { id: 'hospitality', label: 'Hospitality' },
  { id: 'trade', label: 'Trades' },
];

const cases = [
  {
    id: 1,
    category: 'ecom',
    year: '2025',
    title: 'Halden & Oat',
    blurb: "A third-generation roaster in Minneapolis opened their first cafe and needed a site that could hold a bean subscription, wholesale accounts, and the cafe menu — without feeling like three different sites glued together.",
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1400&q=80&auto=format&fit=crop',
    results: [
      { num: '+38%', label: 'Online revenue' },
      { num: '3', label: 'New wholesale accounts / mo' },
      { num: '1.2s', label: 'Largest Contentful Paint' },
    ],
    meta: {
      scope: 'Identity touch-up, site, Shopify integration, subscriptions',
      timeline: '8 weeks',
      stack: 'Astro · Shopify Hydrogen · Sanity',
      hosting: 'Managed by Adam',
    },
  },
  {
    id: 2,
    category: 'pro',
    year: '2024',
    title: 'Bexley & Co.',
    blurb: 'A three-attorney estate planning firm that wanted to feel approachable without losing the gravitas. We simplified the brand, wrote every page of copy together, and built a quiet consultation-request flow that respected how sensitive the topic is.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&q=80&auto=format&fit=crop',
    results: [
      { num: '2.4×', label: 'Consults booked / mo' },
      { num: '7', label: 'Pages, tightly edited' },
      { num: '100', label: 'Lighthouse A11y' },
    ],
    meta: {
      scope: 'Brand refresh, site, intake form, on‑page SEO',
      timeline: '6 weeks',
      stack: 'Eleventy · Netlify Forms',
      hosting: 'Managed by Adam',
    },
  },
  {
    id: 3,
    category: 'hospitality',
    year: '2025',
    title: 'Meridian Supper Club',
    blurb: "A 20-seat, farm-driven supper club with menus that change every Thursday. The site had to be quick to update, gorgeous on a phone held over a table, and tie into their reservation platform without looking like it.",
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&q=80&auto=format&fit=crop',
    results: [
      { num: '+40%', label: 'Reservation conversion' },
      { num: '3,400', label: 'Newsletter subscribers' },
      { num: '99', label: 'Lighthouse Performance' },
    ],
    meta: {
      scope: 'Identity, site, menu CMS, newsletter, Resy embed',
      timeline: '5 weeks',
      stack: 'Next.js · Sanity · Buttondown',
      hosting: 'Managed by Adam',
    },
  },
  {
    id: 4,
    category: 'trade',
    year: '2024',
    title: 'Kestrel Joinery',
    blurb: "A custom cabinet shop with a decade-old site that was quietly losing them work. We rebuilt their portfolio around the actual photos they already had, designed a quote flow that matches how they really estimate, and stripped away everything else.",
    image: 'https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=1400&q=80&auto=format&fit=crop',
    results: [
      { num: '2×', label: 'Bookings in 90 days' },
      { num: '$18k', label: 'First commission from site' },
      { num: '0', label: 'Plugins. Seriously.' },
    ],
    meta: {
      scope: 'Site, portfolio CMS, quote request flow, photography',
      timeline: '7 weeks',
      stack: 'Eleventy · Cloudinary',
      hosting: 'Managed by Adam',
    },
  },
  {
    id: 5,
    category: 'hospitality',
    year: '2023',
    title: 'The Alder Inn',
    blurb: "Nine rooms in the Hudson Valley. The innkeepers were losing revenue to OTA fees and wanted direct bookings to feel as good as Airbnb — but better. We built a booking experience that looks like the inn itself feels.",
    image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1400&q=80&auto=format&fit=crop',
    results: [
      { num: '+62%', label: 'Direct bookings' },
      { num: '–$14k', label: 'Annual OTA fees saved' },
      { num: '4.9', label: 'Avg. guest review' },
    ],
    meta: {
      scope: 'Site, booking engine (ThinkReservations), journal',
      timeline: '9 weeks',
      stack: 'Astro · ThinkReservations API · Sanity',
      hosting: 'Managed by Adam',
    },
  },
  {
    id: 6,
    category: 'pro',
    year: '2024',
    title: 'North Field Clinic',
    blurb: "A family practice serving three counties in rural Ohio. The brief: a site their oldest patient can use on a Tuesday morning, with insurance transparency their competitors refuse to offer. We obsessed over copy, contrast, and tap targets.",
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1400&q=80&auto=format&fit=crop',
    results: [
      { num: '–55%', label: 'Phone calls for basic info' },
      { num: 'AAA', label: 'WCAG contrast' },
      { num: '14pt', label: 'Minimum body size' },
    ],
    meta: {
      scope: 'Site, intake forms, insurance pages, accessibility audit',
      timeline: '6 weeks',
      stack: 'Eleventy · Formspree',
      hosting: 'Managed by Adam',
    },
  },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCases = cases.filter(
    (c) => activeFilter === 'all' || c.category === activeFilter
  );

  return (
    <>
      <header className={`${styles.pageHead} container`}>
        <span className="eyebrow">Work / 2023 – 2026</span>
        <h1 className="display" style={{ marginTop: '16px' }}>
          Six stories, <span className="serif-italic">six businesses.</span>
        </h1>
        <p className="lead">
          Every project below was designed, built, and is still hosted by me personally. Pick one to see how it came together — the constraints, the decisions, the numbers.
        </p>

        <div className={styles.filters}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`${styles.chip} ${activeFilter === filter.id ? styles.chipOn : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </header>

      <main className="container">
        {filteredCases.map((caseItem, index) => (
          <ScrollReveal key={caseItem.id}>
            <article className={styles.case}>
              <div className={styles.caseMedia}>
                <div className="imgframe" style={{ aspectRatio: '4/5' }}>
                  <Image
                    src={caseItem.image}
                    alt={caseItem.title}
                    width={1400}
                    height={1750}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
              </div>
              <div>
                <span className={styles.caseNum}>Case {String(index + 1).padStart(2, '0')} · {caseItem.year}</span>
                <h2>{caseItem.title}</h2>
                <p className={styles.caseBlurb}>{caseItem.blurb}</p>

                <div className={styles.caseResults}>
                  {caseItem.results.map((result, i) => (
                    <div key={i}>
                      <div className={styles.resultNum}>{result.num}</div>
                      <div className={styles.resultLabel}>{result.label}</div>
                    </div>
                  ))}
                </div>

                <dl className={styles.caseMeta}>
                  <div>
                    <dt>Scope</dt>
                    <dd>{caseItem.meta.scope}</dd>
                  </div>
                  <div>
                    <dt>Timeline</dt>
                    <dd>{caseItem.meta.timeline}</dd>
                  </div>
                  <div>
                    <dt>Stack</dt>
                    <dd>{caseItem.meta.stack}</dd>
                  </div>
                  <div>
                    <dt>Hosting</dt>
                    <dd>{caseItem.meta.hosting}</dd>
                  </div>
                </dl>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </main>

      <section className="section" style={{ textAlign: 'center', padding: '120px 0' }}>
        <div className="container">
          <h2 className="display">
            Yours could be <span className="serif-italic">case 07.</span>
          </h2>
          <p className="lead" style={{ margin: '24px auto 40px' }}>
            I take two new projects a quarter. There&apos;s usually room.
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
