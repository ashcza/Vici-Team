import React from 'react';

class GroupMember extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestGroupMembers(this.props.groupId);
  }


render () {
  if (this.props.groupMembers) {
    const memberKeys = Object.keys(this.props.groupMembers);
    return (
      <div className="group-members-list">
        {
          memberKeys.map( key => (
            <div className="member" key={key}>
              <div>{this.props.groupMembers[key].name}</div>
              <div>{this.props.groupMembers[key].email}</div>
              <div>{this.props.groupMembers[key].phone}</div>
            </div>
          ))
        }

      </div>
    );
  } else {
return (
  <div className="group-members-list">
    "."
  </div>
  );
  }
}
}

export default GroupMember;
