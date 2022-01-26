import React from "react";
import "./App.css";

function App() {
  const [coins, setCoins] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const results = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets" +
          "?vs_currency=btc&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      ).then((response) => response.json());

      setCoins(results);
    };

    if (coins.length === 0) {
      getData();
    }
  }, [coins]);

  return (
    <div className='App'>
      {Array.isArray(coins) &&
        coins.map((coin: any) => <p key={coin.id}> {coin.name}</p>)}
    </div>
  );
}

export default App;
