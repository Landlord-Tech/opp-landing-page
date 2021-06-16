import React from "react"
import { Link } from "gatsby"
import Icon from "./Icon"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container fluid">
        <Link className="logo" to={'/'}>
          <StaticImage
            src="../images/logo-white.svg"
            alt="OurPetPolicy"
            formats={["AUTO", "WEBP", "AVIF"]}
            placeholder="transparent"
          />
        </Link>
        <div className='footer-top'>
          <div className='footer-top-col'>
            <h4 className='h4'><Link activeClassName='active-link' to={'/'}>Landlord portal</Link></h4>
            <ul>
              <li><Link to={'/'}>Lorem ipsum</Link></li>
              <li><Link to={'/'}>Lorem ipsum</Link></li>
              <li><Link to={'/'}>Lorem ipsum</Link></li>
            </ul>
          </div>
          <div className='footer-top-col'>
            <h4 className='h4'><Link activeClassName='active-link' to={'/'}>Tenant portal</Link></h4>
            <ul>
              <li><Link to={'/'}>Lorem ipsum</Link></li>
              <li><Link to={'/'}>Lorem ipsum</Link></li>
              <li><Link to={'/'}>Lorem ipsum</Link></li>
            </ul>
          </div>
          <div className='footer-top-col'>
            <h4 className='h4'><Link activeClassName='active-link' to={'/'}>Pricing</Link></h4>
            <ul>
              <li><Link to={'/'}>Lorem ipsum</Link></li>
              <li><Link to={'/'}>Lorem ipsum</Link></li>
              <li><Link to={'/'}>Lorem ipsum</Link></li>
            </ul>
          </div>
          <div className='footer-top-col'>
            <h4 className='h4'><Link activeClassName='active-link' to={'/'}>FAQ</Link></h4>
            <ul>
              <li><Link to={'/'}>Lorem ipsum</Link></li>
              <li><Link to={'/'}>Lorem ipsum</Link></li>
              <li><Link to={'/'}>Lorem ipsum</Link></li>
            </ul>
          </div>
          <div className='footer-top-col'>
            <h4 className='h4'><Link activeClassName='active-link' to={'/'}>Contact us</Link></h4>
            <Link to={'/'}>
              <Icon
                color='#fff'
                size={40}
                icon='fb'
              />
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <ul>
            <li>
              <Link to='/terms-and-conditions'>Terms and conditions</Link>
            </li>
            <li>
              <Link to='/privacy-policy'>Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
