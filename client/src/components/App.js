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
import Browse from './browse/Browse';
//import Dashboard from './Dashboard';
//import SurveyNew from './surveys/SurveyNew';
import LayoutDrawer from './layout/LayoutDrawer.js';
import AppBar from 'material-ui/AppBar';
import LayoutTest from './layout/LayoutTest';
import Header from './layout/Header';
import SelectExpertise from './dashboard/SelectExpertise';
import SelectSpecialization from './dashboard/SelectSpecialization';
import SelectLinks from './dashboard/SelectLinks';
import SelectSchedule from './dashboard/SelectSchedule';
import SetRate from './dashboard/SetRate';
import AddInfo from './dashboard/AddInfo';
import SenseiPage from './browse/SenseiPage';

//import AddLinks from './dashboard/AddLinks';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    //console.log(this.props.drawer);
  }

  renderDrawer() {
    if (this.props.drawer) {
      return (
        <div className="col s3">
          <LayoutDrawer />
        </div>
      );
    } else {
      return;
    }
  }

  render() {
    const layout = this.props.drawer ? 'col s8' : 'col s10 offset-s1';

    return (
      <div>
        <BrowserRouter>
          <div className="row">
            <Header />
            <div>{this.renderDrawer()}</div>
            <div style={{ paddingTop: 64 }} className={`${layout}`}>
              <Route exact path="/" component={Browse} />
              <Route
                exact
                path="/apply/select-expertise"
                component={SelectExpertise}
              />
              <Route
                exact
                path="/apply/select-specialization"
                component={SelectSpecialization}
              />
              <Route exact path="/apply/select-links" component={SelectLinks} />
              <Route exact path="/apply/thanks" component={MaterialThanks} />

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
              <Route path="/test/layout_test" component={LayoutTest} />
              <Route path="/test/layout_test2" component={LayoutTest} />
              <Route path="/test/browse" component={Browse} />
              <Route
                path="/test/dashboard/select_expertise"
                component={SelectExpertise}
              />
              <Route
                path="/test/dashboard/select_specialization"
                component={SelectSpecialization}
              />
              <Route
                path="/test/dashboard/select_links"
                component={SelectLinks}
              />
              <Route
                path="/test/dashboard/select_schedule"
                component={SelectSchedule}
              />
              <Route path="/test/dashboard/set_rate" component={SetRate} />
              <Route path="/test/dashboard/add_info" component={AddInfo} />
              <Route path="/test/sensei/:senseiId" component={SenseiPage} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps({ auth, application, location, drawer }) {
  return { auth, application, location, drawer };
}

export default connect(mapStateToProps, actions)(App);
