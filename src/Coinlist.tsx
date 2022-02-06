import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, CardGroup } from "react-bootstrap";
import { getCoinData, selectFilteredCoinData } from "./store/coinSlice";
import { useDispatch, useSelector } from "react-redux";
import CardCoin from "./features/CardCoin";

const Coinlist = () => {
  const coins = useSelector(selectFilteredCoinData);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (coins.length === 0) {
      dispatch(getCoinData());
    }
  });
  return (
    <div className='App'>
      <Container>
        <Row>
          <Col>
            <CardGroup>
              {Array.isArray(coins) &&
                coins.map((coin: any) => {
                  return <CardCoin key={coin.id} coin={coin} />;
                })}
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Coinlist;
