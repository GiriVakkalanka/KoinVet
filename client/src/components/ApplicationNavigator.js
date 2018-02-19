import React, { Component } from 'react';
//import { NavItem, Nav, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';
//import ChooseExpertise from './ChooseExpertise';
//import BasicInformation from './BasicInformation';
//import ProfessionalLinks from './ProfessionalLinks';
import { Link } from 'react-router-dom';
//import ThankYou from './ThankYou';

class ApplicationNavigator extends Component {
  /*
  componentDidMount() {
    //console.log('called');
    this.setState({ key: this.props.location });
  }


  componentWillReceiveProps(nextProps) {
    this.setState({ key: this.props.location });
  }
  */

  renderButton(linkName, linkAddress, linkKey) {
    if (linkKey === this.props.location) {
      return (
        <Link
          to={`${linkAddress}`}
          className="btn blue accent-1 black-text"
          onClick={() => {
            console.log('called');
            this.setState({ key: linkKey });
          }}
        >
          {linkName}
        </Link>
      );
    }
    return (
      <Link
        className="btn yellow accent-3 black-text"
        to={`${linkAddress}`}
        onClick={() => {
          console.log('called');
          this.setState({ key: linkKey });
        }}
      >
        {linkName}
      </Link>
    );
  }

  handleClick() {}
  renderContent() {
    const basicInfo = '/sensei_application/basic_info';
    const expertise = '/sensei_application/expertise';
    const professionalLinks = '/sensei_application/professional_links';
    const thanks = '/sensei_application/thanks';
    return [
      <li key="1">
        <Link to="/sensei_application/basic_info">
          {this.renderButton('Basic info', basicInfo, 0)}
        </Link>
      </li>,
      <li key="2">
        <Link to="/sensei_application/expertise">
          {this.renderButton('Expertise', expertise, 1)}
        </Link>
      </li>,
      <li key="3">
        <Link to="/sensei_application/professional_links">
          {this.renderButton('Pro Links', professionalLinks, 2)}
        </Link>
      </li>,
      <li key="4">
        <Link to="/sensei_application/thanks">
          {this.renderButton('Thank You', thanks, 3)}
        </Link>
      </li>
    ];
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper grey darken-4">
          <ul>{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ application, auth, location }) {
  return { application, auth, location };
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
