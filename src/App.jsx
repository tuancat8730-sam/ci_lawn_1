import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import HowItWorks from './components/HowItWorks'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <HowItWorks />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
