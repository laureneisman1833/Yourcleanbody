import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { products, featuredProducts as featuredIds } from '../data/products'
import { asset } from '../utils/assets'

export default function Home() {
  const featuredProducts = products.filter(p => featuredIds.includes(p.id))

  return (
    <>
      <SEO 
        title="YourCleanBody.com | Clean Isn’t a Trend"
        description="Clean Isn’t a Trend. It’s What Your Body Was Designed to Be. Understanding metabolic detoxification — how the body naturally eliminates waste and supports lasting wellness."
      />

      {/* Hero Section - The Founder's Story */}
      <section className="section" style={{ paddingTop: 'var(--space-2xl)', backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div className="about-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3xl)', alignItems: 'center' }}>
            <div>
              <span className="badge" style={{ marginBottom: 'var(--space-md)' }}>The Heart of YourCleanBody</span>
              <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: 'var(--space-xl)', color: 'var(--color-forest)' }}>
                Clean Isn’t a Trend. <br />
                It’s What Your Body Was <br />
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
                alt="Clean wellness essentials on a warm kitchen counter" 
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

      {/* Trust Markers */}
      <section className="section" style={{ backgroundColor: 'var(--color-sage-light)' }}>
        <div className="container">
          <div className="grid grid-3">
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--color-forest-dark)' }}>Certified & Curated</h3>
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

      {/* Featured Products Snippet */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>Pantry & Skincare Essentials</h2>
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
