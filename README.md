# stock-ticker-react-widget

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

<!-- Describe stock-ticker-react-widget here. -->
Stock Ticker React Widget has multiple API's to help the user search for stock prices, as well as quick information about the companies that are being searched for.

## Installing the Widget 
```bash
npm install --save stock-ticker-react-widget   # using NPM
yarn stock-ticker-react-widget            # using yarn
``` 

## How to Use Widget for Projects 
Utilize Polygon.io's Stock API to assist users in searching for a specific Stock's previous day open, high, low and close (OHLC).

![GIF](stock-react-demo.gif)

## Example on How to Use 
```
import React from "react";
import { BarChart } from "stock-ticker-react-widget"; 

function App() {
  return (
	    <div>
	      <BarChart />
	    </div>
	); 
}
```

## Contributing 
Although this project was built to look simple and minimal with CSS, the project can keep evolving with more ideas. 

Pull requests are welcome. Thank you and I hope to keep evolving this as well.


[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
