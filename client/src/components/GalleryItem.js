import React, { Component } from 'react';
import { Button, Panel } from 'react-bootstrap';
import GalleryItemModal from './GalleryItemModal';

class GalleryItem extends Component {
  state = { showModal: false };

  render() {
    //const popover = <GalleryItemOverlay />;
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>GalleryItem</h1>
        <Panel
          onClick={() => {
            this.setState({ showModal: true });
          }}
        >
          <Panel.Body>
            <h1>Feature</h1>
            <p>Benefit</p>
          </Panel.Body>
          <Button
            onClick={() => {
              this.setState({ showModal: true });
            }}
          >
            Button
          </Button>
        </Panel>
        <GalleryItemModal
          showModal={this.state.showModal}
          closeModal={() => this.setState({ showModal: false })}
        />
      </div>
    );
  }
}

export default GalleryItem;
