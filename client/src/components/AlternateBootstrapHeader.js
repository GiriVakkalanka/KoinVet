import React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/Link1">
              Link1
            </NavItem>
            <NavItem eventKey={2} href="/Link2">
              Link2
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="/input">
              InputComponent
            </NavItem>
            <NavItem eventKey={2} href="/rep">
              Rep
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
