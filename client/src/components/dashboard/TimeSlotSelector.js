//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';

class TimeSlotSelector extends Component {
  handleDate(event, date) {
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

function mapStateToProps({ date }) {
  return { date };
}

export default connect(mapStateToProps, actions)(TimeSlotSelector);
