import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Faq from "../components/faq"
import Seo from "../components/seo"

const FAQ = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "faq" } }) {
        frontmatter {
          metaTitle
          metaDescription
          heroHeading
          heroSubhead
          faqHeading
          faqList {
            faqQuestion
            faqAnswer
          }
        }
      }
    }
  `)

  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  const {
    metaTitle,
    metaDescription,
    heroHeading,
    heroSubhead,
    faqHeading,
    faqList,
  } = frontmatter

  return (
    <Layout>
      <Seo title={metaTitle} description={metaDescription} />
      <section className="small-hero md">
        <div className="container">
          <div className="small-hero-content">
            <div className="small-hero-text">
              <h1 className="h1">{heroHeading}</h1>
              <p className="pre-text">{heroSubhead}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container">
          <h2 className="h2 text-center">{faqHeading}</h2>
          <Faq data={faqList} />
        </div>
      </section>
    </Layout>
  )
}

export default FAQ
