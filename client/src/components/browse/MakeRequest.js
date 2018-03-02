//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import RequestTimeSlotSelector from './RequestTimeSlotSelector';
import RequestTimeSlotList from './RequestTimeSlotList';

class MakeRequest extends Component {
  render() {
    return (
      <div>
        <div className="row card" style={{ paddingBottom: '20' }}>
          <div className="card-content">
            <div className="col s8">
              <RequestTimeSlotList />
            </div>
            <div className="col s4">
              <RequestTimeSlotSelector />
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

export default connect(mapStateToProps, actions)(MakeRequest);
