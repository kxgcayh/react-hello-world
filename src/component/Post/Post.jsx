import React, { Fragment } from "react";
import { Card, Row, Col } from "react-bootstrap";

const Post = (props) => {
  return (
    <Fragment>
      <Card style={{ width: "25rem" }}>
        <Row>
          <Col>
            <Card.Img variant="top" src="https://bit.ly/33NMeHE" />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text className="text-muted">{props.desc}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Fragment>
  );
};

export default Post;
