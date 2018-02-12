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
  handleSubmit() {
    const urls = {
      linkOne: findDOMNode(this.refs.linkOne).value,
      linkTwo: findDOMNode(this.refs.linkTwo).value,
      linkThree: findDOMNode(this.refs.linkThree).value
    };
    //this.props.postBooks(book);
    console.log(urls);
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
              <Button onClick={this.handleSubmit.bind(this)}>Submit</Button>
            </Panel>
          </Well>
        </Col>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(ProfessionalLinks);
