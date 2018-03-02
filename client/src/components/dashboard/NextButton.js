//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter } from 'react-router-dom';

class NextButton extends Component {
  render() {
    return (
      <div>
        <Link to={this.props.to}>
          <RaisedButton
            label={this.props.label}
            backgroundColor="#ffff00"
            onClick={() => this.props.onClick()}
          />
        </Link>
      </div>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(withRouter(NextButton));
