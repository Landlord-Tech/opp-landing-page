import React from "react"
import Layout from "../components/layout"
import { func } from "prop-types"
import ContactForm from "../components/contactForm"
import Icon from "../components/Icon"

const ContactUs = () => {

  return (
    <Layout>
      <section className="small-hero">
        <div className="container">
          <div className="small-hero-content">
            <div className="small-hero-text">
              <h1 className="h1">Catchy title for contact us page goes here</h1>
              <p>When it comes to pets, let us do the heavy lifting for as little as $5/month</p>
            </div>
          </div>
        </div>
      </section>

      <section className='section contact-section'>
        <div className="container">
          <div className="contact-content">
            <div className='contact-list-wrapper'>
              <h2 className='h2'>Reach us here</h2>
              <ul className='contact-list'>
                <li>
                  <Icon
                    icon='phone'
                    size={24}
                  />
                  (305) 555-4446
                </li>
                <li>
                  <Icon
                    icon='cellphone-android'
                    size={24}
                  />
                  (305) 555-4555
                </li>
                <li>
                  <Icon
                    icon='email-outline'
                    size={24}
                  />
                  wpestate@gmail.com
                </li>
                <li>
                  <Icon
                    icon='fax'
                    size={24}
                  />
                  (305) 555-4555
                </li>
                <li>
                  <Icon
                    icon='skype'
                    size={24}
                  />
                  skypeidname
                </li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </div>

      </section>


    </Layout>
  )
}

export default ContactUs
