import './footer.css'
import logo from '../../images/new logo.PNG'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer>
      <div className="container" id="footer">
        <div className="footer-wrapper">
          <div className="footer-top">
            <div className="logo-footer">
              <div className="logo">
                <img src={logo} />
                <div className="footer-logo-content">
                  <h3>Shall We Talk?</h3>
                </div>
              </div>
            </div>
            <div className="explore">
              <div className="contact-heading">
                <h2>Explore</h2>
              </div>
              <ul className="footer-links">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#classes">Age Group</a>
                </li>
                <li>
                  <a href="#contact">Contacts</a>
                </li>
              </ul>
            </div>
            <div className="contact">
              <div className="contact-heading">
                <h2>Contact</h2>
              </div>
              <div className="contact-wrapper">
                <div className="contact-items">
                  <div className="contact-svg svg-one">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 384 512"
                      fill="white"
                    >
                      <path d="M64 48c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16h80V400c0-26.5 21.5-48 48-48s48 21.5 48 48v64h80c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM0 64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm88 40c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H104c-8.8 0-16-7.2-16-16V104zM232 88h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H232c-8.8 0-16-7.2-16-16V104c0-8.8 7.2-16 16-16zM88 232c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H104c-8.8 0-16-7.2-16-16V232zm144-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H232c-8.8 0-16-7.2-16-16V232c0-8.8 7.2-16 16-16z" />
                    </svg>
                  </div>
                  <div className="contact-content">
                    <p>Offices</p>
                    <h4>Nacha Plaza, 2nd Floor, Geoffrey Kamau Avenue</h4>
                  </div>
                </div>
                <div className="contact-items">
                  <div className="contact-svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                      fill="white"
                    >
                      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                    </svg>
                  </div>
                  <div className="contact-content">
                    <p>Email</p>
                    <h4>support@springofwholeness.com</h4>
                  </div>
                </div>
                <div className="contact-items">
                  <div className="contact-svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                      fill="white"
                    >
                      <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                    </svg>
                  </div>
                  <div className="contact-content">
                    <p>Call Us</p>
                    <h4>0717 626182</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-buttons">
              <div className="contact-heading">
                <h2>Reach Us</h2>
              </div>
              <a href="mailto:support@springofwholeness.com">
                <button type="submit" className="btn-dark btn-two btn-new">
                  Email Us
                </button>
              </a>
              <a href="tel:+254717626182">
                <button type="submit" className="btn-light btn-two">
                  Call Us
                </button>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              {' '}
              © All Rights Reserved {year}, {'  '} designed by {'  '}
              <a href="https://lewinskie.com/"> Lewinskie Inc.</a>{' '}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
