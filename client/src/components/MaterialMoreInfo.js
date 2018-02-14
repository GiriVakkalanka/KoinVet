import React, { Component } from 'react';
//import { Button } from 'react-bootstrap';
//import LandingGallery from './LandingGallery';
//import MaterialLandingGallery from './MaterialLandingGallery';
import { connect } from 'react-redux';
//import Logo from '../images/logo15.png';
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import ApplicationNavigator from './ApplicationNavigator';
import MaterialBasicInformation from './MaterialBasicInformation';

//import { Link } from 'react-router-dom';

class MaterialMoreInfo extends Component {
  componentDidMount() {
    this.props.changeLocation(3);
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <div className="card grey darken-4">
              <div className="card-content white-text">
                <div>
                  <h1>We are currently in stealth mode.</h1>
                  <h3>Looking for senseis in four main verticals.</h3>
                  <h5>
                    Whitepaper technical analysis, business valuation analysis,
                    tax advice and onboarding assistance.
                  </h5>
                  <h3>
                    Charge clients by the hour at a rate of your choosing.
                  </h3>
                  <h5>
                    Receive payments through paypal 5-7 days after the session
                    is completed.
                  </h5>
                  <h5>
                    Schedule sessions and coordinate logists via scheduling and
                    chat features.
                  </h5>
                  <Link
                    className="btn-large yellow accent-2 black-text "
                    to="/sensei_application/basic_info"
                  >
                    Join now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ApplicationNavigator />
        <MaterialBasicInformation />
      </div>
    );
  }
}

function mapStateToProps({ auth, application, location }) {
  return { auth, application, location };
}

export default connect(mapStateToProps, actions)(MaterialMoreInfo);
