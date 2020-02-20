import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NKVD from "../images/eVadzuN.jpg"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <p></p>
    <h1 class="classified c classified--title">[404]</h1>
    <p></p>
    <p></p>
    <p></p>
    <img className="w-50 mx-auto" src={NKVD}></img>
    <h3 className="russian c">THIS INCIDENT HAS BEEN REPORTED</h3>
  </Layout>
)

export default NotFoundPage
