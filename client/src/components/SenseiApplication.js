import React from 'react';
import { PageHeader } from 'react-bootstrap';
import ApplicationNavigator from './ApplicationNavigator';

const SenseiApplication = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <PageHeader style={{ textAlign: 'center' }}>
        Sensei Application
      </PageHeader>
      <ApplicationNavigator />
    </div>
  );
};

export default SenseiApplication;
