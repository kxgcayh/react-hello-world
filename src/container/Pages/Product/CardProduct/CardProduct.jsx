import React, { Component, Fragment } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

class CardProduct extends Component {
  state = {
    order: 5,
  };

  // Method untuk mengirim nilai ke Product(props)
  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue);
  };

  handlePlus = () => {
    this.setState(
      {
        order: this.state.order + 1,
      },
      // Memanggil handleCounterChange setelah state berubah
      () => {
        this.handleCounterChange(this.state.order);
      }
    );
  };

  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => {
          this.handleCounterChange(this.state.order);
        }
      );
    }
  };

  render() {
    return (
      <Fragment>
        <Card.Img variant="top" src="https://bit.ly/2ZRDjUE" />
        <Card.Body>
          <Card.Title className="text-left">Ayam Potong Bismillah</Card.Title>
          <Card.Text className="text-right">Rp. 50.000,00-</Card.Text>
          <div>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <Button variant="warning" onClick={this.handleMinus}>
                  -
                </Button>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                className="text-center"
                value={this.state.order}
              />
              <InputGroup.Prepend>
                <Button variant="info" onClick={this.handlePlus}>
                  +
                </Button>
              </InputGroup.Prepend>
            </InputGroup>
          </div>
        </Card.Body>
      </Fragment>
    );
  }
}

export default CardProduct;
