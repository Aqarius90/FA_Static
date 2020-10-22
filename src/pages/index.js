import React from "react"
import VideoTabs from "../components/VideoTabs"
import Newsletter from "../components/Newsletter"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO />
    <div className="formatted c">
      <p></p>
      <h2>
        <b>Welcome</b>
      </h2>
      <p>
        FolkARPS is a friendly gaming community centred around Arma 3. Our
        regular sessions feature tactical game-play with consistent in-game
        organisation, multi-layered comms and a mix of coop and adversarial
        missions created by members of our community. However, we're not MilSim:
        there are no ranks or mandatory training - just friendly people.
      </p>
    </div>
    <p></p>
    <p></p>
    <VideoTabs></VideoTabs>
    <p></p>
    <p></p>
    <p></p>

    <noscript>
      <h3 className="text-danger text-center">
        <b>
          To access FAVKA archive, comrades are required to enable JavaScript,
          respond "yes" to any pop-ups, stare directly into their webcam, sing
          the first two verses of Над горами кружат вертолеты, and then reload
          the page.
        </b>
      </h3>
    </noscript>
    <p></p>
    <p></p>
    <Newsletter></Newsletter>
  </Layout>
)

export default IndexPage
