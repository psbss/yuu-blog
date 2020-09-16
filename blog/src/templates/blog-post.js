import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from "react-share"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        pagePath={post.frontmatter.pagepath}
      />
      <article>
        <div className="mb-6">
          <h1 className="text-2xl">
            {post.frontmatter.title}
          </h1>
          <p className="text-sm">
            {post.frontmatter.date}
          </p>
        </div>
        <section className="leading-7" dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <TwitterShareButton title={post.frontmatter.title + "\n"} via="psnzbss" url={location.href}>
          <TwitterIcon round size={32} />
        </TwitterShareButton>
        <LineShareButton title={post.frontmatter.title + "\n"} via="psnzbss" url={location.href}>
          <LineIcon round size={32} />
        </LineShareButton>
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        description
        pagepath
      }
    }
  }
`
