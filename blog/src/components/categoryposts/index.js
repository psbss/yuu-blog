import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const CategoryPosts = (props) => (
  <StaticQuery
    query={graphql`
    query{
        allMarkdownRemark{
          edges{
            node{
              frontmatter{
                pagetype
                category
                title
                date
              }
              excerpt
            }
          }
        }
      }
    `
    }

    render={(data) => {
      const postlists = data.allMarkdownRemark.edges
      const posts = postlists.filter((category) => {
        return (category.node.frontmatter.category === props.category)
      })

      return (
        <div>
          {posts.map(({ node }) => {
            return (
              <div key={node.frontmatter.title}>
                <p>{node.frontmatter.date}</p>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            )
          })}
        </div>
      );
    }}
  />
)
export default CategoryPosts