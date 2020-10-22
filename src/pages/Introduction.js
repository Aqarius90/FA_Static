import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Introduction" />
    <h2>Introduction</h2>

    <h3>Everyone is welcome</h3>
    <p>
      You won't need any mods, just the latest non-dev version of ArmA 3
      (including the APEX expansion) and TeamSpeak 3. There are no applications
      or tests. We only ask that you read through our introductory information.
    </p>
    <p>
      Click on <em>The Basics</em> button bellow to get started...
    </p>
    <Link className="btn btn-block btn-classified" to="/Basics">
      Basics
    </Link>
  </Layout>
)

export default IndexPage
