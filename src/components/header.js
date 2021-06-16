import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Icon from "./Icon"
import useLockedBody from "../hooks/useLockedBody"

const Header = ({ pathname }) => {
  const [openedMenu, setOpenedMenu] = useState(false)
  const [locked, setLocked] = useLockedBody()

  const dark = pathname === "/" || pathname === "/landlords" || pathname === "/tenants"
  const landlords = pathname === "/landlords"
  const tenants = pathname === "/tenants"

function handleMenuToggle() {
  setOpenedMenu(!openedMenu)
  setLocked(!locked)
}
  return (
    <header className={`header ${ dark ? "dark-header" : "" } ${openedMenu ? 'opened' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/*<a href={'https://www.ourpetpolicy.com/'} className='logo'>
          <img src={Logo} alt="OurPetPolicy" />
        </a>*/}

          {/*for later use*/}
          <Link to={"/"} className="logo">
            {
              dark ?
                <StaticImage
                  src="../images/logo-white.svg"
                  alt="OurPetPolicy"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  placeholder="transparent"
                /> :
                <StaticImage
                  src="../images/logo.svg"
                  alt="OurPetPolicy"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  placeholder="transparent"
                />
            }

          </Link>
          <button
            className='no-style burger-menu'
            onClick={handleMenuToggle}
          >
            <Icon
              color={`${dark ? '#fff' : '#000'}`}
              size={24}
              icon={`${openedMenu ? 'close' : 'burger'}`}
            />
          </button>
          <nav className="header-nav">
            <ul className='header-nav-list'>
              {
                !landlords && !tenants &&
                <>
                  <li className="with-dropdown">
                    <Link activeClassName={"active-link"} to="/landlords">Landlord</Link>
                  </li>
                  <li>
                    <Link activeClassName={"active-link"} to="/tenants">Tenant</Link>
                  </li>
                </>
              }
              {
                landlords &&
                <>
                  <li>
                    <Link activeClassName={"active-link"} to="/calculator-no-pets-allowed/">ROI calculator</Link>
                  </li>
                  <li>
                    <Link activeClassName={"active-link"} to="/pricing/">Pricing</Link>
                  </li>
                </>
              }


              <li>
                <Link activeClassName={"active-link"} to="/FAQ">FAQ</Link>
              </li>
              <li>
                <Link activeClassName={"active-link"} to="/contact-us">Contact us</Link>
              </li>
              <li className='nav-button-group'>
                <button className="btn btn-md primary get-started-btn">Get started</button>
                <button className={`btn btn-md  login-btn ${dark ? "secondary" : "secondary-dark"}`}>Login</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}


export default Header
