import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/contactForm"
import Icon from "../components/Icon"
import { graphql, useStaticQuery } from "gatsby"
import Seo from "../components/seo"

const ContactUs = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "contact" } }) {
        frontmatter {
          heroHeading
          heroText
          sec1Heading
          contactList {
            ContactItem
            icon
          }
        }
      }
    }
  `)

  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  const { heroHeading, heroText, sec1Heading, contactList } = frontmatter

  return (

    <Layout>
      <Seo title="Contact Us | OurPetPolicy" description="We’d love to hear from you! Please contact us with questions, suggestions, and feedback!" />
      <section className="small-hero">
        <div className="container">
          <div className="small-hero-content">
            <div className="small-hero-text">
              <h1 className="h1">{heroHeading}</h1>
              <p>{heroText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-list-wrapper">
              <h2 className="h2">{sec1Heading}</h2>
              <ul className="contact-list">
                {contactList.map(({ ContactItem, icon }, index) => {
                  return (
                    <li key={index}>
                      <Icon icon={icon} size={24} />
                      {icon === "email" ? (
                        <a href={`mailto: ${ContactItem.join(" ")}`}>
                          {ContactItem.join(" ")}
                        </a>
                      ) : ContactItem.join(" ")}
                    </li>
                  )
                })}
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
