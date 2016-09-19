import {
  requestEvents,
  receiveEvents,
  receiveSingleEvent,
  EventConstants
} from '../actions/event_actions';

import { fetchEvents,
  createEvent,
  updateEvent,
  destroyEvent
} from '../util/event_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallbackRequest = events => dispatch(receiveEvents(events));
  const successCallbackNewEvent = singleEvent => dispatch(receiveSingleEvent(singleEvent));
  switch(action.type){
    case EventConstants.REQUEST_EVENTS:
      fetchEvents(action.id, successCallbackRequest);
      return next(action);
    case EventConstants.CREATE_EVENT:
      createEvent(action.newEvent, successCallbackNewEvent);
      return next(action);
    case EventConstants.UPDATE_EVENT:
      updateEvent(action.groupEvent, action.eventId, successCallbackNewEvent);
      return next(action);
    case EventConstants.DESTROY_EVENT:
      destroyEvent(action.eventId, successCallbackRequest);
      return next(action);
    default:
      return next(action);
  }
};
