import React from 'react';
import GalleryItem from './GalleryItem';
import { Row, Col } from 'react-bootstrap';

const LandingGallery = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Landing Gallery</h1>
      <Row>
        <Col xs={4}>
          <GalleryItem />
        </Col>
        <Col xs={4}>
          <GalleryItem />
        </Col>
        <Col xs={4}>
          <GalleryItem />
        </Col>
      </Row>
    </div>
  );
};

export default LandingGallery;
