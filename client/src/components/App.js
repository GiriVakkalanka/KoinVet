import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';
//import Header from './Header';
//import BootstrapHeader from './BootstrapHeader';
//import SenseiApplication from './SenseiApplication';
import MaterialChooseExpertise from './MaterialChooseExpertise';
import MaterialBasicInformation from './MaterialBasicInformation';
import MaterialProfessionalLinks from './MaterialProfessionalLinks';
import ApplicationNavigator from './ApplicationNavigator';
import MaterialThanks from './MaterialThanks';
import MaterialMoreInfo from './MaterialMoreInfo';
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
            <Route exact path="/" component={Landing} />
            <Route
              path="/sensei_application"
              component={ApplicationNavigator}
            />
            <Route
              path="/sensei_application/basic_info"
              component={MaterialBasicInformation}
            />
            <Route
              path="/sensei_application/expertise"
              component={MaterialChooseExpertise}
            />
            <Route
              path="/sensei_application/professional_links"
              component={MaterialProfessionalLinks}
            />
            <Route
              path="/sensei_application/thanks"
              component={MaterialThanks}
            />
            <Route path="/more_information" component={MaterialMoreInfo} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
