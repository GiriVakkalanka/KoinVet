import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ExpertiseGalleryItem extends Component {
  componentDidMount() {
    //console.log(this.props.application);
  }

  renderButton() {
    //console.log(this.state.buttonValue);
    if (this.props.application.includes(this.props.title[0])) {
      return 'Deselect';
    } else {
      return 'Select';
    }
  }

  handleClick() {
    if (this.props.application.includes(this.props.title[0])) {
      //console.log(this.props.title);
      //this.setState({ buttonValue: false });
      this.props.removeExpertise(this.props.title[0]);
      console.log(this.props.application);
    } else {
      //console.log(this.props.title);
      //this.setState({ buttonValue: true });

      this.props.addExpertise(this.props.title[0]);
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
            <h4>{this.props.title[0]}</h4>
          </Panel.Heading>
          <Panel.Body>
            <h1>{this.props.title[1]}</h1>
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
