//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import ApplyButton from './ApplyButton';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
class Header extends Component {
  renderHeader() {
    //const
    if (this.props.auth) {
      return (
        <AppBar
          style={{ backgroundColor: '#212121', position: 'fixed' }}
          title=" "
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={() => {
            this.props.toggleDrawer(this.props.drawer);
          }}
          iconElementRight={<LogoutButton />}
        >
          <ul>
            <li>
              <ApplyButton />
            </li>
          </ul>
        </AppBar>
      );
    } else {
      return (
        <AppBar
          style={{ backgroundColor: '#212121', position: 'fixed' }}
          title=" "
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={() => {
            this.props.toggleDrawer(this.props.drawer);
          }}
          iconElementRight={<LoginButton label="Log in/Sign up" />}
        />
      );
    }
  }

  render() {
    return this.renderHeader();
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(Header);
