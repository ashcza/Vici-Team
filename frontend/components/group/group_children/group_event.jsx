import React from 'react';
import { withRouter, hashHistory } from 'react-router';

class GroupEvent extends React.Component {
  constructor(props) {
    super(props);
    this.constructEventsList = this.constructEventsList.bind(this);
    this._navigateToEditGroup = this._navigateToEditGroup.bind(this);
    this.removeEvent = this.removeEvent.bind(this);
  }

  componentDidMount() {
    if (this.props.groupId) {
    this.props.requestEvents(this.props.groupId);
    }
  }

  _navigateToEditGroup(eventKey) {
    this.props.router.push(`/groups/${this.props.groupId}/edit/${eventKey}`);
  }

  removeEvent(eventKey){
    this.props.destroyEvent(eventKey);
  }

  constructEventsList () {
    const {events} = this.props;
    let eventKeys;
    if (!this.props.events.dateOrder) {
      eventKeys = [];
    } else {
      eventKeys = this.props.events.dateOrder;
    }

    let eventsList = eventKeys.map(eventKey =>  {
      let rsvpButton;
      if (events[eventKey].rsvp.includes(this.props.currentUser.id)) {
        rsvpButton = <button className="remove-rsvp-button"
          onClick={this.props.destroyRsvp.bind(null,events[eventKey].id,
             this.props.currentUser.id, this.props.groupId)}>Remove RSVP</button>;
      } else {
        rsvpButton = <button className="create-rsvp-button"
          onClick={this.props.createRsvp.bind(null,events[eventKey].id,
             this.props.currentUser.id, this.props.groupId)}>RSVP</button>;
      }

    let editButtons = <div></div>;
      if (events[eventKey].user_id === this.props.currentUser.id) {
        editButtons =
        <div>
        <button type="submit" className="edit-button">
          <img src="http://res.cloudinary.com/ashcon/image/upload/v1473204576/edit-icon_vzpcol.png" alt="edit" className="icon-img"
            onClick={this._navigateToEditGroup.bind(null, eventKey)}/>
        </button>​
        <button type="submit" className="delete-button">
          <img src="http://res.cloudinary.com/ashcon/image/upload/v1473204576/delete-icon_pet5bp.png" alt="delete" className="icon-img"
            onClick={this.removeEvent.bind(null, eventKey)}  />
        </button>​
      </div>;
      }

      return (
      <div key={`event-${eventKey}`}>
        <li className="event-item">
          <div className="event-info-left">
            <div className="event-info-first">
              <div className="event-list-title">{events[eventKey].title}</div>
              <div className="event-info-second">
                {editButtons}
              </div>
            </div>

            <div className="event-list-description">{events[eventKey].description}</div>
          </div>
          <div className="event-info-right">
            <div className="event-list-date">{events[eventKey].date}</div>
            <div className="event-list-date">{events[eventKey].time}</div>
            <div className="time-flex">
              <div className="event-list-time"><b>{events[eventKey].duration}</b></div>
              <div>&nbsp;hrs</div>
            </div>
            <div className="event-list-attendees"><b>{events[eventKey].rsvp.length}</b> going</div>
            <div className="event-list-attendees"><b>({events[eventKey].max}</b> max)</div>
            <div>{rsvpButton}</div>
            <div className="rsvp-button">
            </div>
          </div>
        </li>
      </div>
   );},this);
   return eventsList;
  }

render () {

  return (
    <div className="group-events">
      <ul className="group-event-list">
        {this.constructEventsList()}
      </ul>
    </div>
  );
}
}

export default withRouter(GroupEvent);
