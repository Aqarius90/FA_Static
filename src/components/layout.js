/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "bootstrap/dist/css/bootstrap.css"
import "../../scss/index.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="root">
      <div className="container">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="col-12 outer flex">
          <div className="inner flex">
            <div className="outer flex">
              <main className="flex ub">{children}</main>
              <footer className="d-none">© {new Date().getFullYear()}</footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
