import React from 'react';
//import { Button } from 'react-bootstrap';
import LandingGallery from './LandingGallery';
import MaterialLandingGallery from './MaterialLandingGallery';
import Logo from '../images/logo15.png';
//import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <img style={{ margin: '20px' }} src={Logo} alt="logo" />
      </div>
      <div>
        <MaterialLandingGallery />
      </div>
    </div>
  );
};

export default Landing;
