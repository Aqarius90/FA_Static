import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const TTIP = () => (
  <Layout>
    <SEO title="TTIP" />
    <h1 className="c">
      Folk ARPS: T<em style={{ fontSize: "30%" }}>ools</em>, T
      <em style={{ fontSize: "30%" }}>ractors</em>, & P
      <em style={{ fontSize: "30%" }}>otatoes</em>
    </h1>

    <h3>Greetings, comrade!</h3>
    <p>
      On this page, you will find a brief overview of the TTP as practiced by
      Folk ARPS during FA sessions. Team games are at their best when every
      member does his best. Considering this, the purpose of this reference
      guide is to present each comrade with a consistent framework of action,
      which will let us all have a better time in game.
    </p>
    <p>
      This is not a definitive guide to Arma. This is not the definitive guide
      to infantry tactics. This is simply an approach. And in team games, which
      Arma is, it helps if everyone is aware of the approach the team is taking.
    </p>
    <Link className="btn btn-block btn-classified" to="/TTIP/TheTheory">
      The Mission
    </Link>
  </Layout>
)

export default TTIP
