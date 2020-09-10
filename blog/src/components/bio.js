/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div className="w-1/3">
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        className="important-block my-0 mx-auto rounded-full"
      />
      <p className="text-xl text-center mt-6">{author.name}</p>
      <p className="text-center text-sm">(<a href={`https://twitter.com/${social.twitter}`}>@psnzbss</a>)</p>
      <p className="mt-3">{author.summary}</p>
    </div>
  )
}

export default Bio
