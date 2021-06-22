import * as React from "react"
import { Link } from "gatsby"
import background from "../images/banner.jpg"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: {title: {eq: "homepage"}}) {
        frontmatter {
          heading
          primaryBtn
          secondaryBtn
          hero
        }
      }
    }
  `)
  const heading = data.markdownRemark.frontmatter.heading
  const primaryBtn = data.markdownRemark.frontmatter.primaryBtn
  const secondaryBtn = data.markdownRemark.frontmatter.secondaryBtn
  const hero = data.markdownRemark.frontmatter.hero
  console.log(data.markdownRemark.frontmatter)

  return (
    <Layout className="homepage">
      <Seo title="Home" />

      {/*banner*/}
      <section className="hero hero-page">
        <GatsbyImage
          style={{
            gridArea: "1 / 1"
          }}
          layout="fullWidth"
          src={hero}
          // aspectRatio={2}
          alt={heading}
          formats={["auto", "webp", "avif"]}
          // objectPosition={"70%"}
          objectFit="cover"
          placeholder="blurred"
         image={hero}/>
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
