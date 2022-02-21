import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectHistoryData } from "../store/historySlice";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
} from "react-vis";

const CoinPage = () => {
  const dispatch = useDispatch();
  // const { id } = useParams();
  return (
    <div>
      <XYPlot width={300} height={300}>
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
