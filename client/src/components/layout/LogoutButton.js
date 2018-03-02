//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

class LogoutButton extends Component {
  render() {
    return (
      <div style={{ paddingRight: 20, paddingTop: 7 }}>
        <RaisedButton
          label="Log out"
          href="/api/logout"
          backgroundColor="#ffff00"
        />
      </div>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(LogoutButton);
