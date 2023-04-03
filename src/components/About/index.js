// Write your code here
import Header from '../Header'
import './index.css'

const About = () => (
  <div className="about-container">
    <Header />

    <div className="about-card-container">
      <img
        className="about-image"
        alt="about"
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
      />
      <img
        className="about-large-image"
        alt="about"
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
      />
    </div>
  </div>
)
export default About
