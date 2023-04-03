// Write your code here

import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="notfound-container">
    <Header />

    <div className="notfound-card-container">
      <img
        className="notfound-image"
        alt="not found"
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
      />
      <h1 className="heading">Lost Your Way?</h1>
      <p className="description">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </div>
)
export default NotFound
