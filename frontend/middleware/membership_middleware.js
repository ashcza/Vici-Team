import { GroupConstants } from '../actions/group_actions';
  import { requestGroupMembers } from '../actions/group_actions';
import { createMembership, destroyMembership } from '../util/membership_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = groupId => dispatch(requestGroupMembers(groupId));
  switch(action.type){
    case GroupConstants.CREATE_MEMBERSHIP:
      createMembership(action.groupId, action.userId, successCallback.bind(null, action.groupId));
      return next(action);
    case GroupConstants.DESTROY_MEMBERSHIP:
      destroyMembership(action.groupId, action.userId, successCallback.bind(null, action.groupId));
      return next(action);
    default:
      return next(action);
  }
};
