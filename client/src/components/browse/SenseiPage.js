import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import MakeRequest from './MakeRequest';
class SenseiPage extends Component {
  componentDidMount() {
    //console.log(this.props.senseiPage);
    this.props.getSenseiPage({ key: this.props.match.params.senseiId });
  }

  renderExpertiseChips() {
    console.log(this.props.senseiPage.links);
    return _.map(this.props.senseiPage.expertise, expertise => {
      return (
        <div key={expertise} className="chip chip yellow accent-2">
          {expertise}
        </div>
      );
    });
  }

  renderSpecializationChips() {
    return _.map(this.props.senseiPage.specialization, specialization => {
      return (
        <div key={specialization} className="chip yellow accent-2">
          {specialization}
        </div>
      );
    });
  }

  renderLinks() {
    return _.map(this.props.senseiPage.links, link => {
      console.log(link);
      return (
        <a key={Math.random()} href={link}>
          <i className="material-icons white-text">link</i>
        </a>
      );
    });
  }

  renderProfile() {
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <div className="card grey darken-4">
              <div className="card-content white-text">
                <h1>{this.props.senseiPage.name}</h1>
                <p>
                  Based in {this.props.senseiPage.city},{' '}
                  {this.props.senseiPage.country}
                </p>
                <h5>{this.props.senseiPage.description}</h5>
                <p>Links</p>
                <div>{this.renderLinks()}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <div className="card grey darken-4">
              <div className="card-content">
                <div className="white-text">
                  <p>Services offered</p>
                  {this.renderExpertiseChips()}
                </div>
                <div className="white-text">
                  <p>Specialization</p>
                  {this.renderSpecializationChips()}
                </div>
                <div className="white-text">
                  <p>Available for</p>
                  <h4>${this.props.senseiPage.rate}/hr</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <MakeRequest />
        </div>
      </div>
    );
  }
  render() {
    return <div>{this.renderProfile()}</div>;
  }
}

function mapStateToProps({ senseiPage, auth }) {
  return { senseiPage, auth };
}

export default connect(mapStateToProps, actions)(SenseiPage);
