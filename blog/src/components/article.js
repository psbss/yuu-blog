import React from "react"
import { Link } from "gatsby"
import DarkModeToggle from "./dark-mode"

const ArticleLayout = ({ title, children }) => {
  return (
    <div className="container mx-auto">
      <header className="mb-6 mx-2 mt-4">
        <div className="header">
          <h1 className="text-5xl">
            <Link>
              {title}
            </Link>
          </h1>
          <DarkModeToggle />
        </div>
      </header>
      <main className="">
        {children}
      </main>
      <footer>Yuki Uehara , {new Date().getFullYear()}</footer>
    </div>
  )
}

export default ArticleLayout