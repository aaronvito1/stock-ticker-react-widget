import React, { useState } from 'react';
import './SearchStockDate.css';

function SearchStockDate(props) {
	return (
    <div className="search-box">
      <input 
        className="search-input-date"
        placeholder="YYYY-MM-DD"
        value={props.searchDate}
        onChange={props.onSearchDate}
        />
    </div>
	);
}

export default SearchStockDate;