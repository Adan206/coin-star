import React from "react";
import "./App.css";
import { getCoinData, selectCoinData } from "./store/coinSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const coins = useSelector(selectCoinData);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (coins.length === 0) {
      dispatch(getCoinData());
    }
  });

  return (
    <div className='App'>
      {Array.isArray(coins) &&
        coins.map((coin: any) => <p key={coin.id}> {coin.name}</p>)}
    </div>
  );
}

export default App;
