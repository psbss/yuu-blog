import React from "react"
import { Link } from "gatsby"
import DarkModeToggle from "./dark-mode"

const ArticleLayout = ({ title, children }) => {
  return (
    <div className="container mx-auto">
      <header className="mb-6 mx-2 mt-4">
        <div className="flex">
          <h1 className="text-2xl sm:text-5xl pt-4 sm:p-0">
            <Link to="/">
              {title}
            </Link>
          </h1>
          <DarkModeToggle />
        </div>
      </header>
      <main className="mx-2 lg:mx-40">
        {children}
      </main>
      <footer className="text-center my-4">Yuki Uehara , {new Date().getFullYear()}</footer>
    </div>
  )
}

export default ArticleLayout