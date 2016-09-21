import React from 'react';
import { withRouter, hashHistory } from 'react-router';


class GroupHeader extends React.Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
    this._clearActive = this._clearActive.bind(this);
    this._updateTab = this._updateTab.bind(this);

    this.state = {
      events: "inactive-tab",
      newEvent: "inactive-tab",
      members: "inactive-tab",
      calendar: "inactive-tab",
      createTeams: "inactive-tab",
      showNewEvent: ""
    };

  }

  componentWillMount() {
    if (this.props.group.organizer_id !== this.props.currentUser.id) {
      this.state.showNewEvent = "hideNewEvent";
    }
    this._updateTab();
}

componentDidUpdate(prevProps) {
  if (prevProps.location !== this.props.location) {
    this._clearActive();
    this._updateTab();
  }
}

  _updateTab() {
  let locStr = this.props.location.split("/").slice(this.props.location.split("/").length - 1)[0];
  if (locStr === "new-event") {
    this.setState({newEvent: "active-tab"});
  } else if ( locStr === "members") {
    this.setState({members: "active-tab"});
  } else if ( locStr === "calendar") {
    this.setState({calendar: "active-tab"});
  } else if ( locStr === "create-teams") {
    this.setState({createTeams: "active-tab"});
  } else {
    this.setState({events: "active-tab"});
  }
}
   _clearActive() {
     this.state.newEvent = "inactive-tab";
     this.state.members = "inactive-tab";
     this.state.calendar = "inactive-tab";
     this.state.events = "inactive-tab";
     this.state.createTeams = "inactive-tab";
   }

  _handleClick (location) {
    if (location === "newEvent") {
    this.props.router.push(`/groups/${this.props.group.id}/new-event`);
    } else if (location === "home") {
    this.props.router.push(`/groups/${this.props.group.id}`);
    } else if (location === "calendar") {
    this.props.router.push(`/groups/${this.props.group.id}/calendar`);
    } else if (location === "members") {
    this.props.router.push(`/groups/${this.props.group.id}/members`);
    } else if (location === "createTeams") {
    this.props.router.push(`/groups/${this.props.group.id}/create-teams`);
    }
  }


  render () {
    const {group} = this.props;
    let groupButton = "";
    if (this.props.groupMembers) {
      if (Object.keys(this.props.groupMembers).includes(this.props.currentUser.id.toString())) {
          groupButton = <button className="remove-membership-button"
            onClick={this.props.destroyMembership.bind(null, this.props.group.id,
               this.props.currentUser.id)}>Remove Membership</button>;
        } else {
          groupButton = <button className="create-membership-button"
            onClick={this.props.createMembership.bind(null,this.props.group.id,
               this.props.currentUser.id)}>Join Group</button>;
        }
      }

    return (
      <div className="group-header">
        <div className="group-header-title">{group.name}</div>
        <div className="group-header-items">
          <ul className="left-header">
            <li className="tab-container" ><button className={this.state.events} onClick={this._handleClick.bind(null, "home")}>Events</button></li>
            <li className="tab-container" ><button className={`${this.state.newEvent} ${this.state.showNewEvent}`} onClick={this._handleClick.bind(null, "newEvent")}>New Event</button></li>
            <li className="tab-container" ><button className={`${this.state.createTeams} ${this.state.showNewEvent}`} onClick={this._handleClick.bind(null, "createTeams")}>Create Teams</button></li>
            <li className="tab-container" ><button className={this.state.members}  onClick={this._handleClick.bind(null, "members")}>Members</button></li>
            <li className="tab-container" ><button className={this.state.calendar} onClick={this._handleClick.bind(null, "calendar")}>Calendar</button></li>
          </ul>
          <div className="right-header">
          <div>{groupButton}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(GroupHeader);
