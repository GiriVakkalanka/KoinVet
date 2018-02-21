import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import { Col, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

class ProfessionalLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      0: false,
      1: false,
      2: false
    };
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

  handleChange(keyLink) {
    const parsedKeyLink = parseInt(keyLink, 10);
    switch (parsedKeyLink) {
      case 0:
        //console.log('case 0');
        return this.setState(prevState => {
          return { 0: !prevState[0] };
        });
      case 1:
        return this.setState(prevState => {
          return { 1: !prevState[1] };
        });
      case 2:
        return this.setState(prevState => {
          return { 2: !prevState[2] };
        });
      default:
        return;
    }
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

  renderForm() {
    const keys = Object.keys(this.state);
    const labels = ['Link One', 'Link Two', 'Link Three'];
    const refs = ['linkOne', 'linkTwo', 'linkThree'];
    return _.map(keys, keyLink => {
      if (this.state[keyLink]) {
        return (
          <div key={keyLink}>
            <FormGroup controlId={keyLink}>
              <ControlLabel>{labels[keyLink]}</ControlLabel>
              <FormControl
                type="text"
                placeholder="Add in any link. GitHub, LinkedIn, Personal Page, etc."
                ref={keyLink}
              />
            </FormGroup>
            <button className="btn" onClick={() => this.handleChange(keyLink)}>
              Save
            </button>
          </div>
        );
      } else {
        return (
          <div key={keyLink}>
            <FormGroup controlId={keyLink}>
              <ControlLabel>{labels[keyLink]}</ControlLabel>
              <FormControl
                type="text"
                placeholder="Add in any link. GitHub, LinkedIn, Personal Page, etc."
                ref={keyLink}
                value={this.props.auth ? this.props.auth.links[keyLink] : ''}
              />
            </FormGroup>
            <button
              className="btn"
              onClick={() => {
                //console.log(keyLink);
                this.handleChange(keyLink);
              }}
            >
              Edit
            </button>
          </div>
        );
      }
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
            <div> {this.renderForm()}</div>
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
