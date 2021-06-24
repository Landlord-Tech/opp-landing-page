import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Icon from "./Icon"
import useLockedBody from "../hooks/useLockedBody"

const Header = ({ pathname, sticky }) => {
  const [openedMenu, setOpenedMenu] = useState(false)
  const [locked, setLocked] = useLockedBody()

  // const dark = pathname === "/" || pathname.includes("/landlords") || pathname.includes("/tenants/")
  // const landlords = pathname.includes("/landlords/")
  // const tenants = pathname.includes("/tenants/")

function handleMenuToggle() {
  setOpenedMenu(!openedMenu)
  setLocked(!locked)
}

  return (
    <header className={`header dark-header ${openedMenu ? 'opened' : ''} ${sticky ? 'sticky' : ''}`}>
      <div className="container fluid">
        <div className="header-content">
          {/*<a href={'https://www.ourpetpolicy.com/'} className='logo'>
          <img src={Logo} alt="OurPetPolicy" />
        </a>*/}

          {/*for later use*/}
          <Link to={"/"} className="logo">
            <StaticImage
              src="../images/logo-white.svg"
              alt="OurPetPolicy"
              formats={["AUTO", "WEBP", "AVIF"]}
              placeholder="transparent"
            />
          </Link>
          <button
            className='no-style burger-menu'
            onClick={handleMenuToggle}
          >
            <Icon
              color='#fff'
              size={24}
              icon={`${openedMenu ? 'close' : 'burger'}`}
            />
          </button>
          <nav className="header-nav">
            <ul className='header-nav-list'>
              <li className='with-dropdown'>
                <Link activeClassName={"active-link"} to="/landlords/">Landlord</Link>
                <ul className='dropdown-content'>
                  <li>
                    <Link activeClassName={"active-link"} to="/calculator-no-pets-allowed/">ROI calculator</Link>
                  </li>
                  <li>
                    <Link activeClassName={"active-link"} to="/pricing/">Pricing</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link activeClassName={"active-link"} to="/tenants/">Tenant</Link>
              </li>
              <li>
                <Link activeClassName={"active-link"} to="/contact-us/">Contact us</Link>
              </li>
              <li className='nav-button-group'>
                <Link to='/' className="btn btn-md primary get-started-btn">Get started</Link>
                <Link to='/' className='btn btn-md  login-btn secondary'>Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}


export default Header
