//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SenseiPage extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getSenseiPage({ key: this.props.match.params.senseiId });
  }
  render() {
    return (
      <div>
        <h1>{this.props.senseiPage.name}</h1>
      </div>
    );
  }
}

function mapStateToProps({ senseiPage, auth }) {
  return { senseiPage, auth };
}

export default connect(mapStateToProps, actions)(SenseiPage);
