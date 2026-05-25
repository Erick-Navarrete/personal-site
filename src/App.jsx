import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ImageRow from './components/ImageRow'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="site">
      <Navbar />
      <div className="overlay">
        <Hero />
        <ImageRow photos={['/images/photo1.jpg', '/images/photo4.svg']} z={2} />
        <ImageRow photos={['/images/photo3.jpg', '/images/photo4.svg']} z={3} />
        <ImageRow photos={['/images/photo2.jpg', '/images/photo6.svg']} z={4} />
      </div>
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
