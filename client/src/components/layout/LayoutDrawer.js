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
            <ListItem value={0} onClick={() => this.props.history.push('/')}>
              Browse
            </ListItem>

            <ListItem
              value={1}
              onClick={() => this.props.history.push('/test/layout_test2')}
              primaryTogglesNestedList={true}
              initiallyOpen={true}
              nestedItems={[
                <ListItem
                  value={2}
                  onClick={() =>
                    this.props.history.push('/dashboard/select-expertise')}
                >
                  Select services
                </ListItem>,
                <ListItem
                  value={3}
                  onClick={() =>
                    this.props.history.push('/dashboard/select-specialization')}
                >
                  Select specialization
                </ListItem>,
                <ListItem
                  value={4}
                  onClick={() =>
                    this.props.history.push('/dashboard/select-links')}
                >
                  Add links
                </ListItem>,
                <ListItem
                  value={5}
                  onClick={() => this.props.history.push('/dashboard/add-info')}
                >
                  Add info
                </ListItem>,
                <ListItem
                  value={6}
                  onClick={() => this.props.history.push('/dashboard/set-rate')}
                >
                  Set rate
                </ListItem>,
                <ListItem
                  value={7}
                  onClick={() =>
                    this.props.history.push('/dashboard/set-schedule')}
                >
                  Set schedule
                </ListItem>
              ]}
            >
              Sensei Dashboard
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
