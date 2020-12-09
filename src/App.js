import React, { useState, useEffect } from 'react';
import Ingredients from './components/Ingredients'
import { Link, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch('data.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="App">
      <header className="ritual-header">
        Essential Nutrients
      </header>
      <Ingredients ingredients={data} />

      <Switch>
        <Route path="/products">
          <Ingredients />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
