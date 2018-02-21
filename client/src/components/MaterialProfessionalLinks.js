import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import { Col, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

class ProfessionalLinks extends Component {
  componentDidMount() {
    this.props.changeLocation(2);
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
    //this.props.saveExpertise(application);
  }

  renderQuestionCard(content) {
    return _.map(content, item => {
      return (
        <div key={item.number} className="row">
          <div className="col s12">
            <div className="card grey darken-4">
              <div className="card-content white-text">
                <div>
                  <h1>{item.headline}</h1>
                  <h3>{item.subtitle}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    const question = [
      {
        headline: 'What do you do?',
        subtitle: 'Send us any three links that best describe your work.',
        number: 0
      }
    ];

    return (
      <div className="card grey darken-4">
        <div>
          <Col xs={12}>
            <div> {this.renderQuestionCard(question)} </div>

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
            <Link
              onClick={() => this.handleSubmit()}
              className="btn-large yellow accent-2 black-text "
              to="/sensei_application/thanks"
            >
              SUBMIT
            </Link>
          </Col>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth, application, location }) {
  return { auth, application, location };
}

export default connect(mapStateToProps, actions)(ProfessionalLinks);
