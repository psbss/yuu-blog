const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve(`./src/templates/blog-post.js`)
    const categoryPage = path.resolve(`./src/templates/categorypage.js`)
    resolve(
      graphql(
        `
        {
          blogposts: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 1000) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
          categories: allMarkdownRemark(filter: {frontmatter: {pagetype: {eq: "category"}}}) {
            edges {
              node {
                frontmatter {
                  categoryslug
                }
              }
            }
          }
        }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.blogposts.edges
        const categories = result.data.categories.edges

        // Create blog posts pages.
        posts.forEach((post, index) => {
          const previous = index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node

          createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })
        })

        // Create category posts pages.
        categories.forEach((category) => {
          createPage({
            path: `/category/${(category.node.frontmatter.categoryslug)}`,
            component: categoryPage,
            context: {
              slug: category.node.frontmatter.categoryslug,
            }
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
