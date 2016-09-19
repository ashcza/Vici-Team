import { EventConstants } from '../actions/event_actions';
import merge from 'lodash/merge';


const EventReducer = function(state = {}, action){
  switch(action.type){
    case EventConstants.RECEIVE_EVENTS:
      return action.events;
    case EventConstants.RECEIVE_SINGLE_EVENT:
      const singleEvent = {[action.singleEvent.id]: action.singleEvent};
      return merge({}, state, singleEvent);
    default:
      return state;
  }
};

export default EventReducer;
