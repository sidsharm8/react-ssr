import React from "react";
import { Route } from "react-router-dom";
import CharactersPage from "./pages/characters-page/characterspage.component";

import App from "./App";

const Routes = [
    {
      ...App,
      routes: [
        {
          ...CharactersPage,
          path: "/",
        }
      ]
    }
];

export default Routes;
