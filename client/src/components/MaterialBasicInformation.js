import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import newGoogle from '../images/newGoogle.png';
import newFb from '../images/newFb.png';
import newLinkedin from '../images/newLinkedin.png';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

//import Header from './Header.js';

//import { Row, Col } from 'react-bootstrap';

class MaterialBasicInformation extends Component {
  componentDidMount() {
    this.props.changeLocation(0);
  }
  renderQuestionCard(content) {
    return _.map(content, item => {
      return (
        <div key={item.number} className="row">
          <div className="col s12">
            <div className="card grey darken-4">
              <div className="card-content white-text">
                <div className="center-align">
                  <h1>{item.headline}</h1>
                  <h3>{item.subtitle}</h3>
                </div>
              </div>
              <div className="center-align">
                <div className="row">
                  <a href="/auth/facebook">
                    <img src={newFb} alt="fb" />
                  </a>
                </div>
                <div className="row">
                  <a href="/auth/google">
                    <img src={newGoogle} alt="google" />
                  </a>
                </div>
                <div style={{ paddingBottom: 60 }} className="row">
                  <a href="/auth/linkedin">
                    <img src={newLinkedin} alt="linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    const question = [
      {
        headline: '',
        subtitle: 'Choose any service to log in.',
        number: 0
      }
    ];

    return <div className="row">{this.renderQuestionCard(question)} </div>;
  }
}

function mapStateToProps({ auth, location }) {
  return { auth, location };
}

export default connect(mapStateToProps, actions)(MaterialBasicInformation);

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
