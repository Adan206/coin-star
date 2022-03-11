import React from "react";

const dummydata = () => {
  return <div>dummydata</div>;
};

export default dummydata;

// coinHistory.map(
//   (
//     coin: {
//       market_data: {
//         current_price: {
//           usd: {
//             toLocaleString: (
//               arg0: string,
//               arg1: { style: string; currency: string }
//             ) => any;
//           };
//         };
//       };
//     },
//     index: number
//   ) => {
//     console.log(coin.market_data.current_price.usd);
//     return console.log(
//       `Week ${index + 1}: ${coin.market_data.current_price.usd.toLocaleString(
//         "en-US",
//         {
//           style: "currency",
//           currency: "USD",
//         }
//       )}`
//     );
//   }
// );
