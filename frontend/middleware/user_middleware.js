import { UserConstants } from '../actions/user_actions';
import { receiveCurrentUser } from '../actions/session_actions';
import { updateTexting } from '../util/user_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  switch(action.type){
    case UserConstants.UPDATE_TEXTING:
      updateTexting(action.userId, successCallback);
      return next(action);
    default:
      return next(action);
  }
};
