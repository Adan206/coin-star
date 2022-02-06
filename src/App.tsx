import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Coinlist from "./Coinlist";
import CoinPage from "./pages/CoinPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Coinlist />} />
          <Route path='/coindata' element={<CoinPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
