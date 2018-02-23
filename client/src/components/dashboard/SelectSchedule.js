//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import TimeSlotSelector from './TimeSlotSelector';
import TimeSlotList from './TimeSlotList';

class SelectSchedule extends Component {




  render() {
    return (
      <div className="row">
        <div className="col s8">
          <TimeSlotSelector/>
        </div>
        <div className="col s4">
          <TimeSlotList/>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(SelectSchedule);
