import React from 'react';
import GroupIndex from './group_index';
import Search from './search';


const HomePage = ({groups, requestGroups}) => {
  var divStyle = {
    backgroundImage: 'url(' + 'http://res.cloudinary.com/ashcon/image/upload/v1472701231/brazil-homepage_h4ivzz.jpg' + ')'
  };
return (
  <div className="homepage">
    <p className="background-text">PLAY THERE</p>
    <p className="background-subtext">Sportee makes it incredibly simple to play sports with people nearby.</p>
    <div className="wrapper-background" style={divStyle}></div>
    <Search requestGroups={requestGroups} />
    <GroupIndex groups={groups} requestGroups={requestGroups} />
  </div>
);
};

export default HomePage;
