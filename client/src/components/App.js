import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// BrowserRouter - brains of react router, looks at url and changes the set of components on screen
import { connect } from 'react-redux';
// connect is used to give components the ability to call action creators
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }

  render(){
    return (
      <div className="container">
        <BrowserRouter>
          <div className="container">
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
// first argument is used to map state to prop's arguments
// >> OR <<
// map state to proper function
