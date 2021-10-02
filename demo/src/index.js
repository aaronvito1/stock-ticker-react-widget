import React, { useState, useEffect } from 'react';
import {render} from 'react-dom'
import './index.css';

import logo from './logo.png';

import {
	BarChart,
	SearchStockDate,
	SearchStockTicker,
	StockData,
	StockInfo,
} from '../../src';

function Code({children}) {
  const text = children
    .replace(/\n\s*/g, "\n")
    .replace(/^\s+/g, '')
    .replace(/\s+$/g, '');
  return (
    <pre className={'Code'}>{text}</pre>
  );
};

function App() {
  const [stockData, setStockData] = useState([]);
  const [searchStockTicker, setSearchStockTicker] = useState('');
  const [searchDate, setSearchDate] = useState([]);
  const [apiStockStats, setapiStockStats] = useState([]);
  const [stockInfo, setStockInfo] = useState('');
  const [limitBy, setLimitBy] = useState(false);

  function doFetch() {
    const url = `https://api.polygon.io/v3/reference/tickers?ticker=${searchStockTicker}&active=true&sort=ticker&order=asc&limit=10&apiKey=fURCL4yNKe4CuMX2Fk5yMA70pUTDAHAe`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Obtains the results data of the API
        console.log('data is: ', data.results);
        // Set the state of the new information
        setStockData(data.results)

        fetchStockInfo();

        fetchStockStats();
      })
  }

	function fetchStockStats() {
	// API used to find the open/close of stocks
	let url = `https://api.polygon.io/v1/open-close/${searchStockTicker}/${searchDate}?adjusted=true&apiKey=fURCL4yNKe4CuMX2Fk5yMA70pUTDAHAe`
	fetch(url)
	  .then(response => response.json())
	  .then(data => {
	    // Set the state of the new information
	    setapiStockStats(data)
	  });
	}

  function fetchStockInfo() {
    let url = `https://api.polygon.io/v1/meta/symbols/${searchStockTicker}/company?apiKey=fURCL4yNKe4CuMX2Fk5yMA70pUTDAHAe`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log('data being returned is:', data);
        setStockInfo(data);
      })
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
  	<div className="Page">
		<header className="Page-nav">
		<img src={logo} className="App-logo" alt="my-logo" />
			<h1 className="Page-title">
			  Stock React Widget
			</h1>
			<div className="Page-rightNav">
			  A React widget component collection by Aaron Vito - Web Developer in Training
			</div>
		</header>

		<div className="Page-mainPage">
			<h2 id="Intro">Introduction</h2>

			<p>The widget can search up data about a specific stock that the user
			wants and can show the Opening, Closing, High and Low prices on a specific date.</p>

			<h2>Installing the Stock Ticker Widget</h2>
			<div className="App-library">
				<div>
					<div>
						<Code>npm install --save stock-ticker-react-widget</Code>
						<Code>yarn add stock-ticker-react-widget</Code>
					</div>
				</div>
	          	<Code>{`
	            	import React, {useState} from 'react';
	            	/* etc */
	            	import {BarChart} from 'stock-ticker-react-widget';`}
	          	</Code>
    		</div>

		<h2 id="Uses">Uses</h2>
			<p>Utilizing buttons as well as a accurate API 
			from Polygon.io, it allows users to find accurate data 
			on individual stocks.</p>

			<h3>Find info on a stock</h3>

			<SearchStockTicker 
				searchStockTicker={searchStockTicker}
				onSearchStock={onSearchStock}
			/>

			<SearchStockDate
				searchDate={searchDate}
				onSearchDate={onSearchDate}
			/>

			<button onClick={doFetch}>Search</button>

			<StockInfo
				stockInfo={stockInfo}
			/>

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


render(<App/>, document.querySelector('#demo'))
