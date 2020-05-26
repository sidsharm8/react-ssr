import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../client/redux/root-reducer";
import axios from "axios";


export default (req) =>{
  const axiosInstance = axios.create({
    baseURL : "http://react-ssr-api.herokuapp.com",
    headers: {
      cookie: req.get("cookie") || ""
    }
  });
  const middlewares = [thunk.withExtraArgument(axiosInstance)];

  return createStore(rootReducer, applyMiddleware(...middlewares));
}
