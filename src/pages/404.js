import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"

const NotFoundPage = props => {
  const { pathname } = useLocation()
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

  const redirectedPath1 = pathname.includes(
    "what-landlords-need-to-know-about-esas-in-2021"
  )
  const redirectedPath2 = pathname.includes(
    "the-landlords-guide-to-tenants-with-pets"
  )

  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    if (!redirectedPath1 && !redirectedPath2) {
      setLoading(false)
    }
    if (redirectedPath1) {
      window.location =
        "https://ourpetpolicy.com/resources/what-landlords-need-to-know-about-esas-in-2021/"
    }
    if (redirectedPath2) {
      window.location =
        "https://ourpetpolicy.com/resources/the-landlords-guide-to-tenants-with-pets/"
    }
  }, [])

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
