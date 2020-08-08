import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const CategoryPageTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.frontmatter.categoryname} />
      <h1>{post.frontmatter.categoryname}</h1>
      <Categoryposts category={post.frontmatter.categoryslug} />
    </Layout>
  )
}

export default CategoryPageTemplate

export const pageQuery = graphql`
  query CategoryPageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { categoryslug: { eq: $slug } })
    {
      frontmatter {
        categoryname
        categoryslug
      }
    }
  }
`
