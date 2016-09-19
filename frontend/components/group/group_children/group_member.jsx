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
            <div className="member" key={key}>{this.props.groupMembers[key].name} </div>
          ))
        }

      </div>
    );
  } else {
return (
  <div className="group-members-list">
    "not working"
  </div>
  );
  }
}
}

export default GroupMember;
