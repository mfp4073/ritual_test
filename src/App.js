import React, { useState, useEffect } from 'react';
import Ingredients from './components/Ingredients'
import { Route, Switch, Redirect} from "react-router-dom";
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
        <h1>Essential Nutrients</h1>
      </header>
      <Switch>
        <Route path="/ingredients">
          <Ingredients ingredients={data}/>
        </Route>
        <Redirect from="/" to="/ingredients" exact />
      </Switch>
    </div>
  );
}

export default App;
