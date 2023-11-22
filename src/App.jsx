import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Sessions from './components/sessions/Sessions'
import Services from './components/services/Services'
import Classes from './components/classes/Classes'
import Bottom from './components/bottom-wrapper/Bottom'
import Benefits from './components/benefits/Benefits'
import Form from './components/form/Form'
import Separator from './components/separator/Separator'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Sessions />
      <Services />
      <Classes />
      <Bottom />
      <Benefits />
      <Form />
      <Separator />
      <Footer />
    </>
  )
}

export default App
