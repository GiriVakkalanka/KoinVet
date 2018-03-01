//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import Divider from 'material-ui/Divider';
import { ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import * as actions from '../../actions';
import { grey400 } from 'material-ui/styles/colors';

class TimeListItem extends Component {
  render() {
    const iconButtonElement = (
      <IconButton touch={true} tooltip="more" tooltipPosition="bottom-left">
        <MoreVertIcon color={grey400} />
      </IconButton>
    );
    const rightIconMenu = (
      <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>Delete</MenuItem>
      </IconMenu>
    );
    const secondaryTextString = `${this.props.startTime} - ${this.props
      .endTime}`;
    return (
      <ListItem
        className="right-align"
        key={this.props.key}
        value={this.props.value}
        rightIconButton={rightIconMenu}
        primaryText={this.props.startDate}
        secondaryText={secondaryTextString}
      />
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(TimeListItem);
