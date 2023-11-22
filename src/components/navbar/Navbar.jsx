import logo from '../../images/new logo.PNG'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-wrapper">
          <div className="logo-container">
            <img src={logo} alt="" />
          </div>
          <div className="hamburger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div className="navbar-items desktop">
            <div className="links">
              <ul className="navlist">
                <li>
                  <a href="#hero">Home</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
                <li>
                  <a href="#footer">Find Us</a>
                </li>
              </ul>
            </div>
            <div className="booking">
              <h4>Make an Appointment</h4>
            </div>
          </div>
          <div className="navbar-items mobile">
            <div className="links">
              <ul className="navlist">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Find Us</a>
                </li>
              </ul>
            </div>
            <div className="booking">
              <h4>Make an Appointment</h4>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
