import React from 'react';
//import { Button } from 'react-bootstrap';
//import LandingGallery from './LandingGallery';
import MaterialLandingGallery from './MaterialLandingGallery';
import Logo from '../images/logo15.png';
import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom';

const MaterialThanks = () => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card grey darken-4">
          <div className="card-content white-text">
            <div>
              <h1>Thank you.</h1>
              <h3>
                We will review your application and get back to you shortly
              </h3>
              <Link className="btn-large yellow accent-2 black-text " to="/">
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialThanks;
