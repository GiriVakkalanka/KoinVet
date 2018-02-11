import React from 'react';
import { Button, Popover } from 'react-bootstrap';

const GalleryItemOverlay = () => {
  return (
    <Popover id="popover-trigger-click-root-close" title="Title">
      <strong>Overlay</strong>
    </Popover>
  );
};

export default GalleryItemOverlay;
