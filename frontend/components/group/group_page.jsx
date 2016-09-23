import React from 'react';
import { Link } from 'react-router';
import GroupHeader from './group_page/group_header';
import GroupSidebar from './group_page/group_sidebar';
import GroupDescription from './group_page/group_description';

class GroupPage extends React.Component{
  constructor(props){
    super(props);
}

componentWillMount() {
  this.props.requestSingleGroup(this.props.groupId);
}

render () {
  if (this.props.group) {
  return (
    <div className="single-group-page">
      <GroupHeader group={this.props.group} groupMembers={this.props.groupMembers}
        currentUser={this.props.currentUser} createMembership={this.props.createMembership}
        destroyMembership={this.props.destroyMembership} location={this.props.location}
        updateTexting={this.props.updateTexting}/>

      <div className="outer-group">
        <div className="left-group">
          <GroupSidebar group={this.props.group} groupMembers={this.props.groupMembers}
            requestGroupMembers={this.props.requestGroupMembers} currentUser={this.props.currentUser}
            destroyGroup={this.props.destroyGroup} />
        </div>
        <div className="right-group">
          <GroupDescription group={this.props.group} />
          {this.props.children}
        </div>

      </div>
    </div>
  );
} else {
  return (
    <div></div>
  );
}

}
}

export default GroupPage;
