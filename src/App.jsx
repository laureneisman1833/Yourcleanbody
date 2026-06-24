import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import About from './pages/About'
import Recipes from './pages/Recipes'
import Contact from './pages/Contact'
import AlmondMilkRecipe from './pages/blog/AlmondMilkRecipe'
import MetabolicDetox from './pages/MetabolicDetox'
import PersonalizedReset from './pages/PersonalizedReset'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:productId" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/personalized-reset" element={<PersonalizedReset />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/blog/how-to-make-almond-milk" element={<AlmondMilkRecipe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/metabolic-detoxification" element={<MetabolicDetox />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
