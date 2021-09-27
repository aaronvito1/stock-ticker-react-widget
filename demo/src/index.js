import React, {useState} from 'react'
import {render} from 'react-dom'

import {
	BarChart,
	SearchStockDate,
	SearchStockTicker,
	StockData,
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
  const [apiStockInfo, setapiStockInfo] = useState([]);
  const [limitBy, setLimitBy] = useState(false);
  return (
  	<div className="Page">

			<header className="Page-nav">
				<h1 className="Page-title">
				  Stock React Widget
				</h1>
				<div className="Page-rightNav">
				  A React widget component collection by Aaron Vito - Web Developer in Training
				</div>
			</header>

			<div className="Page-mainPage">
				<h1 id="Intro">Getting Started</h1>

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
            import {BarChart} from 'stock-ticker-react-widget';
          `}</Code>
        </div>
			</div>

			<h1 id="Uses">Uses</h1>
			<p>Utilizing buttons as well as a accurate API from Polygon.io, it allows users to find accurate data on individual stocks.</p>

  	</div>

  	);
}


render(<App/>, document.querySelector('#demo'))
