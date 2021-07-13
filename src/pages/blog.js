import React from "react"
import Layout from "../components/layout"

import BlogPostList from "../components/blog/BlogPostList"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link, useStaticQuery } from "gatsby"

const News = () => {
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
  return (
    <Layout className="landing">
      <section className="hero blog-page">
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
                <h1 className="h1">
                  Catchy title for contact us page goes here
                </h1>
                <p className="hero-text">
                  When it comes to pets, let us do the heavy lifting for as
                  little as $5/month{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BlogPostList />
    </Layout>
  )
}

export default News
