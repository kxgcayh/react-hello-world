import React, { Component, Fragment } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
import Product from "../Product/Product";
import Header from "../Header/Header";
import BlogPost from "../BlogPost/BlogPost";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";

class Home extends Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-no-undef
      <Router>
        {/* <div>
          <Header />
          <hr />
          <p>Youtube Component</p>
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
          <hr />
          <p>Product</p>
          <Product />
          <hr />
          <p>Life Cycle Component</p>
          {<LifeCycleComp />}
          <hr />
          <p>Blog Post</p>
          <BlogPost />
        </div> */}
        <Header />
        <Fragment>
          <Route path="/" exact component={BlogPost} />
          <Route path="/product" component={Product} />
          <Route path="/lifecycle" component={LifeCycleComp} />
        </Fragment>
      </Router>
    );
  }
}

export default Home;
