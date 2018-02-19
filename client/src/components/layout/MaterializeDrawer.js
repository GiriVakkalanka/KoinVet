import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
//import { Button, PageHeader } from 'react-bootstrap';

class MaterializeDrawer extends Component {
  state = { open: true };

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <ul id="slide-out" className="side-nav">
        <li>
          <a href="#!">
            <i className="material-icons">cloud</i>First Link With Icon
          </a>
        </li>
        <li>
          <a href="#!">Second Link</a>
        </li>
        <li>
          <div className="divider" />
        </li>
        <li>
          <a className="subheader">Subheader</a>
        </li>
        <li>
          <a className="waves-effect" href="#!">
            Third Link With Waves
          </a>
        </li>
      </ul>
    );
  }
}

export default MaterializeDrawer;
