import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { useLocation } from '@reach/router';

const NotFoundPage = (props) => {
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

  const redirectedPath1 =
    pathname === "/what-landlords-need-to-know-about-esas-in-2021/"
  const redirectedPath2 =
    pathname === "/the-landlords-guide-to-tenants-with-pets/"
  const redirectedPath3 =
    pathname === "/resources/"
  console.log(redirectedPath1);
  console.log(redirectedPath2);
  console.log(redirectedPath3);

  React.useEffect(() => {
    if (redirectedPath1) {
      console.log(redirectedPath1);
      window.location =
        "https://resources.ourpetpolicy.com/what-landlords-need-to-know-about-esas-in-2021/"
    }
    if (redirectedPath2) {
      console.log(redirectedPath2);
      window.location =
        "https://resources.ourpetpolicy.com/the-landlords-guide-to-tenants-with-pets/"
    }
    if (redirectedPath3) {
      console.log(redirectedPath3);
      window.location =
        "https://resources.ourpetpolicy.com/resources/"
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

  console.log(props);
  return (!redirectedPath1 && !redirectedPath2 && !redirectedPath3) ?(
    <Layout className="homepage">
      <Seo title="404: Not found" />
      <section className="hero error-page">
        <GatsbyImage
          style={{
            gridArea: "1 / 1",
          }}
          alt={heroHeading}
          image={getImage(heroImg)}
          formats={["auto", "webp", "avif"]}
          objectFit="cover"
        />
        <div
          style={{
            gridArea: "1/1",
            position: "relative",
            placeItems: "center",
            display: "grid",
          }}
        >
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
