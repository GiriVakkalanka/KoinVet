import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
//import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import { Col, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import NextButton from './NextButton';

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

    // const expertise = this.props.application;
    // console.log(expertise);

    console.log(links);

    this.props.saveLinks(links);
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
                <div className="card-action">
                  <div className="row">
                    <div className="col s1">
                      <NextButton
                        to="/dashboard/select-specialization"
                        label="Prev"
                        onClick={() => console.log('click')}
                      />
                    </div>
                    <div className="col s1 offset-s1">
                      <NextButton
                        to="/dashboard/add-info"
                        label="Next"
                        onClick={() => this.handleSubmit()}
                      />
                    </div>
                  </div>
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
      if (
        this.state[keyLink] ||
        (this.props.auth ? this.props.auth.links.length === 0 : false)
      ) {
        return (
          <div className="card-content" key={keyLink}>
            <FormGroup controlId={refs[keyLink]}>
              <ControlLabel>{labels[keyLink]}</ControlLabel>
              <FormControl
                type="text"
                placeholder="Add in any link. GitHub, LinkedIn, Personal Page, etc."
                ref={refs[keyLink]}
              />
            </FormGroup>
          </div>
        );
      } else {
        return (
          <div className="card-content" key={keyLink}>
            <FormGroup controlId={refs[keyLink]}>
              <ControlLabel>{labels[keyLink]}</ControlLabel>
              <FormControl
                type="text"
                placeholder="Add in any link. GitHub, LinkedIn, Personal Page, etc."
                ref={refs[keyLink]}
                value={this.props.auth ? this.props.auth.links[keyLink] : ''}
              />
            </FormGroup>
            <RaisedButton
              label="Edit"
              onClick={() => this.handleChange(keyLink)}
              backgroundColor="#ffff00"
            />
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
            <div className="card"> {this.renderForm()}</div>
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
