import React, { Component } from "react"
import SkyLight from "react-skylight"
import data from "../data/data.json"
import { Link } from "gatsby"
import { Parser } from "html-to-react"
class Newsletter extends Component {
  constructor() {
    super()
    this.state = {
      posts: data.dispatches.reduce((ary, ele) => {
        //nondestructive reverse
        ary.unshift(ele)
        return ary
      }, []),
      viewing: {},
    }
  }
  render() {
    let htmlParser = new Parser()
    let renderElement = htmlParser.parse(this.state.viewing.content)

    var dialog = {
      overflow: "auto",
      backgroundColor: "#ffe3bf",
      width: "90%",
      height: "90%",
      top: "5%",
      left: "5%",
      margin: 0,
      boxShadow: "7px 10px 23px 0px rgba(0,0,0,0.55)",
      border: "10px solid #000",
      borderRadius: "0px",
      minHeight: "500px",
      minWidth: "300px",
    }

    var closeButton = {
      display: "none",
    }
    return (
      <React.Fragment>
        <div className="formatted c">
          <h2>PARTY DISPATCHES</h2>
          {this.state.posts.map((x, i) => {
            if (x.link.slice(0, 1) === "/") {
              return (
                <Link
                  key={i}
                  to={x.link}
                  className="black-text"
                  activeClassName=""
                  state={{ redirect: x.redirect }}
                >
                  <h4>{x.title}</h4>
                  <h6>{x.date}</h6>
                  <p>{x.subtitle}</p>
                </Link>
              )
            } else if (x.link.slice(0, 4) === "http") {
              return (
                <a className="black-text" key={i} href={x.link}>
                  <h4>{x.title}</h4>
                  <h6>{x.date}</h6>
                  <p>{x.subtitle}</p>
                </a>
              )
            } else {
              return (
                <div
                  key={i}
                  onClick={() => {
                    this.setState({ viewing: x })
                    this.popup.show()
                  }}
                >
                  <h4>{x.title}</h4>
                  <h6>{x.date}</h6>
                  <p>{x.subtitle}</p>
                </div>
              )
            }
          })}
        </div>
        <SkyLight
          dialogStyles={dialog}
          closeButtonStyle={closeButton}
          hideOnOverlayClicked
          ref={ref => (this.popup = ref)}
          transitionDuration={50}
        >
          <div className="pop-up-header">
            <h2>
              <b>Folk ARPS bulletin board</b>
            </h2>
          </div>
          <div className="formatted c">{renderElement}</div>
        </SkyLight>
      </React.Fragment>
    )
  }
}

export default Newsletter
