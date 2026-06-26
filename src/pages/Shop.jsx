import { Link } from 'react-router-dom'
import { products } from '../data/products'
import SEO from '../components/SEO'
import { asset } from '../utils/assets'

export default function Shop() {
  return (
    <>
      <SEO
        title="Recommended Toxin-Free Products | YourCleanBody.com"
        description="A curated selection of non-toxic skincare, raw organic almonds, and wellness kits personally vetted and used by a certified detoxification specialist."
      />

      <section className="page-header">
        <div className="container">
          <h1>Recommended Products</h1>
          <p>
            I only recommend what I personally use in my own home. Every item here has been audited 
            for hidden toxins and effective results.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {products.map(product => (
              <div className="card" key={product.id}>
                <div className="card-image" style={{
                  background: 'linear-gradient(135deg, var(--color-sage-light), var(--color-soft-clay))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  height: '250px', overflow: 'hidden'
                }}>
                  <img
                    src={asset(product.image || "/images/products/raw-almonds-product.png")}
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body">
                  {product.badge && <span className="badge" style={{ marginBottom: 'var(--space-sm)' }}>{product.badge}</span>}
                  <h3 className="card-title">{product.name}</h3>
                  <p className="card-text">{product.tagline}</p>
                  
                  <div style={{ marginTop: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                    <Link to={`/shop/${product.id}`} style={{ fontSize: '0.875rem', color: 'var(--color-sage)', fontWeight: 600 }}>
                      View Ingredients & Details →
                    </Link>
                  </div>

                  <div className="card-footer">
                    <span className="price">{product.price}</span>
                    <a 
                      href={product.amazonUrl || 'https://amzn.to/4cM9XqK'} 
                      target="_blank" 
                      rel="noopener noreferrer sponsored" 
                      className="btn btn-primary"
                      style={{ padding: '0.5rem 1rem', fontSize: '0.9375rem' }}
                    >
                      Buy on Amazon
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-cream)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2>Need a Tailored Plan?</h2>
          <p className="section-subtitle">
            Products are helpful tools, but a personalized approach is what creates lasting change. 
            I offer custom 7-day reset detox plans designed for your specific goals.
          </p>
          <Link to="/personalized-reset" className="btn btn-terracotta">Learn About Custom Plans</Link>
        </div>
      </section>
    </>
  )
}
