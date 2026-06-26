import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { products } from '../data/products'
import { asset } from '../utils/assets'

export default function Home() {
  const featuredProducts = products.filter(p => ['nontoxic-skincare', 'raw-almonds', 'wellness-detox-kit'].includes(p.id))

  return (
    <>
      <SEO 
        title="YourCleanBody.com | Toxin-Free Wellness & Detoxification"
        description="A trusted source for toxin-free wellness, curated by a certified detoxification specialist. Discover non-toxic skincare, raw organic almonds, and personalized detox plans."
      />

      {/* Hero Section - The Founder's Story */}
      <section className="section" style={{ paddingTop: 'var(--space-2xl)' }}>
        <div className="container">
          <div className="about-content">
            <div>
              <span className="badge" style={{ marginBottom: 'var(--space-md)' }}>Welcome to YourCleanBody.com</span>
              <h1>Meet Your Certified Detoxification Specialist</h1>
              <p style={{ marginTop: 'var(--space-lg)', fontSize: '1.125rem' }}>
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
              
              <div className="credentials" style={{ marginTop: 'var(--space-xl)' }}>
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
              </div>
              
              <div style={{ marginTop: 'var(--space-2xl)' }}>
                <Link to="/shop" className="btn btn-primary">Shop My Recommended Products</Link>
                <Link to="/personalized-reset" className="btn btn-secondary" style={{ marginLeft: 'var(--space-md)' }}>Custom 7-Day Reset</Link>
              </div>
            </div>

            <div className="about-image-placeholder" style={{ padding: 0, overflow: 'hidden' }}>
              <img
                src={asset("/images/hero/clean-bodies-hero-portrait.png")}
                alt="Clean Bodies — Certified Detoxification Specialist"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Markers */}
      <section className="section" style={{ backgroundColor: 'var(--color-sage-light)' }}>
        <div className="container">
          <div className="grid grid-3">
            <div style={{ textAlign: 'center' }}>
              <h3>Certified & Curated</h3>
              <p>Vetted by a specialist. No hidden toxins.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3>Family-First</h3>
              <p>Safe for you and your loved ones.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3>Authentic Results</h3>
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
                  <img src={asset(product.image || "/images/products/raw-almonds-product.png")} alt={product.name} style={{ maxHeight: '100%' }} />
                </div>
                <div className="card-body">
                  <h3 className="card-title">{product.name}</h3>
                  <p className="card-text">{product.tagline}</p>
                  <div className="card-footer">
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
