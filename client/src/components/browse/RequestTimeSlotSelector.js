//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import RaisedButton from 'material-ui/RaisedButton';

class RequestTimeSlotSelector extends Component {
  handleTime(event, time) {
    const pickedTime = new Date(time);
    const timeString = pickedTime.toJSON();
  }

  handleRequest() {
    console.log('save called');
    // const timeWindow = {
    //   date: this.props.date.date,
    //   startTime: this.props.date.startTime,
    //   endTime: this.props.date.endTime
    // };
    // this.props.saveTimeWindow(timeWindow);
  }

  renderTitle() {
    return this.props.selectedWindow === null ? (
      <div>
        <h5>Select a window of availability.</h5>
      </div>
    ) : (
      <div>
        <h5>Select a time to request an hour long session</h5>
        <p>{this.props.selectedWindow.startDate}</p>
        <p>
          Available from {this.props.selectedWindow.startTime} to{' '}
          {this.props.selectedWindow.endTime}
        </p>
        <TimePicker
          hintText="Select start time here"
          onChange={(event, time) => this.handleTime(event, time)}
        />
        <RaisedButton
          label="Request appointment"
          backgroundColor="#ffff00"
          onClick={() => this.handleRequest()}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="row">{this.renderTitle()}</div>
      </div>
    );
  }
}

function mapStateToProps({ date, selectedWindow, auth, senseiPage }) {
  return { date, selectedWindow, auth, senseiPage };
}

export default connect(mapStateToProps, actions)(RequestTimeSlotSelector);

// renderPicker() {
//   const windowSlots = this.props.auth ? this.props.auth.windows : [];
//   const selectedDateString =
//     this.props.selectedWindow !== null
//       ? windowSlots[this.props.selectedWindow]
//       : null;
//   const selectedDate = new Date(selectedDateString);
//   if (this.props.selectedWindow !== null) {
//     const selectedDate = new Date(
//       windowSlots[this.props.selectedWindow].startDate
//     );
//     //console.log(windowSlots[this.props.selectedWindow].startDate);
//     const selectedStartTime = new Date(this.props.selectedWindow.startTime);
//     const selectedEndTime = new Date(this.props.selectedWindow.endTime);
//     return (
//       <div>
//         <DatePicker
//           hintText="Portrait Dialog"
//           mode="landscape"
//           onChange={(event, date) => this.handleDate(event, date)}
//           defaultDate={selectedDate}
//         />
//         <TimePicker
//           hintText="12hr Format"
//           onChange={(event, time) => this.handleTime(event, time, true)}
//           defaultTime={selectedStartTime}
//         />
//         <TimePicker
//           hintText="12hr Format"
//           onChange={(event, time) => this.handleTime(event, time, false)}
//           defaultTime={selectedEndTime}
//         />
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <DatePicker
//           hintText="Portrait Dialog"
//           mode="landscape"
//           onChange={(event, date) => this.handleDate(event, date)}
//         />
//         <TimePicker
//           hintText="12hr Format"
//           onChange={(event, time) => this.handleTime(event, time, true)}
//         />
//         <TimePicker
//           hintText="12hr Format"
//           onChange={(event, time) => this.handleTime(event, time, false)}
//         />
//       </div>
//     );
//   }
// }

// const windowSlots = this.props.auth ? this.props.auth.windows : [];
// const index =
//   this.props.selectedWindow !== null ? this.props.selectedWindow : null;
// const windowSlot =
//   windowSlots.length !== 0 && index !== null ? windowSlots[index] : null;
// const windowSlotDate = windowSlot !== null ? windowSlot.startDate : null;
// const windowSlotDateObject =
//   windowSlotDate !== null ? new Date(windowSlotDate) : null;
// console.log(windowSlots);
// console.log(index);
// console.log(windowSlot);
// console.log(windowSlotDate);
// console.log(windowSlotDateObject);
