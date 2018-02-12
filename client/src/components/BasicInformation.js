import React, { Component } from 'react';
import { connect } from 'react-redux';
import google from '../images/google.png';
import fb from '../images/fb.png';
import linkedin from '../images/linkedin.png';
//import Header from './Header.js';

import { Row, Col } from 'react-bootstrap';

class BasicInformation extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Choose your service to log in</h1>
        <div style={{ marginBottom: '200px' }}>
          <Col xs={12}>
            <Row>
              <a href="/auth/facebook">
                <img src={fb} alt="fb" />
              </a>
            </Row>
            <Row>
              <a href="/auth/google">
                <img src={google} alt="google" />
              </a>
            </Row>
            <Row>
              <a href="/auth/linkedin">
                <img src={linkedin} alt="linkedin" />
              </a>
            </Row>
          </Col>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(BasicInformation);

/*
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li key="1">
            <a href="/auth/google">Login With Google</a>
          </li>,
          <li key="2">
            <a href="/auth/facebook">Login With Facebook</a>
          </li>,
          <li key="3">
            <a href="/auth/linkedin">Login With LinkedIn</a>
          </li>
        ];
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" style={{ margin: '0 10px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    //console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
          >
            Boilerplate
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
*/
