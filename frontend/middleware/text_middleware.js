import { TextConstants } from '../actions/text_actions';
  // import { textTeamColors } from '../actions/text_actions';
import { textTeamColors } from '../util/text_api_util';

export default ({getState, dispatch}) => next => action => {
  switch(action.type){
    case TextConstants.TEXT_TEAM_COLORS:
      textTeamColors(action.eventId);
      return next(action);
    default:
      return next(action);
  }
};
