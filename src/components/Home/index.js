// Write your code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />

    <div className="home-card-container">
      <img
        className="home-image"
        alt="home"
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
      />
      <img
        className="home-large-image"
        alt="home"
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
      />
    </div>
  </div>
)
export default Home
