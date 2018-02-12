import _ from 'lodash';
import React, { Component } from 'react';
import ExpertiseGalleryItem from './ExpertiseGalleryItem';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ExpertiseGallery extends Component {
  renderItems() {
    const expertAreas = [
      'Onboarding Process',
      'Whitepaper Analysis',
      'Business Analysis',
      'Tax Analysis'
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

export default connect(mapStateToProps, actions)(ExpertiseGallery);

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
