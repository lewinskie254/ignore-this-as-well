import './about.css'
import aboutImg from '../../images/regina.jpg'
import signature from '../../images/signature.png'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-img-container">
            <img src={aboutImg} />
          </div>
          <div className="about-text-content">
            <div className="about-text-title">
              <p>Welcome to Spring of Wholeness</p>
              <h1>
                Regina Mwabila, a seasoned specialist in clinical psychology.
              </h1>
            </div>
            <div className="about-text-details">
              <div className="about-text-experience">
                <div className="svg-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="rgba(171, 123, 94)"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                    />
                  </svg>
                </div>
                <div className="text-experience">
                  <h1>10</h1>
                  <p> Years of experience</p>
                </div>
              </div>
              <div className="about-text-desc">
                <div className="about-text-desc-paragraph">
                  <p>
                    "Passionate about fostering mental wellness, Regina Mwabila
                    is a dedicated clinical psychologist committed to empowering
                    individuals through evidence-based therapeutic
                    interventions. With a compassionate approach and expertise
                    in cognitive-behavioral therapy, they specialize in guiding
                    clients toward emotional resilience, personal growth, and a
                    balanced, fulfilling life."
                  </p>
                </div>
                <div className="about-text-desc-bullets">
                  <ul className="about-list-ul">
                    <li className="about-list-li">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="rgba(171, 123, 94"
                        className="w-6 h-6 check"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <h4>Trauma-Informed Counseling</h4>
                    </li>
                    <li className="about-list-li">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="rgba(171, 123, 94"
                        className="w-6 h-6 check"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <h4>Family Therapy</h4>
                    </li>
                    <li className="about-list-li">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="rgba(171, 123, 94"
                        className="w-6 h-6 check"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <h4>Stress Management & Resilience Building</h4>
                    </li>
                    <li className="about-list-li">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="rgba(171, 123, 94"
                        className="w-6 h-6 check"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <h4>Depression</h4>
                    </li>
                    <li className="about-list-li">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="rgba(171, 123, 94"
                        className="w-6 h-6 check"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <h4>Child and Adolescent Mental Health Support</h4>
                    </li>
                    <li className="about-list-li">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="rgba(171, 123, 94"
                        className="w-6 h-6 check"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <h4>Anxiety Disorders</h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="about-btn-section">
              <div className="about-signature">
                <img src={signature} />
                <p>Regina Mwabila, Clinical Psychologist</p>
              </div>
              <div className="signature-btn">
                <a href="#contact">
                  <button className="btn-light">Make an appointment</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
