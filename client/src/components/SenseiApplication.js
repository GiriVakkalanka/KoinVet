import React from 'react';
import { Button, PageHeader } from 'react-bootstrap';
import ApplicationNavigator from './ApplicationNavigator';

const SenseiApplication = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <PageHeader style={{ textAlign: 'center' }}>
        Sensei Application
        <ApplicationNavigator />
      </PageHeader>
      Congrats
      <div>
        <Button href="/">Go Back</Button>
      </div>
    </div>
  );
};

export default SenseiApplication;
