import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import LandingGallery from './LandingGallery';
import Logo from '../images/logo10.png';
//import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={Logo} />
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
