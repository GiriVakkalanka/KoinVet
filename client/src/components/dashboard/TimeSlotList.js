//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class TimeSlotList extends Component {
  render() {
    return (
      <div>
        <p>Generic Component</p>
      </div>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(TimeSlotList);
