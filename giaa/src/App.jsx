import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import ProductCarousel from './components/ProductCarousel'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Contact/>
      <ProductCarousel/>
     
      <section className="cta">
  <h2>Ready to elevate your style?</h2>
  <p>Let GIAA bring your look to life — DM to order.</p>
  <a href="https://wa.me/234XXXXXXXXXX" target="_blank">
    <button>Order Now</button>
  </a>
</section>
 <Footer/>

    </div>
  )
}

export default App