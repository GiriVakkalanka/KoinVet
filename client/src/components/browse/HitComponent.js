import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import RaisedButton from 'material-ui/RaisedButton';
import LoginButton from '../layout/LoginButton';

class HitComponent extends Component {
  componentDidMount() {
    //console.log(this.props.id);
    //console.log(this.props.expertise);
  }

  handleClick() {
    const senseiId = this.props.id;
    const info = { key: senseiId };
    this.props.getSenseiPage(info);
  }

  renderSpecializationChips() {
    return _.map(this.props.specialization, specialization => {
      return (
        <div key={specialization} className="chip yellow accent-2">
          {specialization}
        </div>
      );
    });
  }

  renderExpertiseChips() {
    return _.map(this.props.expertise, expertise => {
      return (
        <div key={expertise} className="chip chip yellow accent-2">
          {expertise}
        </div>
      );
    });
  }

  renderButton() {
    if (this.props.auth) {
      return (
        <Link to={`/test/sensei/${this.props.id}`}>
          <RaisedButton label="See availability" backgroundColor="#ffff00" />
        </Link>
      );
    } else {
      return <LoginButton label="More info" />;
    }
  }

  renderLinks() {
    return _.map(this.props.links, link => {
      console.log(link);
      return (
        <a key={Math.random()} href={link}>
          <i className="material-icons white-text">link</i>
        </a>
      );
    });
  }

  render() {
    return (
      <div key={this.props.id} className="card grey darken-4">
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
              <p>Services offered</p>
              <div>{this.renderExpertiseChips()}</div>
            </div>
            <div className="col s12">
              <p>Specialization</p>
              <div>{this.renderSpecializationChips()}</div>
            </div>
            <div className="col s12">
              <p>Links</p>
              <div>{this.renderLinks()}</div>
            </div>
            <div className="col s3 offset-s8">{this.renderButton()}</div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ application, auth }) {
  return { application, auth };
}

export default connect(mapStateToProps, actions)(HitComponent);
