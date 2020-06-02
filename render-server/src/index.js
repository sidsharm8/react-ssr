import "babel-polyfill";
import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import Routes from "./client/Routes";

const app = express();
const API_SERVER = "http://localhost:5000";
const RENDER_SERVER = "http://localhost:3000"
app.use("/api", proxy(API_SERVER, {
	proxyReqOptDecorator(opts){
		opts.headers["x-forwarded-host"] = RENDER_SERVER;
		return opts;
	}
}));

app.use(express.static("public"));

app.get('*', (req, res) => {
	const store = createStore(req);

	const promises = matchRoutes(Routes, req.path).map(({ route }) => {
	  return route.loadData ? route.loadData(store) : null;
	}).map(promise => {
		if(promise){
			return new Promise((resolve, reject) => {
				promise.then(resolve).catch(resolve);
			});
		}
	});

	Promise.all(promises).then(() => {
		const context = {};
		const content = renderer(req, store, context);

		if(context.notFound){
			res.status(404);
		}


		res.send(content);
	});
});

app.listen(3000, ()=>{
	console.log("Render server listening on port 3000")
});
