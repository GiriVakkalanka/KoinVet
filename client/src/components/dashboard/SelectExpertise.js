import _ from 'lodash';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import NextButton from './NextButton';
import RaisedButton from 'material-ui/RaisedButton';

//import { Link } from 'react-router-dom';

class SelectExpertise extends Component {
  handleClick(expertise) {
    if (this.props.application.includes(expertise)) {
      this.props.removeExpertise(expertise);
    } else {
      this.props.addExpertise(expertise);
    }
  }

  renderButton(expertise) {
    if (this.props.application.includes(expertise)) {
      return (
        <RaisedButton
          onClick={() => {
            this.handleClick(expertise);
          }}
          label="Deselect"
          backgroundColor="#ffff00"
        />
      );
    }
    return (
      <RaisedButton
        onClick={() => {
          this.handleClick(expertise);
        }}
        label="Select"
        backgroundColor="#ffff00"
      />
    );
  }

  renderText(headline, subtitle) {
    //console.log(headline, subtitle);
    if (this.props.application.includes(headline)) {
      return (
        <div className="card-content teal-text">
          <div>
            <h5>{headline}</h5>
            <p>{subtitle}</p>
          </div>
        </div>
      );
    }
    return (
      <div className="card-content white-text">
        <div>
          <h5>{headline}</h5>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  }

  renderExpertiseChoices(content) {
    return _.map(content, item => {
      return (
        <div key={item.number} className="col s12 m6">
          <div className="card grey darken-4">
            {this.renderText(item.headline, item.subtitle)}
            <div className="card-action">
              {this.renderButton(item.headline)}
            </div>
          </div>
        </div>
      );
    });
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
              <div className="card-action">
                <div className="row">
                  <div className="col s1">
                    <NextButton
                      to="/"
                      label="Prev"
                      onClick={() =>
                        this.props.saveExpertise(this.props.application)}
                    />
                  </div>
                  <div className="col s1 offset-s1">
                    <NextButton
                      to="/apply/select-specialization"
                      label="Next"
                      onClick={() =>
                        this.props.saveExpertise(this.props.application)}
                    />
                  </div>
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
        headline: 'What are your areas of expertise?',
        subtitle: 'Choose all that apply.',
        number: 0
      }
    ];

    const gallery = [
      {
        headline: 'Whitepaper analysis',
        subtitle:
          'Help users understand the technical foundations of any given coin.',
        number: 0
      },
      {
        headline: 'Onboarding process',
        subtitle:
          'Guide users through wallet setup, getting to cold storage, etc.',
        number: 1
      },
      {
        headline: 'Business analysis',
        subtitle:
          'Help users evaluate the business case and valuation of a coin.',
        number: 2
      },
      {
        headline: 'Tax analysis',
        subtitle:
          'Advise users on the tax considerations related to crypto investing.',
        number: 3
      }
    ];

    return (
      <div>
        <div className="row"> {this.renderQuestionCard(question)} </div>
        <div className="row"> {this.renderExpertiseChoices(gallery)} </div>
      </div>
    );
  }
}

function mapStateToProps({ auth, application }) {
  //console.log({ auth });
  return { auth, application };
}

export default connect(mapStateToProps, actions)(SelectExpertise);
