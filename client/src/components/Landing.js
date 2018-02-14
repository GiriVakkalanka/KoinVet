import React from 'react';
//import { Button } from 'react-bootstrap';
//import LandingGallery from './LandingGallery';
import MaterialLandingGallery from './MaterialLandingGallery';
import Logo from '../images/logo30.png';
//import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <div>
        <div className="row">
          <div className="col s12">
            <div className="card">
              <div className="card-image">
                <img style={{ margin: '20px' }} src={Logo} alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <MaterialLandingGallery />
      </div>
    </div>
  );
};

export default Landing;
