import Link from 'next/link';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-big">
              Thanks for stopping <em>by.</em>
            </div>
            <p style={{ marginTop: '24px', maxWidth: '36ch', color: 'var(--ink-soft)' }}>
              Working with businesses across the United States, United Kingdom &amp; South Africa.
            </p>
          </div>
          <div>
            <h5>Pages</h5>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5>Connect</h5>
            <ul>
              <li><a href="mailto:hello@adam-berger.com">hello@adam-berger.com</a></li>
              <li><Link href="/contact">Book a call</Link></li>
              <li><a href="https://www.linkedin.com/in/adam-berger-1b80a1266/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h5>Location</h5>
            <ul>
              <li><span style={{ color: 'var(--ink-soft)', fontSize: '14px' }}>Johannesburg, South Africa</span></li>
              <li><span style={{ color: 'var(--ink-mute)', fontSize: '13px' }}>GMT+2</span></li>
            </ul>
          </div>
          <div>
            <NewsletterForm />
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} Adam Berger</span>
          <span>adam-berger.com</span>
        </div>
      </div>
    </footer>
  );
}
