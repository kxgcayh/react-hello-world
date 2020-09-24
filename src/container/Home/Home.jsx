import React, { Component, Fragment } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Layout
import Header from "../Header/Header";
import Product from "../Pages/Product/Product";
import BlogPost from "../Pages/BlogPost/BlogPost";
import DetailPost from "../Pages/BlogPost/DetailPost/DetailPost";
import LifeCycleComp from "../Pages/LifeCycleComp/LifeCycleComp";
import YoutubeCompPage from "../Pages/YoutubeCompPage/YoutubeCompPage";

class Home extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Fragment>
          <Route path="/" exact component={BlogPost} />
          <Route path="/detail-post/:postID" component={DetailPost} />
          <Route path="/product" component={Product} />
          <Route path="/lifecycle" component={LifeCycleComp} />
          <Route path="/youtube-component" component={YoutubeCompPage} />
        </Fragment>
      </Router>
    );
  }
}

export default Home;
