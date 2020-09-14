import React from "react"
import TTIPLayout from "../../components/TTIPLayout"
import Lenin from "../../images/LeninHighQuality.png"

const Leninism = () => (
  <TTIPLayout
    text={<React.Fragment>Understood</React.Fragment>}
    link="/"
    seoName="TheTheory"
  >
    <h3>
      The Immortal Science of Modless Leninism with Folkish Characteristics
    </h3>
    <img
      className="w-100 mx-auto"
      alt="MUST DESTROY CAPITALISM"
      src={Lenin}
    ></img>
  </TTIPLayout>
)

export default Leninism
