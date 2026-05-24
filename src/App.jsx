import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ImageRow from './components/ImageRow'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="site">
      <Navbar />
      <Hero />
      <ImageRow photos={['/images/photo1.svg', '/images/photo2.svg']} z={2} />
      <ImageRow photos={['/images/photo3.svg', '/images/photo4.svg']} z={3} />
      <ImageRow photos={['/images/photo5.svg', '/images/photo6.svg']} z={4} />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
