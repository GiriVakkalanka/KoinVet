//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SelectSchedule extends Component {
  render() {
    return (
      <div>
        <h1>Generic Component</h1>
      </div>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(SelectSchedule);
