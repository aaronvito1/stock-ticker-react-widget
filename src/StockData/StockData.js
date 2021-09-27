import React, { useState } from 'react';
import './StockData.css';

function StockData(props) {
	return (
        <div className="stocks-section">
          { 
            props.stockData
            .map(result => (
              <div className="Stocks-stock">
                <div className="Stock-Details">
                  <label className="Stock-Prices"><strong>Prices: </strong>
                    <select onChange={props.onLimitByChange} value={result.limitBy}>
                      <option value="open">Open</option>
                      <option value="close">Close</option>
                      <option value="high">High</option>
                      <option value="low">Low</option>
                    </select>
                  <div className="Stock-Name">Ticker: {result.ticker} </div>
                  <div className="Stock-Currency"> Currency: {(result.currency_name)}</div>
                  </label>
                </div>
              </div>
            ))
          }
        </div>
		);
}

export default StockData;