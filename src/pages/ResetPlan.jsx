import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function PersonalizedReset() {
  return (
    <>
      <SEO
        title="7-Day Personalized Reset Detox Plan | YourCleanBody.com"
        description="A customized 7-day detox plan tailored to your unique body, goals, and lifestyle. Gentle, effective, and fully supported."
      />
      
      <section className="page-header">
        <div className="container">
          <h1>7-Day Personalized Reset</h1>
          <p>
            Because your body is unique. Your detox should be, too.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="reset-intro">
            <h2>Beyond Generic Programs</h2>
            <p style={{ fontSize: '1.125rem', marginTop: 'var(--space-lg)', lineHeight: 1.7 }}>
              Most detox programs are one-size-fits-all. They ignore your unique metabolism, 
              your current toxin load, and your lifestyle. My 7-day reset is different. 
              I work with you to create a plan that fits your life and helps you reach your specific goals.
            </p>
          </div>

          <div style={{ marginTop: 'var(--space-3xl)' }}>
            <h3>What You'll Receive</h3>
            <div className="grid grid-2" style={{ marginTop: 'var(--space-xl)', gap: 'var(--space-xl)' }}>
              <div className="card" style={{ padding: 'var(--space-xl)' }}>
                <h4 style={{ color: 'var(--color-herb-green)', marginBottom: 'var(--space-md)' }}>Custom Meal Guide</h4>
                <p style={{ fontSize: '0.9375rem' }}>
                  A full 7-day guide with clean, nutrient-dense foods that support your body's 
                  natural detoxification pathways. No starving, no liquid-only diets.
                </p>
              </div>
              <div className="card" style={{ padding: 'var(--space-xl)' }}>
                <h4 style={{ color: 'var(--color-herb-green)', marginBottom: 'var(--space-md)' }}>Personalized Support</h4>
                <p style={{ fontSize: '0.9375rem' }}>
                  Direct email access to me throughout your 7 days. I'm here to answer questions, 
                  offer encouragement, and help you troubleshoot any challenges.
                </p>
              </div>
              <div className="card" style={{ padding: 'var(--space-xl)' }}>
                <h4 style={{ color: 'var(--color-herb-green)', marginBottom: 'var(--space-md)' }}>Supplement Guidance</h4>
                <p style={{ fontSize: '0.9375rem' }}>
                  Recommendations for high-quality, clean supplements that can help accelerate 
                  your results, based on what your body actually needs.
                </p>
              </div>
              <div className="card" style={{ padding: 'var(--space-xl)' }}>
                <h4 style={{ color: 'var(--color-herb-green)', marginBottom: 'var(--space-md)' }}>Maintenance Plan</h4>
                <p style={{ fontSize: '0.9375rem' }}>
                  A clear roadmap for what to do after the 7 days are over, so you can maintain 
                  your results and keep the momentum going.
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 'var(--space-3xl)', padding: 'var(--space-2xl)', background: 'var(--color-cream)', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ textAlign: 'center' }}>How It Works</h3>
            <div style={{ marginTop: 'var(--space-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
              <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
                <div style={{ 
                  width: '32px', height: '32px', borderRadius: '50%', background: 'var(--color-herb-green)', 
                  color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 600 
                }}>1</div>
                <div>
                  <h4 style={{ marginBottom: 'var(--space-xs)' }}>The Consultation</h4>
                  <p style={{ fontSize: '0.9375rem', marginBottom: 0 }}>
                    Reach out via the contact form. We'll start with a brief conversation about your goals and current health status.
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
                <div style={{ 
                  width: '32px', height: '32px', borderRadius: '50%', background: 'var(--color-herb-green)', 
                  color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 600 
                }}>2</div>
                <div>
                  <h4 style={{ marginBottom: 'var(--space-xs)' }}>The Questionnaire</h4>
                  <p style={{ fontSize: '0.9375rem', marginBottom: 0 }}>
                    I'll send you a detailed questionnaire to help me understand your lifestyle, preferences, and any specific concerns.
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
                <div style={{ 
                  width: '32px', height: '32px', borderRadius: '50%', background: 'var(--color-herb-green)', 
                  color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 600 
                }}>3</div>
                <div>
                  <h4 style={{ marginBottom: 'var(--space-xs)' }}>Your Custom Plan</h4>
                  <p style={{ fontSize: '0.9375rem', marginBottom: 0 }}>
                    Within 48 hours, you'll receive your personalized PDF guide and we'll set a start date for your supported reset.
                  </p>
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
              <Link to="/contact" className="btn btn-primary">Inquire About Your Plan →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-cream)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2>Ready to feel like yourself again?</h2>
          <p className="section-subtitle">
            Let's cut through the noise and focus on what works for your body.
          </p>
          <Link to="/contact" className="btn btn-terracotta">Get Started Today</Link>
        </div>
      </section>
    </>
  )
}
