import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"

const NotFoundPage = () => {
  const { pathname } = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    if (
      [
        "/tenants/",
        "/tenants",
        "/landlords/",
        "/landlords",
        "/calculator-no-pets-allowed/",
        "/calculator-no-pets-allowed",
        "/calculator-pets-allowed/",
        "/calculator-pets-allowed",
        "/pricing/",
        "/pricing",
        "/resources/emotional-support-animals-service-animals-and-pets-whats-the-difference",
        "/resources/considerations-tenants-make-when-choosing-a-rental",
        "/resources/the-opportunity-cost-of-not-verifying-tenant-esa-etters",
        "/resources/protecting-your-rental-property-from-pet-damage",
        "/resources/the-true-cost-of-having-a-bad-pet-policy",
        "/resources/why-pet-fees-are-an-essential-landlord-strategy",
        "/resources/five-ways-to-keep-your-landscape-looking-great-when-you-have-pet-owning-tenants",
        "/resources/what-landlords-need-to-know-about-esas-in-2021",
        "/resources/the-landlords-guide-to-tenants-with-pets/",
      ].includes(pathname)
    ) {
      window.location = `https://landlordtech.com${pathname}`
      return
    }
    setLoading(false)
  }, [])

  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "notFound" } }) {
        frontmatter {
          title
          heroHeading
          heroText
          heroImg {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          primaryBtn
          secondaryBtn
        }
      }
    }
  `)

  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  const {
    heroHeading,
    heroText,
    heroImg,
    primaryBtn,
    secondaryBtn,
  } = frontmatter

  return !loading ? (
    <Layout className="landing">
      <Seo title="404: Not found" />
      <section className="hero error-page">
        <GatsbyImage
          className="grid-1"
          alt={heroHeading}
          image={getImage(heroImg)}
          formats={["auto", "webp", "avif"]}
          objectFit="cover"
        />
        <div className="banner-grid">
          <div className="container">
            <div className="hero-content">
              <div className="hero-left">
                <h1 className="h1">{heroHeading}</h1>
                <p className="hero-text">{heroText}</p>
                <div className="button-group">
                  <Link to="/" className="btn btn-lg primary">
                    {primaryBtn}
                  </Link>
                  <Link to="/contact-us" className="btn btn-lg secondary">
                    {secondaryBtn}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  ) : null
}

export default NotFoundPage
