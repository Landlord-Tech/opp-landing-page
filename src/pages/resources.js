import React from "react"
import Layout from "../components/layout"

import BlogPostList from "../components/blog/BlogPostList"
import { graphql, useStaticQuery } from "gatsby"
import Seo from "../components/seo"

const News = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "blogList" } }) {
        frontmatter {
          metaTitle
          metaDescription
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

  const { heroHeading, heroText, metaTitle, metaDescription } = frontmatter
  return (
    <Layout>
      <Seo title={metaTitle} description={metaDescription} />
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
