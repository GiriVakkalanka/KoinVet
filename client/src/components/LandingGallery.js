import React from 'react';
import GalleryItem from './GalleryItem';
import { Row, Col } from 'react-bootstrap';

const LandingGallery = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Connect with safe and reliable experts for all your crypto needs.</h2>
      <h2>We are currently in stealth mode and evaluating experts.</h2>
      <h1>Apply to become an expert today!</h1>
      <p>Tap anywhere to learn more</p>
      <Row>
        <Col xs={12} md={4}>
          <GalleryItem
            header="Monetize your expertise"
            sentence="Your knowledge is value. Set your own hourly rates. Get paid through PayPal."
            body="Looking for technical expertise for whitepaper analysis, business expertise for valuation analysis, tax expertise for tax analysis and general expertise for onboarding/wallet setup services. Should you be approved, you may choose to provide any of the services specified and receive payment 7 days after scheduled session. The world of cryptocurrencies is fraught with danger and MyCryptoSensei is a place where clients come to seek safety and expertise. Such expertise is extremely valuable"
          />
        </Col>
        <Col xs={12} md={4}>
          <GalleryItem
            header="Schedule convenient sessions"
            sentence="Clients are available on your time and on your terms. Coordinate via chat."
            body="Use the MyCryptoSensei scheduling features to indicate your availability to potential clients. Use the chat functionality to coordinate on logistics, set up call times, etc. Work on your terms and according to your own expertise."
          />
        </Col>
        <Col xs={12} md={4}>
          <GalleryItem
            header="Build a global client base"
            sentence="Instant access to a global network of investors looking for insight and advantage."
            body="Cryptocurrency investors are diverse and global. The one thing that they have in common is a need for guidance and expertise. Whether it be technical insight into the workings of a token or business insight into the long term viability of a company, MyCryptoSensei is the place for clients and experts to find eachother and share."
          />
        </Col>
      </Row>
    </div>
  );
};

export default LandingGallery;
