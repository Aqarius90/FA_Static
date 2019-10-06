import React, { Component } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import data from "../data/data.json"

class VideoTabs extends Component {
  constructor() {
    super()
    this.state = { tabIndex: 0, vids: data.youtube }
  }

  switchVid = x => {
    console.log(x)
    if (
      this.state.tabIndex + x < this.state.vids.length &&
      this.state.tabIndex + x > -1
    ) {
      console.log(this.state.tabIndex)
      this.setState({ tabIndex: this.state.tabIndex + x })
      console.log(this.state.tabIndex)
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col-1 d-flex pr-0">
          <button
            className="btn btn-block btn-classified c flex-column rounded-0"
            onClick={() => this.switchVid(-1)}
          >
            <b>«</b>
          </button>
        </div>
        <div className="col-10 px-0 bg-dark">
          <Tabs
            selectedIndex={this.state.tabIndex}
            onSelect={tabIndex => this.setState({ tabIndex })}
          >
            <TabList className="d-none">
              {this.state.vids.map(i => (
                <Tab key={i}></Tab>
              ))}
            </TabList>
            {this.state.vids.map((x, i) => (
              <TabPanel key={i}>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title={i}
                    className="embed-responsive-item"
                    src={"https://www.youtube.com/embed/" + x + "?rel=0"}
                    allowFullScreen
                  ></iframe>
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
        <div className="col-1 d-flex pl-0">
          <button
            className="btn btn-block btn-classified c flex-column rounded-0"
            onClick={() => this.switchVid(1)}
          >
            <b>»</b>
          </button>
        </div>
      </div>
    )
  }
}

export default VideoTabs
