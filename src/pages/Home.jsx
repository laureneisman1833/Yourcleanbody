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
              
