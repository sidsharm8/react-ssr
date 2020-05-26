import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../client/Routes";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";
//import StyleContext from 'isomorphic-style-loader/StyleContext';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

export default (req, store, context) => {

  const sheet = new ServerStyleSheet()
	const content = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.path} context={context}>
			  <StyleSheetManager sheet={sheet.instance}>
		   			<div>{renderRoutes(Routes)}</div>
		    </StyleSheetManager>
			</StaticRouter>
		</Provider>
	);

	return `
		<html>
			<head>
			<link rel="stylesheet" href="index.css">
			</head>
			<body>
				<div id="root">${content}</div>
				<script>
					window.INITIAL_STATE = ${serialize(store.getState())}
				</script>
				<script src="bundle.js"></script>
			</body>
		</html>
	`
}
