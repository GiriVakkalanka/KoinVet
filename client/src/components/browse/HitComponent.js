//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class HitComponent extends Component {
  render() {
    return (
      <div className="card grey darken-4">
        <div className="card-content white-text">
          <div className="row">
            <div className="col s6">
              <h5>{this.props.name}</h5>
            </div>
            <div className="col s3 offset-s3">
              <h4>${this.props.rate}/hr</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(HitComponent);
