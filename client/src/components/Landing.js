import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import LandingGallery from './LandingGallery';
//import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Jumbotron>
        <h1> MyCryptoSensei </h1>
        <p>
          MyCryptoSensei connects you to safe and reliable experts for all your
          Crypto advice regarding on-boarding, whitepapers, valuation, and tax
        </p>
      </Jumbotron>

      <div>
        <LandingGallery />
      </div>

      <div>
        <Button bsStyle="primary" bsSize="large" href="/sensei_application">
          Apply Now!
        </Button>
      </div>
    </div>
  );
};

export default Landing;
