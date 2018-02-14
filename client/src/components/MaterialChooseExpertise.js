import _ from 'lodash';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
//import { Jumbotron } from 'react-bootstrap';
//import ExpertiseGallery from './ExpertiseGallery';
import { connect } from 'react-redux';
import * as actions from '../actions';
//import SelectedMedExpertise1 from '../images/SelectedMedExpertise1.png';
//import Expertise2 from '../images/Expertise2.png';
//import Expertise3 from '../images/Expertise3.png';
//import Expertise4 from '../images/Expertise4.png';

class MaterialChooseExpertise extends Component {
  handleClick(expertise) {
    if (this.props.application.includes(expertise)) {
      //console.log(this.props.title);
      //this.setState({ buttonValue: false });
      this.props.removeExpertise(expertise);
      console.log(expertise);
    } else {
      //console.log(this.props.title);
      //this.setState({ buttonValue: true });

      this.props.addExpertise(expertise);
      console.log(expertise);
      //console.log(this.state.buttonValue);
    }
  }

  renderButton(expertise) {
    if (this.props.application.includes(expertise)) {
      return (
        <button
          onClick={() => {
            this.handleClick(expertise);
          }}
          className="btn blue accent-1 black-text"
        >
          Deselect
        </button>
      );
    }
    return (
      <button
        onClick={() => {
          this.handleClick(expertise);
        }}
        className="btn yellow accent-2 black-text"
      >
        Select
      </button>
    );
  }

  renderText(headline, subtitle) {
    //console.log(headline, subtitle);
    if (this.props.application.includes(headline)) {
      return (
        <div className="card-content teal-text">
          <div>
            <h3>{headline}</h3>
            <h4>{subtitle}</h4>
          </div>
        </div>
      );
    }
    return (
      <div className="card-content white-text">
        <div>
          <h3>{headline}</h3>
          <h4>{subtitle}</h4>
        </div>
      </div>
    );
  }

  renderExpertiseChoices(content) {
    return _.map(content, item => {
      return (
        <div key={item.number} className="row">
          <div className="col s6 offset-s3">
            <div className="card grey darken-4">
              {this.renderText(item.headline, item.subtitle)}
              <div className="card-action">
                {this.renderButton(item.headline)}
              </div>
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
                <Link
                  to="/sensei_application/basic_info"
                  className="btn-large yellow accent-2 black-text"
                >
                  Back
                </Link>
                <Link
                  to="/sensei_application/professional_links"
                  className="btn-large yellow accent-2 black-text right-align"
                >
                  Next
                </Link>
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

function mapStateToProps({ application, auth }) {
  return { application, auth };
}

export default connect(mapStateToProps, actions)(MaterialChooseExpertise);

/*
handleChange(key) {
  const selection = parseInt(`${key}`, 10);
  //const selectionInts = [];
  //selectionInts.push(selection);

  if (selection) {
    //this.setState(this.state.choices[key]++);
    this.state.choices[selection]++;
    console.log(selection);
    console.log(this.state.choices);
  } else {
    //this.state.choices[selection]--;
    console.log('deselection');
    console.log(this.state.choices);
  }

  //console.log(this.state.choices);
  /*
  } else {
    this.setState(this.state.choices[selection]--);
  }


  this.setState({ value: key });
  //console.log(this.state.choices);
}
*/

/*
<ToggleButtonGroup
  type="checkbox"
  value={this.state.value}
  onChange={key => this.handleChange(key)}
>
  <ToggleButton value={1}>Checkbox 1 </ToggleButton>
  <ToggleButton value={2}>Checkbox 2 </ToggleButton>
  <ToggleButton value={3}>Checkbox 3 </ToggleButton>
  <ToggleButton value={4}>Checkbox 4 </ToggleButton>
</ToggleButtonGroup>
*/
