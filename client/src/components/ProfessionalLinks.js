import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import * as actions from '../actions';
import {
  Col,
  Well,
  Panel,
  FormControl,
  FormGroup,
  ControlLabel,
  Button
} from 'react-bootstrap';

class ProfessionalLinks extends Component {
  componentDidMount() {
    console.log(this.props.application);
  }
  handleSubmit() {
    const linkOne = findDOMNode(this.refs.linkOne).value;
    const linkTwo = findDOMNode(this.refs.linkTwo).value;
    const linkThree = findDOMNode(this.refs.linkThree).value;

    const links = [linkOne, linkTwo, linkThree];
    //console.log(links);

    const expertise = this.props.application;
    console.log(expertise);

    const application = [expertise, links];
    console.log(application);

    this.props.submitApplication(application);
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Col xs={12}>
          <h1> ProfessionalLinks </h1>
          <Well>
            <Panel>
              <FormGroup controlId="linkOne">
                <ControlLabel>Link 1</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Add in any three links to demonstrate your expertise. LinkedIn, GitHub, Personal Page, etc."
                  ref="linkOne"
                />
              </FormGroup>

              <FormGroup controlId="linkTwo">
                <ControlLabel>Link 2</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Add in any three links to demonstrate your expertise. LinkedIn, GitHub, Personal Page, etc."
                  ref="linkTwo"
                />
              </FormGroup>

              <FormGroup controlId="linkThree">
                <ControlLabel>Link 3</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Add in any three links to demonstrate your expertise. LinkedIn, GitHub, Personal Page, etc."
                  ref="linkThree"
                />
              </FormGroup>
              <Button
                bsStyle="primary"
                bsSize="large"
                onClick={this.handleSubmit.bind(this)}
              >
                Submit Application!
              </Button>
            </Panel>
          </Well>
        </Col>
      </div>
    );
  }
}

function mapStateToProps({ auth, application }) {
  return { auth, application };
}

export default connect(mapStateToProps, actions)(ProfessionalLinks);
