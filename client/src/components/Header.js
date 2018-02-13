import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import logo from '../images/coinChar2.png';

class Header extends Component {
  renderContent() {
    return (
      <li style={{ margin: '0 20px 0 0 ' }}>
        <button className="btn yellow accent-2 black-text">Home</button>
      </li>
    );
  }

  render() {
    //console.log(this.props);
    return (
      <nav>
        <div className="grey darken-4 nav-wrapper">
          <Link to={'/'} className="left brand-logo">
            <img src={logo} />
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
