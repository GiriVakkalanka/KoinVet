import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
//import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

//import { Button, PageHeader } from 'react-bootstrap';

class LayoutDrawer extends Component {
  render() {
    //let SelectableList = makeSelectable(List);
    let SelectableList = makeSelectable(List);
    function wrapState(ComposedComponent) {
      return class SelectableList extends React.Component {
        /*
        static propTypes = {
          children: React.PropTypes.node.isRequired,
          defaultValue: React.PropTypes.number.isRequired
        };
      */

        componentWillMount() {
          this.setState({
            selectedIndex: this.props.defaultValue
          });
        }

        handleRequestChange = (event, index) => {
          this.setState({
            selectedIndex: index
          });
        };

        render() {
          return (
            <ComposedComponent
              value={this.state.selectedIndex}
              onChange={this.handleRequestChange}
            >
              {this.props.children}
            </ComposedComponent>
          );
        }
      };
    }

    SelectableList = wrapState(SelectableList);
    return (
      <div>
        <Drawer open={this.props.drawer}>
          <AppBar
            style={{ backgroundColor: '#212121' }}
            title=""
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonClick={() => {
              this.props.toggleDrawer(this.props.drawer);
            }}
          />
          <SelectableList>
            <ListItem
              value={0}
              onClick={() => this.props.history.push('/test/layout_test')}
            >
              Menu Item 1
            </ListItem>
            <ListItem
              value={1}
              onClick={() => this.props.history.push('/test/layout_test2')}
            >
              Menu Item 2
            </ListItem>
          </SelectableList>
        </Drawer>
      </div>
    );
  }
}

function mapStateToProps({ auth, application, location, drawer }) {
  return { auth, application, location, drawer };
}

export default connect(mapStateToProps, actions)(withRouter(LayoutDrawer));
