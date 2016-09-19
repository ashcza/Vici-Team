import { connect } from 'react-redux';
import GroupNewEvent from './group_new_event';
import { createEvent } from '../../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
  groupId: ownProps.params.groupId,
  currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  createEvent: newEvent => dispatch(createEvent(newEvent))
  // createBench: bench => dispatch(createBench(bench))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupNewEvent);
