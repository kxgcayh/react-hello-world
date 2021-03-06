import React, { Component, Fragment } from "react";
import Button from "react-bootstrap/Button";

class LifeCycleComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 2,
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
    /* setTimeout(() => {
      this.setState({
        count: 2,
      });
    }, 4000); */
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.group("shouldComponentUpdate");
    // console.log("nextProps: ", nextProps);
    console.log("nextState: ", nextState);
    console.log("This state: ", this.state);
    console.groupEnd();
    if (nextState.count >= 4) {
      return false;
    }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log("render");
    return (
      <Fragment>
        <p>Life Cycle Component</p>
        <Button variant="primary" onClick={this.changeCount}>
          Component Button {this.state.count}
        </Button>
      </Fragment>
    );
  }
}

export default LifeCycleComp;
