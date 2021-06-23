import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/contactForm"
import Icon from "../components/Icon"
import { graphql, useStaticQuery } from "gatsby"

const ContactUs = () => {

  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: {title: {eq: "contact"}}) {
        frontmatter {
          title
          heroHeading
          heroText
          sec1Heading
          contactList {
            contactField
            icon
          }
        }
      }
    }
  `)

  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  const {
    title,
    heroHeading,
    heroText,
    sec1Heading,
    contactList,
  } = frontmatter

  console.log({ data })

  return (
    <Layout>
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

      <section className='section contact-section'>
        <div className="container">
          <div className="contact-content">
            <div className='contact-list-wrapper'>
              <h2 className='h2'>{sec1Heading}</h2>
              <ul className='contact-list'>
                {
                  contactList.map(({contactField, icon}, index) => {
                    return (
                      <li key={index}>
                        <Icon
                          icon={icon}
                          size={24}
                        />
                        {contactField}
                      </li>
                    )
                  })
                }
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
