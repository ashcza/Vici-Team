import { RsvpConstants } from '../actions/rsvp_actions';
import { requestEvents, requestSingleEvent } from '../actions/event_actions';
import { createRsvp, destroyRsvp, updateRsvp } from '../util/rsvp_api_util';

export default ({getState, dispatch}) => next => action => {

  const successCallback = eventId => dispatch(requestEvents(eventId));
  const successCallbackSingleEvent = groupId => dispatch(requestSingleEvent(groupId));
  switch(action.type){
    case RsvpConstants.CREATE_RSVP:
      createRsvp(action.eventId, action.userId, successCallback.bind(null, action.groupId));
      return next(action);
    case RsvpConstants.DESTROY_RSVP:
      destroyRsvp(action.eventId, action.userId, successCallback.bind(null, action.groupId));
      return next(action);
    case RsvpConstants.UPDATE_RSVP:
      updateRsvp(action.eventId, action.userId, action.color, successCallbackSingleEvent.bind(null, action.groupId));
      return next(action);
    default:
      return next(action);
  }
};
