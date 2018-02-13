import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import GalleryItemModal from './GalleryItemModal';

class GalleryItem extends Component {
  state = { showModal: false };

  render() {
    //const popover = <GalleryItemOverlay />;
    return (
      <div style={{ textAlign: 'center' }}>
        <Panel
          onClick={() => {
            this.setState({ showModal: true });
          }}
        >
          <Panel.Heading>
            <h1>{this.props.header}</h1>
          </Panel.Heading>
          <Panel.Body>
            <h3>{this.props.sentence}</h3>
          </Panel.Body>
        </Panel>
        <GalleryItemModal
          showModal={this.state.showModal}
          closeModal={() => this.setState({ showModal: false })}
          title={this.props.header}
          body={this.props.body}
        />
      </div>
    );
  }
}

export default GalleryItem;
