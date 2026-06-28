import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { products, featuredProducts as featuredIds } from '../data/products'
import { asset } from '../utils/assets'

export default function Home() {
  const featuredProducts = products.filter(p => featuredIds.includes(p.id))

  return (
    <>
      <SEO 
        title="YourCleanBody.com | Clean Isn't a Trend"
        description="Clean Isn't a Trend. It's What Your Body Was Designed to Be. Understanding metabolic detoxification — how the body naturally eliminates waste and supports lasting wellness."
      />

      {/* Hero Section - The Founder's Story */}
      <section className="section" style={{ paddingTop: 'var(--space-2xl)', backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div className="about-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3xl)', alignItems: 'center' }}>
            <div>
              <span className="badge" style={{ marginBottom: 'var(--space-md)' }}>The Heart of YourCleanBody</span>
              <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: 'var(--space-xl)', color: 'var(--color-forest)' }}>
                Clean Isn't a Trend. <br />
                It's What Your Body Was <br />
                Designed to Be.
              </h1>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-dark)', lineHeight: 1.7 }}>
                Clean Bodies was born from a simple belief: what you put on and in your body matters deeply. 
                After years of navigating confusing labels and hidden toxins, I realized there was a gap.
              </p>
              <p style={{ marginTop: 'var(--space-md)' }}>
                Every product here is something I personally use and trust for my own family. 
                From the raw almonds I blend into milk to the skincare I trust on my own skin.
              </p>
              <div style={{ marginTop: 'var(--space-2xl)', display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                <Link to="/personalized-reset" className="btn btn-primary">Start Your 7-Day Reset</Link>
                <Link to="/shop" className="btn btn-secondary">Shop Recommended Products</Link>
              </div>
            </div>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img 
                src={asset("/images/hero/clean-bodies-hero-portrait.png")} 
                alt="Lauren Eisman — Clean Living Specialist" 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Metabolic Detox Focus */}
      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ color: 'var(--color-forest)', marginBottom: 'var(--space-xl)' }}>Understanding Metabolic Detoxification</h2>
            <div className="metabolic-intro" style={{ fontSize: '1.125rem', color: 'var(--text-dark)', lineHeight: 1.7, textAlign: 'left' }}>
              <p>
                Metabolic detoxification is the body's natural process of transforming and eliminating waste products,
                excess hormones, environmental toxins, and byproducts of metabolism through the liver, digestive system,
                kidneys, skin, and lymphatic system.
              </p>
              <p style={{ marginTop: 'var(--space-md)' }}>
                When the gut, liver, and lymphatic system are functioning optimally, many people find it easier to establish 
                healthy habits that support energy levels, body composition goals, and long-term wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--color-forest)', textAlign: 'center', marginBottom: 'var(--space-sm)' }}>What the Research Shows</h2>
            <p style={{ textAlign: 'center', color: 'var(--text-medium)', marginBottom: 'var(--space-2xl)', fontSize: '1rem' }}>
              The science behind metabolic detoxification is well-established. Here are a few studies I return to often.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>

              {/* Study 1 */}
              <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-md)', padding: 'var(--space-xl)', boxShadow: 'var(--shadow-sm)' }}>
                <span className="badge" style={{ marginBottom: 'var(--space-md)' }}>2023 Clinical Study</span>
                <h3 style={{ color: 'var(--color-forest)', marginBottom: 'var(--space-sm)', fontSize: '1.125rem' }}>
                  Guided Metabolic Detoxification Program Supports Phase II Detoxification Enzymes and Antioxidant Balance
                </h3>
                <p style={{ color: 'var(--text-medium)', lineHeight: 1.7, marginBottom: 'var(--space-md)' }}>
                  Researchers followed healthy adults through a 28-day whole-food metabolic detoxification program and found significant improvements across key markers of detox function and antioxidant capacity.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', marginBottom: 'var(--space-lg)' }}>
                  {[
                    '13% increase in glutathione S-transferase (GST) activity — a major Phase II detoxification enzyme',
                    '~40% increase in total cellular antioxidant capacity',
                    'Significant reduction in reactive oxygen species (oxidative stress)',
                    'Support of normal Phase II liver detoxification pathways without adverse effects',
                  ].map((point, i) => (
                    <li key={i} style={{ display: 'flex', gap: 'var(--space-sm)', color: 'var(--text-dark)', fontSize: '0.9375rem' }}>
                      <span style={{ color: 'var(--color-herb-green)', fontWeight: 600, flexShrink: 0 }}>✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10181083/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.875rem', color: 'var(--color-sage)', fontWeight: 600 }}>
                  Read the full study → PMC10181083
                </a>
              </div>

              {/* Study 2 */}
              <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-md)', padding: 'var(--space-xl)', boxShadow: 'var(--shadow-sm)' }}>
                <span className="badge" style={{ marginBottom: 'var(--space
