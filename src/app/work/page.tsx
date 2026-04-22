'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import ArrowIcon from '@/components/ArrowIcon';
import styles from './work.module.css';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'automotive', label: 'Automotive' },
  { id: 'saas', label: 'SaaS' },
];

const cases = [
  {
    id: 1,
    category: 'automotive',
    year: '2025',
    title: 'The Auto Shed',
    blurb: "A premium pre-owned vehicle dealership. Clean design that builds trust and showcases their quality inventory.",
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400&q=80&auto=format&fit=crop',
    link: 'https://autoshed-bmw.vercel.app/',
    meta: {
      scope: 'Design, development, inventory showcase',
      timeline: '5 days',
      stack: 'Next.js, Tailwind CSS, Vercel',
      hosting: 'Managed by Adam',
    },
  },
  {
    id: 2,
    category: 'saas',
    year: '2025',
    title: 'Relay',
    blurb: 'AI-powered customer support automation. A landing page built for clarity and conversion.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80&auto=format&fit=crop',
    link: 'https://userelay.ai',
    meta: {
      scope: 'Landing page, product messaging',
      timeline: '5 days',
      stack: 'Next.js, Framer Motion, Vercel',
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
        <span className="eyebrow">Work / 2025</span>
        <h1 className="display" style={{ marginTop: '16px' }}>
          Selected <span className="serif-italic">projects.</span>
        </h1>
        <p className="lead">
          Each project designed, built, and hosted by me.
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
                <a href={caseItem.link} target="_blank" rel="noopener noreferrer">
                  <div className="imgframe" style={{ aspectRatio: '4/5' }}>
                    <Image
                      src={caseItem.image}
                      alt={caseItem.title}
                      width={1400}
                      height={1750}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                  </div>
                </a>
              </div>
              <div>
                <span className={styles.caseNum}>Case {String(index + 1).padStart(2, '0')} · {caseItem.year}</span>
                <h2>{caseItem.title}</h2>
                <p className={styles.caseBlurb}>{caseItem.blurb}</p>

                {caseItem.link !== '#' && (
                  <a
                    href={caseItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                    style={{ marginBottom: '24px' }}
                  >
                    Visit site
                    <ArrowIcon />
                  </a>
                )}

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
            Yours could be <span className="serif-italic">next.</span>
          </h2>
          <p className="lead" style={{ margin: '24px auto 40px' }}>
            I take on a handful of projects each quarter. Let&apos;s talk about yours.
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
