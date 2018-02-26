//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';

class TimeSlotSelector extends Component {
  handleDate(event, date) {
    const today = Date.now();
    //console.log(typeof today);
    const pickedDate = new Date(date);
    const dateString = pickedDate.toJSON();
    // console.log(date.toJSON());
    //
    // console.log(date);
    // console.log(pickedDate.getDate());
    // console.log(todaysDate.getTime());
    this.props.changeDate(dateString);
  }

  handleTime(event, time, start) {
    const pickedTime = new Date(time);
    const timeString = pickedTime.toJSON();
    if (start) {
      this.props.changeStarttime(timeString);
    } else {
      this.props.changeEndtime(timeString);
    }
  }

  handleSave() {
    //console.log('save called')
    const timeWindow = {
      date: this.props.date.date,
      startTime: this.props.date.startTime,
      endTime: this.props.date.endTime
    };
    this.props.saveTimeWindow(timeWindow);
  }

  render() {
    return (
      <div>
        <DatePicker
          hintText="Portrait Dialog"
          mode="landscape"
          onChange={(event, date) => this.handleDate(event, date)}
        />
        <TimePicker
          hintText="12hr Format"
          onChange={(event, time) => this.handleTime(event, time, true)}
        />
        <TimePicker
          hintText="12hr Format"
          onChange={(event, time) => this.handleTime(event, time, false)}
        />
        <button className="btn" onClick={() => this.handleSave()}>
          Save
        </button>
      </div>
    );
  }
}

function mapStateToProps({ date, selectedWindow, auth }) {
  return { date, selectedWindow, auth };
}

export default connect(mapStateToProps, actions)(TimeSlotSelector);

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
