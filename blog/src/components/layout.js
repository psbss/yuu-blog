import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import DarkModeToggle from "./dark-mode"

const Layout = ({ title, children }) => {
  return (
    <div className="container mx-auto">
      <header class="mb-6 mx-2 mt-4">
        <div className="flex">
          <h1 className="text-2xl sm:text-5xl pt-4 sm:p-0">
            <Link to="/">
              {title}
            </Link>
          </h1>
          <DarkModeToggle />
        </div>
      </header>
      <div className="mx-4 lg:flex">
        <div className="hidden lg:contents">
          <Bio />
        </div>
        <main className="lg:w-2/3">{children}</main>
      </div>
      <footer className="mt-6 mb-4 text-center">Yuki Uehara , {new Date().getFullYear()}</footer>
    </div >
  )
}

export default Layout
