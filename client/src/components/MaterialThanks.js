import React, { Component } from 'react';
//import { Button } from 'react-bootstrap';
//import LandingGallery from './LandingGallery';
//import MaterialLandingGallery from './MaterialLandingGallery';
import { connect } from 'react-redux';
//import Logo from '../images/logo15.png';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

//import { Link } from 'react-router-dom';

class MaterialThanks extends Component {
  componentDidMount() {
    this.props.changeLocation(3);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="card grey darken-4">
              <div className="card-content white-text">
                <div>
                  <h1>Thank you.</h1>
                  <h3>
                    We will review your application and get back to you shortly
                  </h3>
                  <Link
                    className="btn-large yellow accent-2 black-text "
                    to="/"
                  >
                    Go Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth, application, location }) {
  return { auth, application, location };
}

export default connect(mapStateToProps, actions)(MaterialThanks);
