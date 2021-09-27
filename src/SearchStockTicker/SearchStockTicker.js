import React, { useState } from 'react';
import './SearchStockTicker.css';

function SearchStockTicker(props) {
	return (
    <div className="search-box">
      <input 
        className="search-input-ticker"
        placeholder="Stock Ticker (Ex: NKE)"
        value={props.searchStockTicker}
        onChange={props.onSearchStock}
        />
    </div>
		);
}

export default SearchStockTicker;