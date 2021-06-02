import React from "react"
import { Link } from "gatsby"
import Logo from "../images/logo.svg"

const Header = ({ siteTitle }) => (
  <header>
    <div className='container'>
      <div className="header-content">
        <Link to={'/'} className='logo'>
          <img src={Logo} alt="OurPetPolicy" />
        </Link>
        <nav className='header-nav'>
          <ul className='header-nav-list'>
            <li className='with-dropdown'>
              <Link activeClassName={"active-link"} to='/landlord-portal'>Landlord portal</Link>
              <ul className='dropdown'>
                <li><Link activeClassName={"active-link"} to='/calculator/'>Calculator</Link></li>
                <li><Link activeClassName={"active-link"} to='/'>Advanced Calculator</Link></li>
              </ul>
            </li>
            <li>
              <Link activeClassName={"active-link"} to='/tenant-portal'>Tenant portal</Link>
            </li>
            <li>
              <Link activeClassName={"active-link"} to='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link activeClassName={"active-link"} to='/FAQ'>FAQ</Link>
            </li>
            <li>
              <Link activeClassName={"active-link"} to='/contact-us'>Contact us</Link>
            </li>
            <li>
              <button className='btn btn-md primary'>Get started</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

export default Header
