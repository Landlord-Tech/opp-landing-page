import React from "react"
import Layout from "../components/layout"

import BlogPostList from "../components/blog/BlogPostList"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link, useStaticQuery } from "gatsby"

const News = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "blogList" } }) {
        frontmatter {
          heroHeading
          heroText
          heroImg {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `)

  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  const { heroHeading, heroText } = frontmatter
  return (
    <Layout>
      <section className="small-hero xs">
        <div className="container">
          <div className="small-hero-content">
            <div className="small-hero-text">
              <h1 className="h1">{heroHeading}</h1>
              <p className="hero-text">{heroText}</p>
            </div>
          </div>
        </div>
      </section>
      <BlogPostList />
    </Layout>
  )
}

export default News
