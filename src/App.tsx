import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, CardGroup } from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";
import { getCoinData, selectCoinData } from "./store/coinSlice";
import { useDispatch, useSelector } from "react-redux";
import CardCoin from "./features/CardCoin";
import Header from "./Header";
import CoinPage from "./pages/CoinPage";

function App() {
  const coins = useSelector(selectCoinData);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (coins.length === 0) {
      dispatch(getCoinData());
    }
  });

  return (
    <>
      <Header />
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
    </>
  );
}

export default App;

/* {Array.isArray(coins) &&
        coins.map((coin: any) => <p key={coin.id}> {coin.name}</p>)} */
