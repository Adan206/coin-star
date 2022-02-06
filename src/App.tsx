import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Coinlist from "./Coinlist";
import CoinPage from "./pages/CoinPage";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Coinlist />} />
          <Route path='/coindata' element={<CoinPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

/* {Array.isArray(coins) &&
        coins.map((coin: any) => <p key={coin.id}> {coin.name}</p>)} */

//   <Header />
// <BrowserRouter>
//   <div className='App'>
//     <Container>
//       <Row>
//         <Col>
//           <CardGroup>
//             {Array.isArray(coins) &&
//               coins.map((coin: any) => {
//                 return <CardCoin key={coin.id} coin={coin} />;
//               })}
//           </CardGroup>
//         </Col>
//       </Row>
//     </Container>
//   </div>
//   <Routes>
//     <Route path='/coindata' element={<CoinPage />} />
//   </Routes>
// </BrowserRouter>
