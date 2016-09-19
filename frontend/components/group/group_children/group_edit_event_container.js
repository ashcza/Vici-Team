import { connect } from 'react-redux';
import GroupEditEvent from './group_edit_event';
import { updateEvent } from '../../../actions/event_actions';

const mapStateToProps = (state, ownProps) => ({
  events: state.events,
  groupId: parseInt(ownProps.params.groupId),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
  updateEvent: (eventDetails, eventId) => dispatch(updateEvent(eventDetails, eventId)),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupEditEvent);
