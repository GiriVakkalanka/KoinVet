import React, { Component } from 'react';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

class ApplicationNavigator extends Component {
  state = {
    value: null
  };

  handleChange(e) {
    this.setState({ value: e });
    console.log(this.state);
  }
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <ToggleButtonGroup
          type="checkbox"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <ToggleButton value={1} bsStyle="primary">
            Left
          </ToggleButton>
          <ToggleButton value={2} bsStyle="primary">
            Middle
          </ToggleButton>
          <ToggleButton value={3} bsStyle="primary">
            Right
          </ToggleButton>
          <ToggleButton value={4} bsStyle="primary">
            Right
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    );
  }
}

export default ApplicationNavigator;
