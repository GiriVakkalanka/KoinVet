import React, { Component } from 'react';
import { Button, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ExpertiseGalleryItem extends Component {
  componentDidMount() {
    //console.log(this.props.application);
  }

  renderButton() {
    //console.log(this.state.buttonValue);
    if (this.props.application.includes(this.props.title)) {
      return 'Deselect';
    } else {
      return 'Select';
    }
  }

  handleClick() {
    if (this.props.application.includes(this.props.title)) {
      //console.log(this.props.title);
      //this.setState({ buttonValue: false });
      this.props.removeExpertise(this.props.title);
      console.log(this.props.application);
    } else {
      //console.log(this.props.title);
      //this.setState({ buttonValue: true });

      this.props.addExpertise(this.props.title);
      console.log(this.props.application);
      //console.log(this.state.buttonValue);
    }
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Panel
          onClick={() => {
            this.handleClick();
          }}
        >
          <Panel.Heading>
            <h3>{this.props.title}</h3>
          </Panel.Heading>
          <Panel.Body>
            <h1>Feature</h1>
            <p>Benefit</p>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(ExpertiseGalleryItem);

/*
<Button
  onClick={() => {
    this.handleClick();
  }}
>
  {this.renderButton()}
</Button>
*/
