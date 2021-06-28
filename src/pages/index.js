import * as React from "react"
import { Link } from "gatsby"
import background from "../images/banner.jpg"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: {title: {eq: "homepage"}}) {
        frontmatter {
          heading
          primaryBtn
          secondaryBtn
          hero {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;

  const {
    heading,
    primaryBtn,
    secondaryBtn,
    hero,
  } = frontmatter

  return (
    <Layout className="homepage">
      <Seo title="Home" />

      {/*banner*/}
      <section className="hero hero-page">
        <GatsbyImage
          style={{
            gridArea: "1 / 1"
          }}
          alt={heading}
          objectFit="cover"
          placeholder="blurred"
          image={getImage(hero)}
        />
        <div
          style={{
            gridArea: "1/1",
            position: "relative",
            placeItems: "center",
            display: "grid"
          }}
        >
          <div className="container">
            <div className="hero-content">
              <div className="hero-left">
                <h1 className="h1">{heading}</h1>
                <div>
                  <Link to="/landlords/" className="btn btn-lg primary">{primaryBtn}</Link>
                  <Link to="/tenants/" className="btn btn-lg secondary">{secondaryBtn}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
