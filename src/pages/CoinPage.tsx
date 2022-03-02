import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectHistoryData, getHistoryData } from "../store/historySlice";
import { useAppDispatch } from "../store/store";
import "./coinpage.css";
// import Coinlist from "../Coinlist";

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
} from "react-vis";

const CoinPage = () => {
  const dispatch = useAppDispatch();
  const coinHistory = useSelector(selectHistoryData);
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (coinHistory.length === 0 && id !== undefined) {
      console.log(`this is the id ${id}`);
      dispatch(getHistoryData(id));
    } else if (id === undefined) {
      // to do redirect
      // not a real coin handle that
      navigate("/");
    }
  });
  console.log(coinHistory);
  return (
    <div className='divcenter'>
      <h1>{id?.toUpperCase()}</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
        style={{ width: "200px", margin: "1rem" }}
      >
        home
      </button>

      <XYPlot width={400} height={500}>
        <HorizontalGridLines />
        <LineSeries
          data={[
            { x: 1, y: 10 },
            { x: 2, y: 5 },
            { x: 3, y: 15 },
          ]}
        />
        <XAxis />
        <YAxis />
      </XYPlot>
    </div>
  );
};

export default CoinPage;
