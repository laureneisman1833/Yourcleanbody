import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function WellnessClub() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('https://formspree.io/f/mdeodovd', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(e.target),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        alert('Something went wrong — please try again or reach out via the Contact page.')
      }
    } catch (error) {
      alert('Something went wrong — please try again or reach out via the Contact page.')
    }
  }

  return (
    <>
      <SEO
        title="Clean Bodies Wellness Club | YourCleanBody.com"
        description="Join the Clean Bodies Wellness Club for live talks, practical insights on vitality and longevity, and a like-minded community. Food is the tool. Time is the gift."
      />

      <section className="page-header">
        <div className="container">
          <h1>Clean Bodies Wellness Club</h1>
          <p>
            Food is the tool. Time is the gift.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="reset-intro">
            <h2>Want the knowledge that can change how you look and feel?</h2>
            <p style={{ fontSize: '1.125rem', marginTop: 'var(--space-lg)', lineHeight: 1.7 }}>
              Join us to learn how wellness transforms your health &mdash; and gives you back
              more time with the people you love. The Wellness Club brings together live talks,
              practical insights, and a community that's working toward the same goals you are.
            </p>
          </div>

          <div style={{ marginTop: 'var(--space-3xl)' }}>
            <h3>What Members Get</h3>
            <div className="grid grid-2" style={{ marginTop: 'var(--space-xl)', gap: 'var(--space-xl)' }}>
              <div className="card" style={{ padding: 'var(--space-xl)' }}>
                <h4 style={{ color: 'var(--color-herb-green)', marginBottom: 'var(--space-md)' }}>Live Talks</h4>
                <p style={{ fontSize: '0.9375rem' }}>
                  In-person talks with Lauren Eisman of Clean Bodies. Locations and times
                  are announced to members first.
                </p>
              </div>
              <div className="card" style={{ padding: 'var(--space-xl)' }}>
                <h4 style={{ color: 'var(--color-herb-green)', marginBottom: 'var(--space-md)' }}>Practical Insights</h4>
                <p style={{ fontSize: '0.9375rem' }}>
                  Real, usable guidance for vitality and longevity &mdash; not generic advice,
                  but what actually works.
                </p>
              </div>
              <div className="card" style={{ padding: 'var(--space-xl)', gridColumn: '1 / -1' }}>
                <h4 style={{ color: 'var(--color-herb-green)', marginBottom: 'var(--space-md)' }}>A Like-Minded Community</h4>
                <p style={{ fontSize: '0.9375rem' }}>
                  Connect with other members who are on the same path &mdash; ask questions,
                  share wins, and stay accountable together.
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 'var(--space-3xl)', padding: 'var(--space-2xl)', background: 'var(--color-cream)', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ textAlign: 'center' }}>Become a Member</h3>
            <p style={{ textAlign: 'center', fontSize: '0.9375rem', marginTop: 'var(--space-sm)' }}>
              Sign up below to learn more and get notified about upcoming meetups.
            </p>

            {submitted ? (
              <p style={{ textAlign: 'center', marginTop: 'var(--space-xl)', fontWeight: 600, color: 'var(--color-herb-green)' }}>
                Thanks for joining! Watch your inbox for details on our next meetup.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ marginTop: 'var(--space-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  style={{ padding: 'var(--space-md)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={handleChange}
                  required
                  style={{ padding: 'var(--space-md)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone (optional)"
                  value={form.phone}
                  onChange={handleChange}
                  style={{ padding: 'var(--space-md)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}
                />
                <button type="submit" className="btn btn-primary" style={{ marginTop: 'var(--space-sm)' }}>
                  Become a Member
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-cream)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2>Have questions before joining?</h2>
          <p className="section-subtitle">
            Reach out and we'll help you find the right fit.
          </p>
          <Link to="/contact" className="btn btn-terracotta">Contact Us</Link>
        </div>
      </section>
    </>
  )
}
