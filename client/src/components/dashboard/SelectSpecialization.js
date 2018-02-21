//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import ChipInput from 'material-ui-chip-input';

class SelectSpecialization extends Component {
  state = { chips: [] };

  handleChange(chips) {
    //console.log(chips);
    this.setState({ chips });
    //console.log(this.state.chips);
  }

  handleAddChip(chip) {
    const newChips = this.state.chips;
    newChips.push(chip);
    this.setState({ chips: newChips });
    this.props.saveSpecialization(this.state.chips);
  }

  handleDeleteChip(chip, index) {
    //console.log(index);

    let newChips = this.state.chips;
    newChips.splice(index, 1);
    //newChips = [...newChips.slice(0, index), ...newChips.slice(index + 1)];
    this.setState({ chips: newChips });
    this.props.saveSpecialization(this.state.chips);
  }

  handleClick() {
    this.props.saveSpecialization(this.state.chips);
  }

  render() {
    //const defaultChips = this.props.auth ? this.props.auth.specialization : [];
    //console.log(defaultChips);
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <div className="card grey darken-4">
              <div className="card-content white-text">
                <div>
                  <h3>Enter your areas of specialization.</h3>
                  <h5>Ex. Litecoin, ERC20, SegWit, etc.</h5>
                </div>
              </div>
              <div className="card-action">
                <Link
                  to="/"
                  className="btn-large yellow accent-2 black-text"
                  onClick={() => {
                    this.handleClick();
                  }}
                >
                  Submit
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="center">
          <ChipInput
            value={this.props.auth ? this.props.auth.specialization : []}
            onRequestAdd={chip => this.handleAddChip(chip)}
            onRequestDelete={(chip, index) =>
              this.handleDeleteChip(chip, index)}
            hintText="Type your areas of specialization here. Press Enter after each one."
            fullWidth={true}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(SelectSpecialization);
