import React from 'react';
import { hashHistory } from 'react-router';

class GroupIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const groupID = this.props.group.id;
    hashHistory.push("groups/" + groupID );
  }

  render() {
    const group = this.props.group;
    var divStyle = {
      backgroundImage: 'url(' + group.img + ')'
    };

    return (
      <div className="group-index-item"
           onClick={this.handleClick}>
        <div className="index-item-info">
          <div className="wrapper" style={divStyle}></div>
          <div className="index-item-details">
            <span className="index-item-name">{group.name}</span>
            <span className="index-item-location">{group.location}</span>
          </div>

        </div>
      </div>
    );
  }
}

export default GroupIndexItem;
