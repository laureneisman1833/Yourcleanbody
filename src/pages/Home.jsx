import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { products, featuredProducts } from '../data/products'

export default function Home() {
  const featuredItems = featuredProducts.map(id => products.find(p => p.id === id)).filter(Boolean)

  return (
    <>
      <SEO
        title="Clean Living, Naturally Yours | YourCleanBody.com"
        description="Learn the story behind Clean Bodies — a certified detoxification specialist curating non-toxic skincare, raw almonds, and wellness products for health-conscious families."
      />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Clean Living,<br />Naturally Yours</h1>
              <p>
                Toxin-free wellness products curated and personally endorsed by a certified detoxification specialist. 
                Born from personal experience, backed by professional expertise.
              </p>
              <div className="hero-cta">
                <Link to="/shop" className="btn btn-primary">Shop My Favorites</Link>
                <Link to="/reset-plan" className="btn btn-terracotta">7-Day Reset</Link>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/hero/clean-bodies-hero-banner.png"
                alt="Clean Bodies — Natural wellness products"
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-card)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="section">
        <div className="container">
          <div className="about-content">
            <div>
              <h2>Meet Your Certified Detoxification Specialist</h2>
              <p style={{ marginTop: 'var(--space-lg)' }}>
                Clean Bodies was founded from a simple belief: what you put on and in your body matters deeply. 
                After years of working with clients on their detox journeys — helping them navigate confusing labels,
                hidden toxins, and empty marketing claims — I realized there was a gap.
              </p>
              <p>
                There was no single trusted source for products I could confidently recommend. So I created one.
              </p>
              <p>
                Every product on Clean Bodies is something I personally use, test, and stand behind. 
                From the raw almonds I blend into milk for my family, to the skincare I trust on my own skin — 
                nothing makes it onto these shelves without passing my standards.
              </p>
              <p className="handwriting" style={{ fontSize: '1.375rem', marginTop: 'var(--space-lg)' }}>
                \"We only stock what we personally trust for our own families.\"
              </p>

              <div className="credentials">
                <div className="credential-item">
                  <div className="credential-icon">🎓</div>
                  <div className="credential-text">
                    <h4>Certified Detox Specialist</h4>
                    <p>Advanced certification in nutritional detoxification and holistic wellness</p>
                  </div>
                </div>
                <div className="credential-item">
                  <div className="credential-icon">🔬</div>
                  <div className="credential-text">
                    <h4>Ingredient Expert</h4>
                    <p>Years of experience analyzing product formulations for hidden toxins</p>
                  </div>
                </div>
                <div className="credential-item">
                  <div className="credential-icon">👨‍👩‍👧‍👦</div>
                  <div className="credential-text">
                    <h4>Parent & Advocate</h4>
                    <p>Personally committed to creating a safer world for the next generation</p>
                  </div>
                </div>
                <div className="credential-item">
                  <div className="credential-icon">📚</div>
                  <div className="credential-text">
                    <h4>Educator</h4>
                    <p>Passionate about teaching others how to read labels and make informed choices</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-image-placeholder" style={{ padding: 0, overflow: 'hidden' }}>
              <img
                src="/images/hero/clean-bodies-hero-portrait.png"
                alt="Clean Bodies — Certified Detoxification Specialist"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <h2 className="section-title">My Personal Recommendations</h2>
          <p className="section-subtitle">
            Every product is personally vetted and approved. We only stock what we trust for our own families.
          </p>
          <div className="grid grid-3">
            {featuredItems.map(product => (
              <div className="card" key={product.id}>
                <div className="card-image" style={{
                  background: `linear-gradient(135deg, var(--color-sage-light), var(--color-soft-clay))`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <img
                    src={product.category === 'skincare' ? '/images/products/skincare-product.png' : product.category === 'almonds' ? '/images/products/raw-almonds-product.png' : '/images/products/wellness-product.png'}
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body">
                  {product.badge && <span className="badge">{product.badge}</span>}
                  <h3 className="card-title">{product.name}</h3>
                  <p className="card-text">{product.tagline}</p>
                  <div className="card-footer">
                    <span className="price">{product.price}</span>
                    <a
                      href={product.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="btn btn-primary"
                    >
                      Buy on Amazon
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <Link to="/shop" className="btn btn-terracotta">Browse All Products</Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <h2>Our Mission</h2>
          <p style={{ fontSize: '1.125rem', marginTop: 'var(--space-lg)' }}>
            Empower health-conscious families to live cleaner, toxin-free lives with products we personally trust and use. 
            We believe in a world where every home has access to safe, non-toxic essentials that nourish body and planet.
          </p>
          <div style={{ marginTop: 'var(--space-2xl)', display: 'flex', gap: 'var(--space-md)', justifyContent: 'center' }}>
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
            <Link to="/reset-plan" className="btn btn-secondary">Learn About the Reset</Link>
          </div>
        </div>
      </section>
    </>
  )
}
