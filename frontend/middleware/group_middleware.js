import {
  requestGroups,
  requestSingleGroup,
  receiveGroups,
  requestGroupMembers,
  receiveGroupMembers,
  createMembership,
  destroyMembership,
  GroupConstants
} from '../actions/group_actions';

import {
  fetchGroups,
  fetchSingleGroup,
  fetchGroupMembers,
  createGroup,
  destroyGroup
} from '../util/group_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallbackGroups = groups => dispatch(receiveGroups(groups));
  const successCallbackMembers = groupMembers => dispatch(receiveGroupMembers(groupMembers));

  switch(action.type){
    case GroupConstants.REQUEST_GROUPS:
      fetchGroups(action.searchString, action.location, action.distance, successCallbackGroups);
      return next(action);
    case GroupConstants.REQUEST_SINGLE_GROUP:
      fetchSingleGroup(action.id, successCallbackGroups);
      return next(action);
    case GroupConstants.REQUEST_GROUP_MEMBERS:
      fetchGroupMembers(action.id, successCallbackMembers);
      return next(action);
    case GroupConstants.CREATE_GROUP:
      createGroup(action.group, action.currentUser, successCallbackGroups);
      return next(action);
    case GroupConstants.DESTROY_GROUP:
      destroyGroup(action.groupId, successCallbackGroups);
      return next(action);
    default:
      return next(action);
  }
};
