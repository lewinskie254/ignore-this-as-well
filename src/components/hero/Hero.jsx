import './hero.css'
import img1 from '../../images/mental health 1.webp'

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="image-wrapper">
            <img src={img1} />
          </div>
          <div className="text-content">
            <div className="new container">
              <div className="heading">
                <h1>We are here to help you overcome your mental hurdles</h1>
              </div>
              <div className="btn-container">
                <a href="#contact">
                  <button className="btn-light">Make an Appointment</button>
                </a>
                <a href="#services">
                  <button className="btn-dark">Discover More</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
