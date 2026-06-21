import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { asset } from '../utils/assets'

export default function About() {
  return (
    <>
      <SEO
        title="About Clean Bodies | Our Story"
        description="Clean Bodies was founded in 2012 from a deeply personal health journey — helping individuals and families achieve lasting wellness."
      />
      <section className="page-header">
        <div className="container">
          <h1>About Clean Bodies</h1>
          <p>
            A personal journey to lasting wellness, and a mission to help others find the same.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-content">
            <div>
              <p style={{ marginTop: 'var(--space-lg)' }}>
                Clean Bodies was founded in 2012 from a deeply personal health journey. After spending more than
                a decade struggling with chronic pain and persistent acne, I was determined to find answers
                beyond temporary solutions. Through two years of intensive study in Nutritional Sciences and
                Metabolic Detoxification, I gained the knowledge and tools needed to transform my own health and
                create a lifestyle that allowed me not only to recover, but to truly thrive.
              </p>
              <p>
                Over the past 15 years, I have had the privilege of consulting with individuals and families,
                helping them make practical, sustainable changes that support lasting wellness. My approach
                focuses on simple, effective strategies that empower people to take control of their health
                without unnecessary expense or overwhelm.
              </p>
              <p>
                After taking time away from my practice to welcome and raise my son, I am excited to return to
                serving others through Clean Bodies. My mission remains the same: to help individuals and
                families achieve greater health, vitality, and happiness through education, personalized
                guidance, and realistic lifestyle solutions that fit their lives and their budgets.
              </p>
            </div>

            <div className="about-image-placeholder" style={{ padding: 0, overflow: 'hidden' }}>
              <img
                src={asset("/images/hero/clean-bodies-hero-portrait.png")}
                alt="Clean Bodies"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-cream)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2>Want to Know More?</h2>
          <p style={{ fontSize: '1.125rem', marginTop: 'var(--space-lg)' }}>
            If you have a question about any product on this site — or if you're curious about a personalized
            detox plan — I'd love to hear from you.
          </p>
          <div style={{ marginTop: 'var(--space-2xl)' }}>
            <Link to="/contact" className="btn btn-primary">Reach Out →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
