import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import DarkModeToggle from "./dark-mode"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <div className="header">
        <h1 className="text-5xl">
          <Link>
            {title}
          </Link>
        </h1>
        <DarkModeToggle />
      </div>
    )
  } else {
    header = (
      <div className="header">
        <h1>
          <Link>
            {title}
          </Link>
        </h1>
        <DarkModeToggle />
      </div>
    )
  }

  return (
    <div>
      <div>
        <header>{header}</header>
      </div>
      <div>
        <main>{children}</main>
        <footer>Copyright © Yuki Uehara , {new Date().getFullYear()}</footer>
      </div>
    </div>
  )
}

export default Layout
