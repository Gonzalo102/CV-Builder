import React, { Component } from "react";
import Experience from "./Experience";
import GeneralInfo from "./GeneralInfo";
import Skills from "./Skills";

class Resume extends Component {
  render() {
    return (
      <div id="resume">
        <aside>
          <GeneralInfo/>
          <Skills/>
        </aside>
        <main>
          Intro
          <Experience/>
          Education
        </main>
      </div>
    )
  }
}

export default Resume;