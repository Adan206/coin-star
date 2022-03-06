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
  const { id } = useParams();
  const navigate = useNavigate();

  // if (id === undefined) {
  //   // return navigate("/");
  //   return <Navigate to='/' state={{ from: location }} replace />;
  // }

  const coinHistory: any[] | "error" = useSelector(selectHistoryData(id || ""));

  React.useEffect(() => {
    console.log({ id, coinHistory });
    if (coinHistory === "error") {
      return navigate("/");
    } else if (coinHistory.length === 0 && id !== undefined) {
      console.log(`this is the id ${id}`);
      dispatch(getHistoryData(id));
    }
  }, [coinHistory, dispatch, id, navigate]);

  const titleCaseId =
    (id?.slice(0, 1) || "").toUpperCase() +
    id?.slice(1, id.length).toLowerCase();

  return (
    <div className='divcenter'>
      <h1>{titleCaseId} Market Cap Past Week</h1>
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
