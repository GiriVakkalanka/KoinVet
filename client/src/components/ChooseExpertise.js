import _ from 'lodash';
import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import ExpertiseGallery from './ExpertiseGallery';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ChooseExpertise extends Component {
  //state = [];
  componentDidMount() {
    this.props.getExpertise();
    //console.log(this.props.application);
  }

  renderJumbo() {
    return _.map(this.props.application, expertise => {
      return <p key={expertise}> {expertise} </p>;
    });
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1> What is your area of expertise?</h1>
        <h2>Choose all that apply.</h2>
        <Jumbotron>
          <div>{this.renderJumbo()}</div>
        </Jumbotron>
        <ExpertiseGallery />
      </div>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(ChooseExpertise);

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
