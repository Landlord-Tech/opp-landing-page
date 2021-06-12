import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import background from "../images/homepage.jpg"
import Mouse from "../images/mouse.svg"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {

  return (
    <Layout className="homepage">
      <Seo title="Home" />
      <section className="hero" style={{ backgroundImage: `url(${background})` }}>
        <div className="container">
          <div className="hero-content">
            <div className="hero-left">
              <h1 className="h1">Stop Pet Damage In Its Tracks!</h1>
              <p>Are you ready to take the pet frustrations out of your rental portfolio? If you are looking to crack
                down on unauthorized pets, fraudulent ESA letters, waste management, and the damage and time it takes to
                deal with, you have come to the right place!</p>
              <button className="btn btn-lg primary-gradient">Get started</button>
            </div>

            <div className="animated-mouse">
              <img src={Mouse} alt="" />
              <p>Scroll</p>
            </div>
          </div>
        </div>
      </section>
      <section className='why-choose home-section'>
        <div className="container">
          <div className='why-choose-content'>
            <div className="img">
              <StaticImage
                src="../images/macbook.png"
                // width={300}
                // quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Why Choose OurPetPolicy?"
              />
            </div>
            <div className="text">
              <h2 className='h2'>Why Choose OurPetPolicy?</h2>
              <p>To build the best pet policy platform we created a team of lawyers, landlords, and property managers from many different states and backgrounds to make sure we built a pet policy that covers all loopholes, is easy to manage, and makes the rules crystal clear to the tenants.  In just a few minutes, you can add your rental properties, customize a lawyer-vetted policy for your state, and send a contract to your tenant for an electronic signature. </p>
            </div>
          </div>
        </div>
      </section>

      <section className='no-more-section'>
        <div className="container">
          <h2 className="h2">No more hassle and potential legal disputes</h2>
          <div className="no-more-content">
            <div className='no-more-item'>

            </div>
            <div className='no-more-item'>

            </div>
            <div className='no-more-item'>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
