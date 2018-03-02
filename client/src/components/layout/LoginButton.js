//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import MaterialBasicInformation from '../MaterialBasicInformation';
class LoginButton extends Component {
  state = {
    open: false
  };

  handleClose() {
    this.setState({ open: false });
  }

  handleOpen() {
    this.setState({ open: true });
  }

  render() {
    return (
      <div style={{ paddingRight: 20, paddingTop: 7 }}>
        <Link to="/apply/basic-info">
          <RaisedButton
            onClick={() => this.handleOpen()}
            backgroundColor="#ffff00"
            label={this.props.label}
          />
        </Link>
        <Dialog
          title="Dialog With Actions"
          open={this.state.open}
          onRequestClose={() => this.handleClose()}
        >
          <MaterialBasicInformation />
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(LoginButton);
