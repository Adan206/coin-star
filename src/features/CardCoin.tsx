import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardCoin.css";
import { Card, Button } from "react-bootstrap";

const CardCoin = (props: any) => {
  const { coin } = props;
  return (
    <div className='card-container'>
      <Card style={{ width: "18rem", margin: "1rem", padding: "1rem" }}>
        <Card.Img
          variant='top'
          src={coin.image}
          style={{ height: "80px", width: "80px" }}
        />
        <Card.Body>
          <Card.Title>{coin.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button href='https://www.google.com' target='_blank'>
            View History
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardCoin;
