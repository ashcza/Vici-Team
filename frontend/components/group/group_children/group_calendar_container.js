import { connect } from 'react-redux';
import GroupCalendar from './group_calendar';
import { requestEvents } from '../../../actions/event_actions';

const mapStateToProps = (state, ownProps) => ({
  events: state.events,
  groupId: parseInt(ownProps.params.groupId),
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    requestEvents: (id) => dispatch(requestEvents(id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupCalendar);
