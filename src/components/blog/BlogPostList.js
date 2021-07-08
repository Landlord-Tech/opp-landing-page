import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PostCard from "./PostCard"

const BlogPostList = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              path
              date
            }
          }
        }
      }
    }
  `)
  let newData = data.allMarkdownRemark.edges.map(item => item.node.frontmatter)

  return (
    <div className="container mb-5 mt-5">
      {newData.map(page => (
        <PostCard data={page} />
      ))}
    </div>
  )
}

export default BlogPostList
