import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Declass from "../components/DeclassStamp"
import SEO from "../components/seo"

const TTIPLayout = ({ text, link, seoName, children }) => {
  return (
    <Layout>
      <SEO title={seoName} />
      <Declass></Declass>
      <div className="row">
        <div className="col-12 col-sm-4 col-md-3 col-lg-2 show-hover order-sm-2">
          <div className="btn btn-block btn-classified inv-hide-hover">
            TTIP
          </div>
          <Link
            className="btn btn-block btn-classified hide-hover"
            activeClassName="btn btn-block btn-classified-active"
            to="/TTIP/TheTheory"
          >
            The Theory
          </Link>
          <Link
            className="btn btn-block btn-classified hide-hover"
            activeClassName="btn btn-block btn-classified-active"
            to="/TTIP/ThePlatoon"
          >
            The FA Platoon
          </Link>
          <Link
            className="btn btn-block btn-classified hide-hover"
            activeClassName="btn btn-block btn-classified-active"
            to="/TTIP/FTMembers"
          >
            Fireteam Members
          </Link>
          <Link
            className="btn btn-block btn-classified hide-hover"
            activeClassName="btn btn-block btn-classified-active"
            to="/TTIP/CommsProtocol"
          >
            Comms Fundamentals
          </Link>
          <Link
            className="btn btn-block btn-classified hide-hover"
            activeClassName="btn btn-block btn-classified-active"
            to="/TTIP/ClosingNotes"
          >
            Closing Notes
          </Link>
        </div>
        <div className="col">
          <main className="flex ub">{children}</main>
        </div>
      </div>
      <Link className="btn btn-block btn-classified" to={link}>
        {text}
      </Link>
    </Layout>
  )
}

TTIPLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TTIPLayout
