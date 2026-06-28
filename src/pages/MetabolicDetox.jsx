import SEO from '../components/SEO'
import { asset } from '../utils/assets'

export default function MetabolicDetox() {
  const infographics = [
    {
      file: 'FB11D2C4-5E8F-4CCD-A67F-44F4F351E2FB.png',
      label: 'Hydration',
      title: 'Why Water Is More Than Just a Drink',
      description: 'Your body requires water-dense foods not just to survive, but to assist in the digestion of foods that lack water — including all processed foods. Chronic low-grade dehydration is one of the most overlooked contributors to sluggish digestion, fatigue, and toxic buildup. Alkaline, ionized water supports your body\'s natural pH balance and helps flush metabolic waste more efficiently than tap water alone.',
    },
    {
      file: '9327B069-E088-438A-BC53-0DEB4EB617B2.jpeg',
      label: 'Diet & the Body',
      title: 'The Standard American Diet vs. A Clean One',
      description: 'Side by side, the difference is undeniable. A processed food diet burdens every system in the body — from the brain and heart to the gut and immune system. A whole-food, plant-rich diet does the opposite: it restores, repairs, and protects. Every meal is either adding to your health or taking away from it. Clean Bodies is built on the belief that food is information — and your body is always listening.',
    },
    {
      file: 'CC04959C-51BF-48E5-98FB-3E5370E7308B.png',
      label: 'Food as Medicine',
      title: 'The Food You Eat Shapes How You Feel, Look & Live',
      description: 'Every bite is either adding to your health or taking away from it. Nutrient-dense whole foods strengthen your immune system, stabilize blood sugar, support gut health, reduce inflammation, and fuel sustained energy. Processed and nutrient-deficient foods do the opposite — accelerating aging, disrupting hormones, and burdening every organ system. The long-term impact of clean eating is a stronger body, vibrant energy, better mood, and lower disease risk.',
    },
    {
      file: 'AFB255AF-CC52-4095-BD69-74A39CBB1FAF.png',
      label: 'Gallbladder Health',
      title: 'The Importance of Supplementing After Gallbladder Removal',
      description: 'The gallbladder plays a small but mighty role in fat digestion, hormone balance, and nutrient absorption. When it\'s removed, bile no longer has a storage tank — meaning fat digestion becomes slow, unregulated, and incomplete. Many people experience ongoing bloating, diarrhea, fatigue, and nutrient deficiencies after surgery, yet rarely receive guidance on how to support their body\'s new reality. Digestive enzymes, ox bile salts, probiotics, and the right dietary approach can make a profound difference in how you feel.',
    },
    {
      file: 'E8658676-2A8B-4E01-9E98-9BAEB4CB7E22.png',
      label: 'The Reset Protocol',
      title: 'The Reset: Fast • Flow • Fuel',
      description: 'Intermittent fasting, lymphatic drainage through movement, and clean whole-food nutrition form a powerful triad that cleanses, repairs, and restores the body at a cellular level. Fasting lowers insulin and activates autophagy. Movement pumps the lymphatic system and removes metabolic waste. Whole foods provide the vitamins, minerals, and phytonutrients the body needs to rebuild. Together, they produce a leaner body, stronger immunity, clearer skin, sharper mind, and more sustained energy.',
    },
  ]

  return (
    <>
      <SEO
        title="The Truth About Metabolic Detoxification | YourCleanBody.com"
        description="Understanding metabolic detoxification — how the body naturally eliminates waste and supports lasting wellness."
      />

      <section className="page-header">
        <div className="container">
          <h1>The Truth About Metabolic Detoxification</h1>
          <p style={{ marginTop: 'var(--space-md)', fontSize: '1.125rem', color: 'var(--text-medium)', maxWidth: '700px' }}>
            Your body was designed to detoxify itself. Here's what that actually means — and how to support it.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--text-dark)' }}>
              Metabolic detoxification is the body's natural process of transforming and eliminating waste products,
              excess hormones, environmental toxins, and byproducts of metabolism through the liver, digestive system,
              kidneys, skin, and lymphatic system. A healthy reset often begins with supporting digestive regularity
              and gut health, since efficient elimination helps prevent waste from lingering in the intestines and
              supports overall metabolic function. Proper hydration, nutrient-dense foods, fiber, movement, and
              lymphatic support can help the body's natural detoxification pathways work more effectively. Because{' '}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10181083/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-sage)', fontWeight: 600 }}>
                roughly 90% of the body's serotonin is produced in the gut
              </a>, disruptions to gut health may influence mood, digestion, and overall well-being. When the gut,
              liver, and lymphatic system are functioning optimally, many people find it easier to establish healthy
              habits that support energy levels, body composition goals, and long-term wellness.
            </p>
          </div>
        </div>
      </section>

      {infographics.map((item, index) => (
        <section
          key={index}
          className="section"
          style={{ backgroundColor: index % 2 === 0 ? 'var(--color-cream)' : 'var(--white)' }}
        >
          <div className="container">
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <span className="badge" style={{ marginBottom: 'var(--space-sm)', display: 'inline-block' }}>
                {item.label}
              </span>
              <h2 style={{ color: 'var(--color-forest)', marginBottom: 'var(--space-lg)', fontSize: 'clamp(1.25rem, 3vw, 1.75rem)' }}>
                {item.title}
              </h2>
              <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', marginBottom: 'var(--space-xl)' }}>
                <img
                  src={asset(`/images/marketing/${item.file}`)}
                  alt={item.title}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-dark)', maxWidth: '800px' }}>
                {item.description}
              </p>
            </div>
          </div>
        </section>
      ))}

      <section className="section" style={{ backgroundColor: 'var(--color-sage-light)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2>Ready to Support Your Body's Natural Reset?</h2>
          <p className="section-subtitle">
            Knowledge is the first step. A personalized plan is the next. I offer custom 7-day reset detox plans
            designed around your specific goals and health history.
          </p>
          <a href="/personalized-reset" className="btn btn-primary">Start Your 7-Day Reset</a>
        </div>
      </section>
    </>
  )
}
