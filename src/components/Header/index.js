// Write your code here
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="nav-container">
      <Link className="link" to="/">
        <img
          className="website-logo"
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            data-testid="hamburgerIconButton"
            className="trigger-button"
            type="button"
          >
            <GiHamburgerMenu size="30" color="#616e7c" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              data-testid="closeButton"
              type="button"
              className="close-button"
              onClick={() => close()}
            >
              <IoMdClose size="30" color="#616e7c" />
            </button>

            <ul className="ul-container">
              <Link className="link" to="/">
                <li className="list-container">
                  <AiFillHome size="30" color="#616e7c" />
                  <h1 className="home-text">Home</h1>
                </li>
              </Link>

              <Link className="link" to="/about">
                <li className="list-container">
                  <BsInfoCircleFill size="30" color="#616e7c" />
                  <h1 className="home-text">About</h1>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default Header
