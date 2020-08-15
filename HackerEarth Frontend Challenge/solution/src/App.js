import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Datas from "./Data";

import DataFetching from "./DataFetching";
import DataDetails from "./DataDetails";
function App() {
  var datas = Datas();
  return (
    <BrowserRouter>
      <Route exact path="/">
        <DataFetching />
      </Route>
      {datas.map((data) => (
        <Route exact path={`/${data.id}`}>
          <DataDetails name={data.name} />
        </Route>
      ))}
    </BrowserRouter>
  );
}

export default App;
