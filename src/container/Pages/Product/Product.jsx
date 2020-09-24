import React, { Component, Fragment } from "react";
import Card from "react-bootstrap/Card";
import CardProduct from "../Product/CardProduct/CardProduct";

class Product extends Component {
  state = {
    order: 5,
  };

  // Nilai yang ditangkap dari method onCounterChange
  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue,
    });
  };

  render() {
    return (
      <Fragment>
        <Card style={{ width: "18rem" }}>
          <Card.Header className="bg-success text-white text-right">
            Total Order: {this.state.order}
          </Card.Header>
          <CardProduct
            // Menangkap nilai dari CardProduct => Dan mengirim ke Method di File ini
            onCounterChange={(value) => this.handleCounterChange(value)}
          />
        </Card>
      </Fragment>
    );
  }
}

export default Product;
