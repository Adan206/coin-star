import React from "react";
import { useParams } from "react-router-dom";

const CoinPage = () => {
  const { id } = useParams();
  return <div>I am the {id} page</div>;
};

export default CoinPage;
