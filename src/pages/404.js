import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const NotFoundPage = () => {

  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: {title: {eq: "notFound"}}) {
        frontmatter {
          title
          heroHeading
          heroText
          heroImg
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

  return (
    <Layout className="homepage">
      <Seo title="404: Not found" />
      <section className="hero error-page">
        <GatsbyImage
          style={{
            gridArea: "1 / 1"
          }}
          layout="fullWidth"
          // aspectRatio={2}
          alt=""
          src={heroImg}
          image={heroImg}
          formats={["auto", "webp", "avif"]}
          objectPosition={"70%"}
          objectFit="cover"
          placeholder="blurred"
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
                <h1 className="h1">{heroHeading}</h1>
                <p className="hero-text">{heroText}</p>
                <div className='button-group'>
                  <Link to='/' className="btn btn-lg primary">{primaryBtn}</Link>
                  <Link to='/contact-us' className="btn btn-lg secondary">{secondaryBtn}</Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )

}

export default NotFoundPage
