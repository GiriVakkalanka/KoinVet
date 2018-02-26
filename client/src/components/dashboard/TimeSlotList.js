import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import TimeListItem from './TimeListItem';
import Divider from 'material-ui/Divider';

class TimeSlotList extends Component {
  testFunc() {
    console.log('test func called');
  }
  renderListItems() {
    const windowSlots = this.props.auth ? this.props.auth.windows : [];
    console.log(windowSlots);
    return _.map(windowSlots, window => {
      const windowDate = new Date(window.startDate);
      const windowStart = new Date(window.startTime);
      const windowEnd = new Date(window.endTime);

      const selectedWindow = {
        startDate: window.startDate,
        startTime: window.startTime,
        endTime: window.endTime
      };

      const formattedDate = windowDate.toDateString();
      const formattedStartTime = windowStart
        .toTimeString()
        .split('')
        .slice(0, 5)
        .join('');
      const formattedEndTime = windowEnd
        .toTimeString()
        .split('')
        .slice(0, 5)
        .join('');
      //const formattedStartTime = `${windowObj.startTimeHour}:${windowObj.startTimeMinutes}`;
      //const formattedEndTime = `${windowObj.endTimeHour}:${windowObj.endTimeMinutes}`;
      //console.log(formattedStartTime);
      //console.log(formattedEndTime);
      return (
        <div>
          <TimeListItem
            key={windowSlots.indexOf(window)}
            value={windowSlots.indexOf(window)}
            startDate={formattedDate}
            startTime={formattedStartTime}
            endTime={formattedEndTime}
            selectedWindow={selectedWindow}
          />
          <Divider inset={true} />
        </div>
      );
    });
  }

  render() {
    return (
      <div style={{ maxHeight: '175', overflow: 'auto' }}>
        <List>{this.renderListItems()}</List>
      </div>
    );
  }
}

function mapStateToProps({ auth, selectedWindow }) {
  return { auth, selectedWindow };
}

export default connect(mapStateToProps, actions)(TimeSlotList);

//     return (
//       <div style={{ maxHeight: '200', overflow: 'auto' }}>
//         <SelectableList
//           highlightIndex={this.props.selectedWindow}
//           selectWindow={index => this.props.selectWindow(index)}
//         >
//           {this.renderListItems()}
//         </SelectableList>
//       </div>
//     );
//   }
// }
// let SelectableList = makeSelectable(List);
// function wrapState(ComposedComponent) {
//   return class SelectableList extends React.Component {
//     /*
//     static propTypes = {
//       children: React.PropTypes.node.isRequired,
//       defaultValue: React.PropTypes.number.isRequired
//     };
//   */
//
//     componentWillMount() {
//       this.setState({
//         selectedIndex: this.props.defaultValue
//       });
//     }
//
//     /*
//     componentDidUpdate() {
//       this.props.selectWindow(this.state.selectedIndex);
//     }
//     */
//
//     handleRequestChange = (event, index) => {
//       this.props.selectWindow(index);
//       this.setState({
//         selectedIndex: index
//       });
//
//       //console.log(index);
//     };
//
//     render() {
//       return (
//         <ComposedComponent
//           value={this.props.highlightIndex}
//           onChange={this.handleRequestChange}
//         >
//           {this.props.children}
//         </ComposedComponent>
//       );
//     }
//   };
// }
//
// SelectableList = wrapState(SelectableList);
