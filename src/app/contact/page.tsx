'use client';

import { useState, FormEvent } from 'react';
import ArrowIcon from '@/components/ArrowIcon';
import styles from './contact.module.css';

const serviceOptions = [
  { id: 's-new', value: 'new-site', label: 'A new site' },
  { id: 's-rebuild', value: 'rebuild', label: 'Rebuild an existing site' },
  { id: 's-brand', value: 'brand', label: 'Brand refresh' },
  { id: 's-host', value: 'hosting', label: 'Move hosting to you' },
  { id: 's-rescue', value: 'rescue', label: 'Rescue job' },
  { id: 's-other', value: 'other', label: 'Not sure yet' },
];


export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleService = (value: string) => {
    setSelectedServices((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  return (
    <>
      <header className={`${styles.pageHead} container`}>
        <span className="eyebrow">Contact</span>
        <h1 className="display" style={{ marginTop: '16px' }}>
          Let&apos;s make<br />
          <span className="serif-italic">something good.</span>
        </h1>
        <p className="lead" style={{ marginTop: '24px' }}>
          Fill out the form or just say hi. I read every message and reply within one business day.
        </p>
      </header>

      <main className={`container ${styles.contactGrid}`}>
        <div>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" required placeholder="Pat Olafsson" />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="pat@business.com" />
              </div>

              <div className={styles.field}>
                <label htmlFor="company">Business name</label>
                <input id="company" name="company" placeholder="A supper club, a clinic, a shop…" />
              </div>

              <div className={styles.field}>
                <label>What are you looking for? (pick any)</label>
                <div className={styles.chips}>
                  {serviceOptions.map((option) => (
                    <div key={option.id}>
                      <input
                        type="checkbox"
                        id={option.id}
                        name="services"
                        value={option.value}
                        checked={selectedServices.includes(option.value)}
                        onChange={() => toggleService(option.value)}
                      />
                      <label htmlFor={option.id}>{option.label}</label>
                    </div>
                  ))}
                </div>
              </div>


              <div className={styles.field}>
                <label htmlFor="message">Tell me about the project</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="What does the business do, what's the site for, and what does a good outcome look like?"
                ></textarea>
              </div>

              <div className={styles.formFooter}>
                <p>No newsletter. No automated drip. Just a reply from me within one business day.</p>
                <button className="btn btn-primary" type="submit">
                  Send it
                  <ArrowIcon />
                </button>
              </div>
            </form>
          ) : (
            <div className={styles.success}>
              <h3>Thank you, I&apos;ve got it.</h3>
              <p>
                I&apos;ll be back in touch within one business day. If it&apos;s urgent, email me directly at{' '}
                <a href="mailto:hello@adam-berger.com" style={{ color: 'var(--accent)' }}>
                  hello@adam-berger.com
                </a>
                .
              </p>
            </div>
          )}
        </div>

        <aside>
          <div className={styles.availabilityStrip}>
            <span className="pulse"></span>
            <div>
              <strong>Booking Q3 &amp; Q4 2026</strong>
              <small>2 slots remaining this quarter</small>
            </div>
          </div>

          <div className={styles.asideBlock}>
            <h3>Prefer a different door?</h3>
            <ul className={styles.asideList}>
              <li>
                <a href="mailto:hello@adam-berger.com">hello@adam-berger.com</a>
                <span>Email</span>
              </li>
              <li>
                <a href="#">Book a 20-min call</a>
                <span>Calendar</span>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/adam-berger-1b80a1266/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <span>Social</span>
              </li>
              <li>
                <a href="#">GitHub</a>
                <span>Code</span>
              </li>
            </ul>
          </div>

          <div className={styles.asideBlock}>
            <h3>What happens next</h3>
            <ul className={styles.asideList}>
              <li>
                <span>01 · I read your note</span>
                <span>Same day</span>
              </li>
              <li>
                <span>02 · I reply, honestly</span>
                <span>≤ 24 hrs</span>
              </li>
              <li>
                <span>03 · 45-min discovery call</span>
                <span>Your time</span>
              </li>
              <li>
                <span>04 · Written scope &amp; fee</span>
                <span>Within a week</span>
              </li>
            </ul>
          </div>

          <div className={styles.asideBlock}>
            <h3>Working with</h3>
            <p>
              Businesses across the United States, United Kingdom &amp; South Africa. All projects run remotely with video calls for kickoff and check-ins.
            </p>
          </div>
        </aside>
      </main>
    </>
  );
}
