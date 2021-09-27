import React, { useState } from 'react';
import './StockInfo.css';

function StockInfo(props) {
	return (
      <div className="stocks-info-section">
      {
            <div className="stock-info-area">
            	<h1 className="stock-info-name">{ props.stockInfo.name }</h1>
				<p className="stock-info-updated">*(Date API last updated: {props.stockInfo.updated})</p>
            	<p className="stock-info-details"><strong>Website: </strong>{ props.stockInfo.url }</p> 
				<p className="stock-info-details"><strong>Description: </strong> { props.stockInfo.description }</p>
				<p className="stock-info-details"><strong>HQ Location: </strong> { props.stockInfo.hq_address }</p>
				<p className="stock-info-details"><strong>CEO: </strong> { props.stockInfo.ceo }</p>
				<p className="stock-info-details"><strong>Industry / Sector: </strong> { props.stockInfo.industry } / { props.stockInfo.sector } </p>
				<p className="stock-info-details"><strong>Exchange: </strong> { props.stockInfo.exchange } ({props.stockInfo.exchangeSymbol}) </p>
            </div>
      }
      </div>
	);
}

export default StockInfo;