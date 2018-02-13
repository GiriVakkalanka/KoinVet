import _ from 'lodash';
import React, { Component } from 'react';
import ExpertiseGalleryItem from './ExpertiseGalleryItem';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';

class MaterialExpertiseGallery extends Component {
  renderItems() {
    const expertAreas = [
      [
        'Onboarding Process',
        'Guide users with account/wallet setup through cold storage'
      ],
      [
        'Whitepaper Analysis',
        'Help users understand the technical foundations of a given coin'
      ],
      [
        'Business Analysis',
        'Help users understand the business case and valuation of a given coin'
      ],
      [
        'Tax Analysis',
        'Help users understand the tax considerations related to crypto investing'
      ]
    ];
    return _.map(expertAreas, expertise => {
      return (
        <Col key={expertise} xs={12} sm={3}>
          <ExpertiseGalleryItem title={expertise} />
        </Col>
      );
    });
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Row>{this.renderItems()}</Row>
      </div>
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(MaterialExpertiseGallery);

/*
<Row>
  <Col xs={3}>
    <ExpertiseGalleryItem />
  </Col>
  <Col xs={3}>
    <ExpertiseGalleryItem />
  </Col>
  <Col xs={3}>
    <ExpertiseGalleryItem />
  </Col>
  <Col xs={3}>
    <ExpertiseGalleryItem />
  </Col>
</Row>
*/
