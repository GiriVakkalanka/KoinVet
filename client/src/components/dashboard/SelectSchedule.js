//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import TimeSlotSelector from './TimeSlotSelector';
import TimeSlotList from './TimeSlotList';

class SelectSchedule extends Component {
  render() {
    return (
      <div>
        <div className="row card grey darken-4">
          <div className="card-content white-text">
            <h4>Set your windows of availability by day</h4>
          </div>
        </div>
        <div className="row card" style={{ paddingBottom: '20' }}>
          <div className="card-content">
            <div className="col s4">
              <TimeSlotSelector />
            </div>
            <div className="col s8">
              <TimeSlotList />
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

export default connect(mapStateToProps, actions)(SelectSchedule);
