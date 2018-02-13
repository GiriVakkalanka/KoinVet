import React, { Component } from 'react';
//import { NavItem, Nav, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';
//import ChooseExpertise from './ChooseExpertise';
//import BasicInformation from './BasicInformation';
//import ProfessionalLinks from './ProfessionalLinks';
import ThankYou from './ThankYou';
import { Link } from 'react-router-dom';

class ApplicationNavigator extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="col s12">
            <a href="#!" className="breadcrumb">
              First
            </a>
            <a href="#!" className="breadcrumb">
              Second
            </a>
            <a href="#!" className="breadcrumb">
              Third
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ application, auth }) {
  return { application, auth };
}

export default connect(mapStateToProps, actions)(ApplicationNavigator);

/*
state = {
  value: 1
};

handleFormChange() {
  switch (this.state.value) {
    case 1:
      return <BasicInformation />;
    case 2:
      return <ChooseExpertise />;
    case 3:
      return <ProfessionalLinks />;
    case 4:
      return <ThankYou />;
    default:
      return <ChooseExpertise />;
  }
}
handleSelect(selectedKey) {
  //console.log(`${selectedKey}`);
  const selection = parseInt(`${selectedKey}`, 10);

  this.setState({ value: selection });
}

handlePrev() {
  let selection = this.state.value;
  selection--;
  if (selection <= 4 || selection >= 1) {
    this.setState({ value: selection });
  }
  //console.log(this.state.value);
}

handleNext() {
  let selection = this.state.value;
  selection++;
  if (selection <= 4 || selection >= 1) {
    this.setState({ value: selection });
  }
}

<div style={{ textAlign: 'center' }}>
  <Nav
    bsStyle="pills"
    justified
    activeKey={this.state.value}
    onSelect={key => this.handleSelect(key)}
  >
    <NavItem eventKey={1}>Basic Information</NavItem>
    <NavItem eventKey={2}>Choose Expertise</NavItem>
    <NavItem eventKey={3}>Professional Links</NavItem>
    <NavItem eventKey={4}>Thank You!</NavItem>
  </Nav>
  <div>{this.handleFormChange()}</div>
  <div>
    <Button
      bsStyle="warning"
      bsSize="large"
      onClick={() => {
        this.handlePrev();
      }}
    >
      Prev
    </Button>
    <Button
      bsStyle="warning"
      bsSize="large"
      onClick={() => {
        this.handleNext();
      }}
    >
      Next
    </Button>
  </div>
</div>
*/
