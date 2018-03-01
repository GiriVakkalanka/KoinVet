import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class HitComponent extends Component {
  componentDidMount() {
    console.log(this.props.specialization);
    console.log(this.props.expertise);
  }

  renderSpecializationChips() {
    return _.map(this.props.specialization, specialization => {
      return <div className="chip yellow accent-2">{specialization}</div>;
    });
  }

  renderExpertiseChips() {
    return _.map(this.props.expertise, expertise => {
      return <div className="chip blue darken-2 white-text">{expertise}</div>;
    });
  }

  render() {
    return (
      <div className="card grey darken-4">
        <div className="card-content white-text">
          <div className="row">
            <div className="col s6">
              <h5>{this.props.name}</h5>
              <p>
                {this.props.city}, {this.props.country}
              </p>
            </div>
            <div className="col s3 offset-s3 right">
              <h4>${this.props.rate}/hr</h4>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <p>{this.props.desc}</p>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <div>{this.renderExpertiseChips()}</div>
            </div>
            <div className="col s12">
              <div>{this.renderSpecializationChips()}</div>
            </div>
            <div className="col s3 offset-s8">
              <Link to="/" className="btn yellow accent-2 black-text right">
                See Availability
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(HitComponent);