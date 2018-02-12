import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';
//import Header from './Header';
import BootstrapHeader from './BootstrapHeader';
import SenseiApplication from './SenseiApplication';
//import Dashboard from './Dashboard';
//import SurveyNew from './surveys/SurveyNew';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <BootstrapHeader />
            <Route exact path="/" component={Landing} />
            <Route
              exact
              path="/sensei_application"
              component={SenseiApplication}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
