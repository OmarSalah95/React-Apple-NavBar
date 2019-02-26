import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom";
// Components
import NavHeader from './Components/NavHeader';
import SubHeader from './Components/SubHeader';
// Data
import Categories from './Categories'

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: []
    };  
  }

  componentDidMount() {
    this.setState({
      categories: Categories
    });
  }

  render() {
    return (
      <div className="App">
        <NavHeader categories={this.state.categories} />
        <Route
          exact
          path="/:categoryName"
          render={props => (
            <SubHeader {...props} categories={this.state.categories} />
          )}
        />
      </div>
    );
  }
}

export default App;
