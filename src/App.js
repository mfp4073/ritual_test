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

      <Switch>
        {/* needed to have a route path */}
        <Route exact path="/">
            <Link to="/products">Products</Link>
        </Route>
        <Route  path="/products">
          {/* needed to pass in the ingredients you had it twice */}
          <Ingredients ingredients={data}/>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
