import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import { Col, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import TextField from 'material-ui/TextField';

class AddLinks extends Component {
  renderDefault() {
    //const default = this.props.auth ? this.props.auth.links[0] : '';
  }

  render() {
    return <TextField />;
  }
}

function mapStateToProps({ auth, application, location }) {
  return { auth, application, location };
}

export default connect(mapStateToProps, actions)(AddLinks);
/*
  state = { 0: false, 1: false, 2: false };

  renderFields() {
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
            <button className="btn" onClick={() => this.handleSave(keyLink)}>
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
                //console.log(key);
                this.handleEdit(keyLink);
              }}
            >
              Edit
            </button>
          </div>
        );
      }
    });
  }

  /*
  componentDidMount() {
    const test = 'linkOne';
    const keys = Object.keys(this.state);
    console.log(this.state[test]);
    console.log(keys);
  }
  */
/*
  renderFields() {
    //let i = 0;
    const keys = Object.keys(this.state);
    const labels = ['Link One', 'Link Two', 'Link Three'];
    //console.log(keys.length);

    for (let i = 0; i < keys.length; i++) {
      if (this.state[keys[i]]) {
        console.log(this.state[keys[i]]);
        return;
      } else {
        console.log(this.state[keys[i]]);
        return;
      }

      //console.log(this.state[keys[i]]);
      if (this.state[keys[i]]) {
        return (
          <h1>Hi</h1>

          <div>
            <FormGroup controlId={keys[i]}>
              <ControlLabel>{labels[i]}</ControlLabel>
              <FormControl
                type="text"
                placeholder="Add in any link. GitHub, LinkedIn, Personal Page, etc."
                ref={keys[i]}
              />
            </FormGroup>
            <button className="btn" onClick={i => this.handleSave(i)}>
              Save
            </button>
          </div>

        );
      } else {
        return (
          <h1>Bye</h1>

          <div>
            <FormGroup controlId={keys[i]}>
              <ControlLabel>{labels[i]}</ControlLabel>
              <FormControl
                type="text"
                placeholder="Add in any link. GitHub, LinkedIn, Personal Page, etc."
                value={this.props.auth ? this.props.auth.specialization[i] : ''}
                ref={keys[i]}
              />
            </FormGroup>
            <button className="btn" onClick={() => this.handleEdit(i)}>
              Save
            </button>
          </div>

        );
      }
      //i++;

    }
  }


  handleEdit(key) {
    console.log(key);
    switch (key) {
      case 0:
        return this.setState({ 0: true, 1: false, 2: true });
      case 1:
        return this.setState({ 0: false, 1: true, 2: true });
      case 2:
        return this.setState({ 0: false, 1: true, 2: true });
      default:
        return;
    }
  }

  handleSave(key) {
    switch (key) {
      case 0:
        return this.setState({ 0: false, 1: true, 2: true });
      case 1:
        return this.setState({ 0: true, 1: false, 2: true });
      case 2:
        return this.setState({ 0: true, 1: true, 2: false });
      default:
        return;
    }
  }

  handleSubmit() {
    const linkOne = findDOMNode(this.refs.linkOne).value;
    const linkTwo = findDOMNode(this.refs.linkTwo).value;
    const linkThree = findDOMNode(this.refs.linkThree).value;

    const links = [linkOne, linkTwo, linkThree];

    this.props.saveLinks(links);
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
                  <h3>{item.headline}</h3>
                  <h5>{item.subtitle}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  renderFormField(id, label, index) {
    //const controlId = id;
    if (this.state.editLinkOne) {
      return (
        <FormGroup controlId={id}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl
            type="text"
            placeholder="Add in any link. GitHub, LinkedIn, Personal Page, etc."
            ref={id}
          />
        </FormGroup>
      );
    }

    return (
      <div>
        <FormGroup controlId={id}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl
            type="text"
            placeholder="Add in any link. GitHub, LinkedIn, Personal Page, etc."
            ref={id}
            value={this.props.auth ? this.props.auth.links[index] : ''}
          />
        </FormGroup>
      </div>
    );
  }

  render() {
    const question = [
      {
        headline: 'What do you do?',
        subtitle: 'Add in any three links that best describe your work.',
        number: 0
      }
    ];
    //console.log(this.props.auth ? this.props.auth.links[0] : 'wtf');
    return (
      <div>
        <div className="card grey darken-4">
          <div> {this.renderQuestionCard(question)}</div>
        </div>
        <div>{this.renderFields()}</div>
      </div>
    );
  }
}
*/
