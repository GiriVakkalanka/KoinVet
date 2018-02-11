import React, { Component } from 'react';
import { NavItem, Nav } from 'react-bootstrap';
import ChooseExpertise from './ChooseExpertise';
import BasicInformation from './BasicInformation';
import ProfessionalLinks from './ProfessionalLinks';
import ThankYou from './ThankYou';

class ApplicationNavigator extends Component {
  state = {
    value: 1
  };

  handleSelect(selectedKey) {
    //console.log(`${selectedKey}`);
    const selection = parseInt(`${selectedKey}`, 10);

    this.setState({ value: selection });
  }

  handleFormChange() {
    switch (this.state.value) {
      case 1:
        return <ChooseExpertise />;
      case 2:
        return <BasicInformation />;
      case 3:
        return <ProfessionalLinks />;
      case 4:
        return <ThankYou />;
      default:
        return <ChooseExpertise />;
    }
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Nav
          bsStyle="tabs"
          justified
          activeKey={this.state.value}
          onSelect={key => this.handleSelect(key)}
        >
          <NavItem eventKey={1}>Choose Expertise</NavItem>
          <NavItem eventKey={2}>Basic Information</NavItem>
          <NavItem eventKey={3}>ProfessionalLinks</NavItem>
          <NavItem eventKey={4}>Thank You!</NavItem>
        </Nav>
        <div>{this.handleFormChange()}</div>
      </div>
    );
  }
}

export default ApplicationNavigator;
