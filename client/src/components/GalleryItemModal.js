import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class GalleryItemModal extends Component {
  render() {
    return (
      <Modal
        show={this.props.showModal}
        onHide={() => {
          this.props.closeModal();
        }}
        dialogClassName="custom-modal"
      >
        <div style={{ textAlign: 'center' }}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
              {this.props.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.props.body}</p>
            <Button
              onClick={() => {
                this.props.closeModal();
              }}
            >
              Close
            </Button>
          </Modal.Body>
        </div>
      </Modal>
    );
  }
}

export default GalleryItemModal;
