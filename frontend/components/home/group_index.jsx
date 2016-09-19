import React from 'react';
import GroupIndexItem from './group_index_item';

class GroupIndex extends React.Component {
  componentDidMount() {
    this.props.requestGroups();
  }

render () {
  const {groups} = this.props;
  const groupKeys = Object.keys(groups);
  return (
    <div className="index-container">
      {
        groupKeys.map( key => (
          <GroupIndexItem group={groups[key]} key={key} />
        ))
      }
    </div>
  );
  }
}


export default GroupIndex;
