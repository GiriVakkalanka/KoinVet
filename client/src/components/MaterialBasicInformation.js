import React, { Component } from 'react';
import { connect } from 'react-redux';
import newGoogle from '../images/newGoogle.png';
import newFb from '../images/newFb.png';
import newLinkedin from '../images/newLinkedin.png';
//import Header from './Header.js';

import { Row, Col } from 'react-bootstrap';

class MaterialBasicInformation extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="card s3 grey darken-4 center-align">
            <div>
              <a href="/auth/facebook">
                <img src={newFb} alt="fb" />
              </a>
            </div>

            <div>
              <a href="/auth/google">
                <img src={newGoogle} alt="google" />
              </a>
            </div>
            <div>
              <a href="/auth/linkedin">
                <img src={newLinkedin} alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(MaterialBasicInformation);

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
