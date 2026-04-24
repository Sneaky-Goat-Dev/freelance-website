'use client';

import { useState, FormEvent } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Thanks for subscribing!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong');
    }
  }

  return (
    <div className="newsletter-form">
      <h5>Newsletter</h5>
      <p style={{ color: 'var(--ink-soft)', fontSize: '14px', marginBottom: '12px' }}>
        Get updates on new projects and insights.
      </p>
      {status === 'success' ? (
        <p style={{ color: 'var(--accent)', fontSize: '14px' }}>{message}</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px' }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            disabled={status === 'loading'}
            style={{
              flex: 1,
              padding: '12px 16px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--rule)',
              background: 'var(--bg-elev)',
              color: 'var(--ink)',
              fontSize: '14px',
              boxShadow: 'var(--shadow-sm)',
              outline: 'none',
            }}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            style={{
              padding: '12px 20px',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              background: 'var(--accent)',
              color: '#fff',
              fontSize: '14px',
              fontWeight: 500,
              cursor: status === 'loading' ? 'wait' : 'pointer',
              opacity: status === 'loading' ? 0.7 : 1,
              transition: 'background 0.2s ease',
            }}
          >
            {status === 'loading' ? '...' : 'Subscribe'}
          </button>
        </form>
      )}
      {status === 'error' && (
        <p style={{ color: '#ef4444', fontSize: '13px', marginTop: '8px' }}>{message}</p>
      )}
    </div>
  );
}
