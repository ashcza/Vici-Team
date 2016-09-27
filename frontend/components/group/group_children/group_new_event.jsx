import React from 'react';
import { withRouter } from 'react-router';

class GroupNewEvent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      description: "",
      duration: "",
      date: "",
      max: "",
      groupId: this.props.groupId,
      userId: this.props.currentUser.id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToGroup = this.navigateToGroup.bind(this);
  }
  navigateToGroup() {
    this.props.router.push(`/groups/${this.props.groupId}`);
  }
  update(property) {
    return e => this.setState({[property]: e.target.value});
  }
  handleSubmit(e){
    e.preventDefault();
    const event = Object.assign({}, this.state);
    this.props.createEvent({event});
    this.navigateToGroup();
  }
  render() {
    return (
        <div className="new-event-container">
          <div className="new-event-form">
            <h3 className="new-event-title">Create an Event</h3>

            <form className="event-form" onSubmit={this.handleSubmit}>
              <label className="event-field">Title</label>
              <input type="text" value={this.state.title}
                onChange={this.update("title")} className="event-field"/>

              <label className="event-field">Event Date and Time</label>
              <input type="datetime-local" value={this.state.date}
                onChange={this.update("date")} className="event-field-date"/>

              <label className="event-field">Duration (hrs)</label>
              <input min='0' max='24' step='.5' type="number" value={this.state.duration}
                onChange={this.update("duration")} className="event-field-num"/>

              <label className="event-field">Maxiumum Players</label>
              <input min='0' max='40' step='1' type="number" value={this.state.max}
                onChange={this.update("max")} className="event-field-num"/>

              <label className="event-field">Event Description</label>
              <textarea onChange={this.update("description")}
                className="event-field event-field-text" value={this.state.description} ></textarea>

              <div className="button-holder">
                <input type="submit" value="Create Event" className="new-event-button"/>
              </div>

            </form>
          </div>
        </div>
    );
  }
}

export default withRouter(GroupNewEvent);
