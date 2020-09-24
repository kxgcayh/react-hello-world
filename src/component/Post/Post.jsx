import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";

const Post = (props) => {
  return (
    <Fragment>
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src="https://bit.ly/33NMeHE" />
        <Card.Body>
          <Card.Title onClick={() => props.goDetail(props.data.id)}>
            {props.data.title}
          </Card.Title>
          <Card.Text className="text-muted">{props.data.body}</Card.Text>
          <Button variant="warning" onClick={() => props.update(props.data)}>
            Update
          </Button>{" "}
          <Button variant="danger" onClick={() => props.remove(props.data.id)}>
            Remove
          </Button>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default Post;
