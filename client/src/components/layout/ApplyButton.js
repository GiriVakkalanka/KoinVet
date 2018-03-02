//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

class ApplyButton extends Component {
  render() {
    return (
      <div style={{ paddingRight: 30, paddingTop: 15 }}>
        <Link to="/apply/select-expertise">
          <RaisedButton
            backgroundColor="#ffff00"
            label="Apply to be a Sensei"
          />
        </Link>
      </div>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(ApplyButton);
