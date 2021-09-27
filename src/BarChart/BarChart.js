import React, { useState } from 'react';
import './BarChart.css';

function barsFromStockValue(stockValue){
  const numberOfBars = Math.ceil(stockValue/100);
  console.log("numberOfBars: ", numberOfBars)
  const barArray = new Array(numberOfBars).fill();
  console.log("numberOfBars: ", numberOfBars)
  console.log("barArray: ", barArray)
  console.log("barArray[5]: ", barArray[5])
  return barArray;
}

function BarChart(props) {
  console.log("props: ", props)
  console.log("Object.entries(props.apiStockStats): ", Object.entries(props.apiStockStats))
  console.log("Object.entries(props.apiStockStats).filter(apiStockStats => apiStockStats.includes(props.limitBy)): ", Object.entries(props.apiStockStats).filter(apiStockStats => apiStockStats.includes(props.limitBy)))

	return (
      <div className="BarChart-chart">
        {
          Object.entries(props.apiStockStats)
          .filter(apiStockStats => apiStockStats.includes(props.limitBy))
          .map(([key, value]) => (
            <div className="BarChart-bar">
              <p className="Key-title"><strong>{key}:</strong> ${value}</p> <br />
              {barsFromStockValue(value).map((bar, index) => {
                return <div className="Progression-bar" style={{ width: value + "px" }}>
                </div>
              })}
            </div>
          ))
        }
      </div>
		);
}

export default BarChart;