import React from 'react';

class GroupCalendar extends React.Component {
	constructor(props){
		super(props);
    this.formatEvents = this.formatEvents.bind(this);
	}

	componentDidMount() {
		this.props.requestEvents(this.props.groupId);
	}

  componentDidUpdate(){
  let date = new Date();
  			let d = date.getDate();
  			let m = date.getMonth();
  			let y = date.getFullYear();
  			let events = this.formatEvents(this.props.events);
  			// let eventClick = this.eventClick;
  			$('#calendar').fullCalendar({
  				events
          			});

  }

  formatEvents(events) {
			delete events.dateOrder;
  		let eventKeys = Object.keys(events);
  		return eventKeys.map(id => ({
  			title: events[id].title,
  			start: Date.parse(events[id].datetime),
  			allDay: true,
  			className: 'calendar-style'
        		}));
  	}

  render() {

    return (
  <div className="calendar-container">
    <div id="calendar" className="calendar"></div>
  </div>
);
}

}

export default GroupCalendar;
