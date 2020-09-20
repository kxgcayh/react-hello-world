import React, { Component } from "react";
import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";

class Home extends Component {
  render() {
    return (
      <div>
        <p>Youtube Component</p>
        <hr />
        <YoutubeComp />
        <YoutubeComp
          time="1.23"
          title="Tutorial ReactJS - Bagian 1"
          desc="1x Ditonton, 1 Hari yang Lalu"
        />
        <YoutubeComp
          time="2.34"
          title="Tutorial ReactJS - Bagian 2"
          desc="2x Ditonton, 2 Hari yang Lalu"
        />
        <YoutubeComp
          time="3.45"
          title="Tutorial ReactJS - Bagian 3"
          desc="3x Ditonton, 3 Hari yang Lalu"
        />
        <YoutubeComp
          time="4.56"
          title="Tutorial ReactJS - Bagian 4"
          desc="4x Ditonton, 4 Hari yang Lalu"
        />
      </div>
    );
  }
}

export default Home;
