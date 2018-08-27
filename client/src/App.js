import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, IndexRoute,Link} from 'react-router-dom';
import Chart1 from './components/customers/chart';
import Chart2 from './components/customers/chart2';
import Header from './components/customers/header';
import Chart3 from './components/customers/chart3';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Solstice</h1>
        </header>
       

       <BrowserRouter>
       <div>
       <Route path="/" component={Header} /> 
       <Route path="/chart1" component={Chart1} />
       <Route path="/chart2" component={Chart2} />
       <Route path="/chart3" component={Chart3} />
       </div>
       </BrowserRouter>
       </div>


    );
  }
}

export default App;
