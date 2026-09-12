import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { asset } from '../utils/assets'

export default function Home() {
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
                Why Choosing Clean Bodies Can Change Your Life
              </h1>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-dark)', lineHeight: 1.7 }}>
                Clean living isn't a trend. It's how healing actually happens.
              </p>
              <p style={{ marginTop: 'var(--space-md)' }}>
                Clean Bodies Wellness was founded in 2012, out of a simple, heartfelt commitment to metabolic health.
                It's since been rebuilt from the ground up, shaped by real world experience raising a child and learning
                firsthand what "clean" actually means for busy families.
              </p>
              <p style={{ marginTop: 'var(--space-md)' }}>
                With nearly 15 years as a certified detox specialist and a background in Nutritional Sciences, everything
                shared here comes from real physiology, not fads or guesswork.
              </p>
            </div>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img
                                src={asset("/images/hero/69ff67f9-c15a-44d9-a70c-b2a443c4d09f.png")}
                alt="Fresh, whole foods transforming into time and health for your family"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
            <h2 style={{ color: 'var(--color-forest)', marginBottom: 'var(--space-xl)', textAlign: 'center' }}>Why It Starts With Metabolic Detoxification</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-dark)', lineHeight: 1.7 }}>
              Working with clients over the years revealed the same pattern again and again: people jump straight to
              diet changes, supplements, or exercise plans, and get frustrated when nothing sticks. None of that works
              the way it should if the body's metabolic system is still overloaded underneath it.
            </p>
            <p style={{ marginTop: 'var(--space-md)', fontSize: '1.125rem', color: 'var(--text-dark)', lineHeight: 1.7 }}>
              Metabolic detoxification isn't a cleanse or a quick fix. It's the groundwork. It's what allows the body
              to actually respond to good nutrition, absorb what it needs, and let go of what it doesn't. Once that
              system is functioning the way it's supposed to, everything else, food, movement, sleep, becomes more
              effective because the body is finally working with you instead of against you.
            </p>
            <p style={{ marginTop: 'var(--space-md)', fontSize: '1.125rem', color: 'var(--text-dark)', lineHeight: 1.7 }}>
              That's why it's the first step in this approach to wellness, and why it's the foundation for everything
              else here.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ color: 'var(--color-forest)', marginBottom: 'var(--space-xl)' }}>A Standard, Not a Trend</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-dark)', lineHeight: 1.7 }}>
              In recent years, more and more brands have sprung up around clean living and detoxification, and that's
              a good thing. It's a sign people are waking up. Our food supply has become increasingly compromised, and
              more of us are dealing with symptoms that didn't used to be so common. When an idea is truly life
              changing, it spreads.
            </p>
            <p style={{ marginTop: 'var(--space-md)', fontSize: '1.125rem', color: 'var(--text-dark)', lineHeight: 1.7 }}>
              Now is the moment to take health back into your own hands. Clean living should be accessible, evidence
              informed, and sustainable, not restrictive or extreme. That's the standard behind everything shared here.
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

      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>Explore More</h2>
          <div className="grid grid-3">
            <Link to="/metabolic-detox" className="card" style={{ padding: 'var(--space-xl)', textAlign: 'center', textDecoration: 'none' }}>
              <h3 style={{ color: 'var(--color-forest)' }}>Metabolic Detox</h3>
              <p style={{ color: 'var(--text-medium)' }}>How the process works, step by step</p>
            </Link>
            <Link to="/gut-health" className="card" style={{ padding: 'var(--space-xl)', textAlign: 'center', textDecoration: 'none' }}>
              <h3 style={{ color: 'var(--color-forest)' }}>Gut Health</h3>
              <p style={{ color: 'var(--text-medium)' }}>The foundation of lasting wellness</p>
            </Link>
            <Link to="/shop" className="card" style={{ padding: 'var(--space-xl)', textAlign: 'center', textDecoration: 'none' }}>
              <h3 style={{ color: 'var(--color-forest)' }}>Shop</h3>
              <p style={{ color: 'var(--text-medium)' }}>Tools and products I recommend</p>
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}
