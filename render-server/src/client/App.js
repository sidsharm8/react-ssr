import React from "react";
import {renderRoutes } from "react-router-config";

//import "./App.css";


const App = ({ route: { routes } }) => {
  return (
    <div className="App">
    Hiiii this is app header
       {renderRoutes(routes)}
    </div>
  );
}

export default { component: App };
