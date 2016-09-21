import React from 'react';
import { withRouter } from 'react-router';

class GroupSidebar extends React.Component {
  constructor(props) {
    super(props);
    this._removeGroup = this._removeGroup.bind(this);
  }

  componentDidMount() {
    this.props.requestGroupMembers(this.props.group.id);
  }

  _removeGroup(groupId) {
    this.props.destroyGroup(groupId);
    this.props.router.push('/');
  }

render () {
  const {groupMembers, group, currentUser, destroyGroup} = this.props;
  var divStyle = {
    backgroundImage: 'url(' + group.img + ')'
  };
  let destroyButton = <div></div>;
  if (group && (group.organizer_id === currentUser.id)) {
    destroyButton = <button className="remove-group-button"
      onClick={this._removeGroup.bind(null, this.props.group.id)}>Delete Group</button>;
  }
  return (
    <div className="group-sidebar">
      <div className="group-sidebar-image">
        <div className="wrapper-sidebar" style={divStyle}></div>
      </div>
      <div className="group-sidebar-2">
        <p>Members: {groupMembers && Object.keys(groupMembers).length}</p>
        <p>Organizer: {group.organizer_name}</p>
        <p>Cell #: {group.organizer_phone}</p>
      </div>
    </div>
  );}
}

export default withRouter(GroupSidebar);
