import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// BrowserRouter - brains of react router, looks at url and changes the set of components on screen
// React - used to set up a rules for components
import { connect } from 'react-redux';
// React-redux is used to connect react to redux.
// connect is used to give components the ability to call action creators
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
const Dashboard = () => <h2>Dash</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }

  render(){
    return (
      <div className="container">
        <BrowserRouter>
          <div>
          <Header />
            <Route exact path="/" component = {Landing} />
            <Route exact path="/surveys" component = {Dashboard} />
            <Route path="/surveys/new" component = {SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);
// first argument is used for map state to prop's arguments
// >> OR <<
// map state to proper function
