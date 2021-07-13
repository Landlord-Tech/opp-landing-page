const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`./src/templates/blogPostTemplate.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { path: { regex: "/blog/" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date
              path
            }
          }
        }
      }
    }
  `)
  // Handle errors
  console.log(result)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)
}
