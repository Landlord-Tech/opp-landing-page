import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import HTMLContent from "../components/HTMLContent"
import Seo from "../components/seo"

const AccessibilityCommitment = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "accessibilityCommitment" } }) {
        html
        frontmatter {
          title
          heroHeading
        }
      }
    }
  `)

  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { heroHeading } = frontmatter
  return (
    <Layout>
      <Seo title="Accessibility Commitment | OurPetPolicy" description="Ultra Labs is committed to ensuring digital accessibility for all visitors" />
      <section className="small-hero xs">
        <div className="container">
          <div className="small-hero-content">
            <div className="small-hero-text">
              <h1 className="h1">{heroHeading}</h1>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <HTMLContent content={html} className="dynamic-content" />
        </div>
      </section>
    </Layout>
  )
}

export default AccessibilityCommitment
