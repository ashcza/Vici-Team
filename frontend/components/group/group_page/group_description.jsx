import React from 'react';

const GroupDescription = ({group}) => {
return (
  <div className="group-description">
    <p className="group-description-text">{group.description}</p>
  </div>
  );
};

export default GroupDescription;
