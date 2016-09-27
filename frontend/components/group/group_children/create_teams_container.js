import { connect } from 'react-redux';
import CreateTeams from './create_teams';
import { requestSingleEvent } from '../../../actions/event_actions';
import { updateRsvp } from '../../../actions/rsvp_actions';
import { textTeamColors } from '../../../actions/text_actions';
const mapStateToProps = (state, ownProps) => {
  return ({
    event: state.events.singleEvent,
    groupId: ownProps.params.groupId,
    groups: state.groups,
    currentUser: state.session.currentUser

  });
};

const mapDispatchToProps = dispatch => ({
  requestSingleEvent: (groupId) => dispatch(requestSingleEvent(groupId)),
  updateRsvp: (userId, groupId, eventId, color) => dispatch(updateRsvp(userId, groupId, eventId, color)),
  textTeamColors: (eventId) => dispatch(textTeamColors(eventId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTeams);
