import React, { Component } from "react";
import Experience from "./Experience";
import GeneralInfo from "./GeneralInfo";
import Skills from "./Skills";
import Introduction from "./Introduction";

class Resume extends Component {
  render() {
    return (
      <div id="resume">
        <aside className="left-panel">
          <GeneralInfo/>
          <Skills/>
        </aside>
        <main>
          <Introduction/>
          <Experience/>
          Education
        </main>
      </div>
    )
  }
}

export default Resume;