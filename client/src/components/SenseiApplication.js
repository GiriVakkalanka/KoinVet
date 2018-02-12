import React from 'react';
import { PageHeader } from 'react-bootstrap';
import Logo from '../images/logo10.png';
import ApplicationNavigator from './ApplicationNavigator';

const SenseiApplication = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <PageHeader style={{ textAlign: 'center' }}>
        <img src={Logo} />
        Sensei Application
      </PageHeader>
      <ApplicationNavigator />
    </div>
  );
};

export default SenseiApplication;
