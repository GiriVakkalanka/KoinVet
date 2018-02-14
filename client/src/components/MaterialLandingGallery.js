import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
//import GalleryItem from './GalleryItem';
//import { Row, Col } from 'react-bootstrap';

class MaterialLandingGallery extends Component {
  renderBigCard(content) {
    return _.map(content, item => {
      return (
        <div key={item.number} className="col s12">
          <div className="card grey darken-4">
            <div className="card-content white-text">
              <div>
                <h1>{item.headline}</h1>
                <h3>{item.subtitle}</h3>
              </div>
            </div>
            <div className="card-action">
              <Link to="/sensei_application/basic_info">
                <button className="btn btn-large yellow accent-2 black-text">
                  Join Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      );
    });
  }

  renderSmallCard(content) {
    return _.map(content, item => {
      const offset = 'col s9 offset-s3 right-align';
      const noOffset = 'col s9';
      const even = item.number % 2 === 0;
      return (
        <div key={item.number} className="row">
          <div className={even ? `${noOffset}` : `${offset}`}>
            <div className="card grey darken-4">
              <div className="card-content white-text">
                <div>
                  <h4>{item.headline}</h4>
                  <h5>{item.subtitle}</h5>
                </div>
              </div>
              <div className="card-action">
                <Link
                  to="/more_information"
                  className="btn yellow accent-2 black-text"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    const banner = [
      {
        headline: 'Connect with reliable experts for crypto advice.',
        subtitle: 'Now accepting Senseis.',
        number: 0
      }
    ];

    const footer = [
      {
        headline: 'Advise the crypto world.',
        subtitle: 'Become a sensei today.',
        number: 0
      }
    ];

    const gallery = [
      {
        headline: 'Monetize your expertise.',
        subtitle:
          'Your knowledge is value. Set your hourly rates. Get paid through PayPal.',
        number: 0
      },
      {
        headline: 'Crypto is dangerous.',
        subtitle:
          'You represent safety. The market needs your expertise to function well.',
        number: 1
      },
      {
        headline: 'Your clients are global.',
        subtitle:
          'Instant access to a planet of investors looking for insights and advantage.',
        number: 2
      }
    ];

    return (
      <div>
        <div className="row">{this.renderBigCard(banner)}</div>
        <div className="row">{this.renderSmallCard(gallery)}</div>
        <div className="row right-align">{this.renderBigCard(footer)}</div>
      </div>
    );
  }
}

export default MaterialLandingGallery;
