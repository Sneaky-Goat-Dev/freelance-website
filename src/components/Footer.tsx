import Link from 'next/link';

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
              <li><Link href="/work">Work</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/process">Process</Link></li>
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
              <li><a href="#">GitHub</a></li>
            </ul>
          </div>
          <div>
            <h5>Legal</h5>
            <ul>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Accessibility</a></li>
            </ul>
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
