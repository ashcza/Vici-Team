import { connect } from 'react-redux';
import GroupEvent from './group_event';
import { requestEvents, updateEvent, destroyEvent } from '../../../actions/event_actions';
import { createRsvp, destroyRsvp } from '../../../actions/rsvp_actions';

const mapStateToProps = (state, ownProps) => ({
  events: state.events,
  groupId: parseInt(ownProps.params.groupId),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
  requestEvents: (id) => dispatch(requestEvents(id)),
  createRsvp: (eventId, userId, groupId) => dispatch(createRsvp(eventId, userId,
     groupId)),
  destroyRsvp: (eventId, userId, groupId) => dispatch(destroyRsvp(eventId, userId,
     groupId)),
  updateEvent: (groupEvent) => dispatch(updateEvent(groupEvent)),
  destroyEvent: (eventId) => dispatch(destroyEvent(eventId))
  // logout: () => dispatch(logout())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupEvent);
