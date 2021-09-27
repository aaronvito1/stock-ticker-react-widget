import React, { useState, useEffect } from 'react';
import './App.css';

import StockData from './components/StockData/StockData.js';
import SearchStockTicker from './components/SearchStockTicker/SearchStockTicker.js';
import SearchStockDate from './components/SearchStockDate/SearchStockDate.js';
import BarChart from './components/BarChart/BarChart.js';

function App() {
  // State Variables
  const [stockData, setStockData] = useState([]);
  const [searchStockTicker, setSearchStockTicker] = useState('');
  const [searchDate, setSearchDate] = useState([]);
  const [apiStockStats, setapiStockStats] = useState([]);
  const [limitBy, setLimitBy] = useState([]);

  /*
    doFetch fetch's the API based on state, updates state with stock info
  */

  function doFetch() {
    const url = `https://api.polygon.io/v3/reference/tickers?ticker=${searchStockTicker}&active=true&sort=ticker&order=asc&limit=10&apiKey=fURCL4yNKe4CuMX2Fk5yMA70pUTDAHAe`
    fetch(url)
      .then(response => response.json())
      .then(data => {

        // Obtains the results data of the API
        console.log('data is: ', data.results);

        // Set the state of the new information
        setStockData(data.results)
        
        fetchStockStats();
      })
  }

  useEffect(doFetch, []);

  function fetchStockStats() {
    // api used to find the open/close of stocks
    let url = `https://api.polygon.io/v1/open-close/${searchStockTicker}/${searchDate}?adjusted=true&apiKey=fURCL4yNKe4CuMX2Fk5yMA70pUTDAHAe`
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log("Stats Data: ", data);

        // Set the state of the new information
        setapiStockStats(data)

      });
  }

  function onSearchStock(ev) {
    const value = ev.target.value;
    setSearchStockTicker(value);
  }

  function onLimitByChange(ev) {
    const value = ev.target.value;
    // If the value is "all", then turn off the limitBy feature. Otherwise, set
    // the state to enable it.
    if (value === 'all') {
      setLimitBy(false);
    } else {
      setLimitBy(value);
    }
  }

  // State functions
  function onSearchDate(ev) {
    let value = ev.target.value;
    setSearchDate(value);
  }

  return (
    <div class="container">
      <h1>Find Info on a stock!</h1>
      <div className="search-box">

      <SearchStockTicker 
        searchStockTicker={searchStockTicker}
        onSearchStock={onSearchStock}
      />

      <SearchStockDate
        searchDate={searchDate}
        onSearchDate={onSearchDate}
      />

      <button onClick={doFetch}>Search</button>

      <StockData
        stockData={stockData}
        onLimitByChange={onLimitByChange}
      />

      <BarChart
        apiStockStats={apiStockStats}
        limitBy={limitBy}

      />

      </div>
    </div>
  );
}

export default App;
