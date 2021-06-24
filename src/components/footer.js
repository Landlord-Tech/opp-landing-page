import React from "react"
import { Link } from "gatsby"
import Icon from "./Icon"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Link className="logo" to={'/'}>
          <StaticImage
            src="../images/logo-white.svg"
            alt="OurPetPolicy"
            formats={["AUTO", "WEBP", "AVIF"]}
            placeholder="transparent"
          />
        </Link>
        <ul className='footer-top'>
          <li className='footer-top-col'>
            <h4 className='h4'><Link  to={'/landlords/'}>Landlords</Link></h4>
          </li>
          <li className='footer-top-col'>
            <h4 className='h4'><Link  to={'/tenants/'}>Tenants</Link></h4>
          </li>
          <li className='footer-top-col'>
            <h4 className='h4'><Link  to={'/pricing/'}>Pricing</Link></h4>
          </li>
          <li className='footer-top-col'>
            <h4 className='h4'><Link  to={'/pricing/#faq'}>FAQ</Link></h4>
          </li>
          <li className='footer-top-col'>
            <h4 className='h4'><Link  to={'/contact-us/'}>Contact us</Link></h4>
            <Link to={'/'}>
              <Icon
                color='#fff'
                size={40}
                icon='fb'
              />
            </Link>
          </li>
        </ul>
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
