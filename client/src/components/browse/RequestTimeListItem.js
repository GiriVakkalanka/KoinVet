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

class RequestTimeListItem extends Component {
  render() {
    const secondaryTextString = `${this.props.startTime} - ${this.props
      .endTime}`;

    const LeftIcon = () => <i className="material-icons">date_range</i>;

    return (
      <ListItem
        key={this.props.key}
        value={this.props.value}
        leftIcon={<LeftIcon />}
        primaryText={this.props.startDate}
        secondaryText={secondaryTextString}
        onClick={() =>
          this.props.selectWindow(this.props.formattedSelectedWindow)}
      />
    );
  }
}

function mapStateToProps({ application }) {
  return { application };
}

export default connect(mapStateToProps, actions)(RequestTimeListItem);
