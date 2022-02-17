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
            Crypto curreny is the most popular form of non cyber currency since
            its start in 2009
          </Card.Text>
          <Button href={`/coin/${coin.id}`}>View History</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardCoin;
