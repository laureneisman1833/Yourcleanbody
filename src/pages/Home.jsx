import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { products, featuredProducts as featuredIds } from '../data/products'
import { asset } from '../utils/assets'

export default function Home() {
  const featuredProducts = products.filter(p => featuredIds.includes(p.id))

  return (
    <>
      <SEO 
        title="YourCleanBody.com | Clean Living Isn't a Trend"
        description="Clean Living Isn't a Trend. It's How I Heal. Understanding metabolic detoxification — how the body naturally eliminates waste and supports lasting wellness."
      />

      <section className="section" style={{ paddingTop: 'var(--space-2xl)', backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div className="about-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3xl)', alignItems: 'center' }}>
            <div>
              <span className="badge" style={{ marginBottom: 'var(--space-md)' }}>The Heart of YourCleanBody</span>
              <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: 'var(--space-xl)', color: 'var(--color-forest)' }}>
                Clean Living Isn't a Trend. <br />
                It's How I Heal.
              </h1>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-dark)', lineHeight: 1.7 }}>
                I founded Clean Bodies Wellness back in 2012, out of a simple, heartfelt commitment to metabolic health.
                Since then, I rebuilt it from the ground up after raising my own child, and that experience gave me even more warmth, patience, and real world clarity about what "clean" actually means for busy families like mine.
              </p>
              <p style={{ marginTop: 'var(--space-md)' }}>
                With nearly 15 years as a certified detox specialist and a background in Nutritional Sciences, everything I share here comes from real physiology, not fads or guesswork.
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

      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-dark)', lineHeight: 1.7 }}>
              In recent years, I've watched more and more brands spring up around clean living and detoxification, and honestly, I think that's a good thing. It's a sign that people are waking up. Our food supply has become increasingly compromised, and more of us are dealing with symptoms that didn't used to be so common. When an idea is truly life changing, it spreads. I believe now is the moment for all of us to take our health back into our own hands, and I'm glad to have company in that mission. I believe clean living should be accessible, evidence informed, and sustainable, not restrictive or extreme. That's the standard behind everything I share here.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ color: 'var(--color-forest)', marginBottom: 'var(--space-xl)' }}>Understanding Metabolic Detoxification</h2>
            <div style={{ fontSize: '1.125rem', color: 'var(--text-dark)', lineHeight: 1.7, textAlign: 'left' }}>
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

      <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--color-forest)', textAlign: 'center', marginBottom: 'var(--space-sm)' }}>What the Research Shows</h2>
            <p style={{ textAlign: 'center', color: 'var(--text-medium)', marginBottom: 'var(--space-2xl)', fontSize: '1rem' }}>
              The science behind metabolic detoxification is well-established. Here are a few studies I return to often.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>

              <div style={{ background: 'white', borderRadius: 'var(--radius-md)', padding: 'var(--space-xl)', boxShadow: 'var(--shadow-sm)' }}>
                <span className="badge" style={{ marginBottom: 'var(--space-md)' }}>2023 Clinical Study</span>
                <h3 style={{ color: 'var(--color-forest)', marginBottom: 'var(--space-sm)', fontSize: '1.125rem' }}>
                  Guided Metabolic Detoxification Program Supports Phase II Detoxification Enzymes and Antioxidant Balance
                </h3>
                <p style={{ color: 'var(--text-medium)', lineHeight: 1.7, marginBottom: 'var(--space-md)' }}>
                  Researchers followed healthy adults through a 28-day whole-food metabolic detoxification program and found significant improvements across key markers of detox function and antioxidant capacity.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', marginBottom: 'var(--space-lg)', paddingLeft: 0, listStyle: 'none' }}>
                  {['13% increase in glutathione S-transferase (GST) activity — a major Phase II detoxification enzyme',
                    '~40% increase in total cellular antioxidant capacity',
                    'Significant reduction in reactive oxygen species (oxidative stress)',
                    'Support of normal Phase II liver detoxification pathways without adverse effects'].map((point, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.5rem', color: 'var(--text-dark)', fontSize: '0.9375rem' }}>
                      <span style={{ color: 'var(--color-herb-green)', fontWeight: 600, flexShrink: 0 }}>✓</span>{point}
                    </li>
                  ))}
                </ul>
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10181083/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.875rem', color: 'var(--color-sage)', fontWeight: 600 }}>
                  Read the full study → PMC10181083
                </a>
              </div>

              <div style={{ background: 'white', borderRadius: 'var(--radius-md)', padding: 'var(--space-xl)', boxShadow: 'var(--shadow-sm)' }}>
                <span className="badge" style={{ marginBottom: 'var(--space-md)' }}>Scientific Review</span>
                <h3 style={{ color: 'var(--color-forest)', marginBottom: 'var(--space-sm)', fontSize: '1.125rem' }}>
                  Modulation of Metabolic Detoxification Pathways Using Foods and Food-Derived Components (2015)
                </h3>
                <p style={{ color: 'var(--text-medium)', lineHeight: 1.7, marginBottom: 'var(--space-md)' }}>
                  This review summarizes decades of research showing that specific foods and nutrients can meaningfully influence detoxification enzymes and glutathione production.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', marginBottom: 'var(--space-lg)', paddingLeft: 0, listStyle: 'none' }}>
                  {['Cruciferous vegetables (broccoli, kale, Brussels sprouts)',
                    'Sulfur-containing amino acids',
                    'Selenium and B vitamins',
                    'Curcumin, milk thistle and alpha-lipoic acid'].map((point, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.5rem', color: 'var(--text-dark)', fontSize: '0.9375rem' }}>
                      <span style={{ color: 'var(--color-herb-green)', fontWeight: 600, flexShrink: 0 }}>✓</span>{point}
                    </li>
                  ))}
                </ul>
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4488002/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.875rem', color: 'var(--color-sage)', fontWeight: 600 }}>
                  Read the full study → PMC4488002
                </a>
              </div>

                          </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-sage-light)' }}>
        <div className="container">
          <div className="grid grid-3">
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--color-forest-dark)' }}>Certified and Curated</h3>
              <p>Vetted by a specialist. No hidden toxins.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--color-forest-dark)' }}>Family-First</h3>
              <p>Safe for you and your loved ones.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--color-forest-dark)' }}>Authentic Results</h3>
              <p>Focus on gentle, effective cleansing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>Pantry and Skincare Essentials</h2>
          <div className="grid grid-3">
            {featuredProducts.map(product => (
              <div className="card" key={product.id}>
                <div className="card-image" style={{ background: 'var(--color-cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px' }}>
                  <img src={asset(product.image)} alt={product.name} style={{ maxHeight: '100%', objectFit: 'contain' }} />
                </div>
                <div className="card-body">
                  <h3 className="card-title">{product.name}</h3>
                  <p className="card-text">{product.tagline}</p>
                  <div className="card-footer" style={{ marginTop: 'auto' }}>
                    <span className="price">{product.price}</span>
                    <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer sponsored" className="btn btn-primary">Buy on Amazon</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
            <Link to="/shop" className="btn btn-secondary">View All Products</Link>
          </div>
        </div>
      </section>

    </>
  )
}
