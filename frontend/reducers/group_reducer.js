import { GroupConstants } from '../actions/group_actions';
import merge from 'lodash/merge';


const GroupReducer = function(state = {}, action){
  switch(action.type){
    case GroupConstants.RECEIVE_GROUPS:
      return action.groups;
    case GroupConstants.RECEIVE_GROUP_MEMBERS:
      let nextState = merge({}, state);
      nextState.groupMembers = action.groupMembers;
      return nextState;
    default:
      return state;
  }
};

export default GroupReducer;
