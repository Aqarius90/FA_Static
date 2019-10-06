import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.png"
import burger from "../images/burger.png"

const Header = ({ siteTitle }) => {
  return (
    <header>
      <div className="col-12 outer outer-top">
        <div className="inner">
          <div className="row">
            <div className="col">
              <Link to="/">
                <img src={logo} className="logo" alt="FA LOGO" />
              </Link>
            </div>
            <div className="col-4 d-sm-none">
              <label for="menu-toggle">
                <img src={burger} alt="nav button" />
              </label>
            </div>
          </div>
        </div>
      </div>
      <input type="checkbox" id="menu-toggle" />
      <div className="col-12 outer d-sm-block" id="menu">
        <div className="inner">
          <div className="row">
            <Link
              to="/"
              className="btn btn-agit col-12 col-sm-4 col-lg-2"
              activeClassName="btn btn-agit btn-agit-active col-12 col-sm-4 col-lg-2"
            >
              Home
            </Link>
            <Link
              to="/Introduction/"
              className="btn btn-agit col-12 col-sm-4 col-lg-2"
              activeClassName="btn btn-agit btn-agit-active col-12 col-sm-4 col-lg-2"
            >
              Introduction
            </Link>
            <Link
              to="/Classified/"
              className="btn btn-agit col-12 col-sm-4 col-lg-2"
              activeClassName="btn btn-agit btn-agit-active col-12 col-sm-4 col-lg-2"
            >
              Classified
            </Link>
            <Link
              to="/Insignia/"
              className="btn btn-agit col-12 col-sm-4 col-lg-2"
              activeClassName="btn btn-agit btn-agit-active col-12 col-sm-4 col-lg-2"
            >
              Insignia
            </Link>
            <a
              className="btn btn-agit col-12 col-sm-4 col-lg-2"
              href="http://www.Discord.gg/0Z8wIyiaekveqtZ4"
            >
              Discord
            </a>
            <a
              className="btn btn-agit col-12 col-sm-4 col-lg-2"
              href="https://www.folkarps.com/forum/"
            >
              Forum
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
