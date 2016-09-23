import { connect } from 'react-redux';
import GroupPage from './group_page';
import {
  requestGroupMembers,
  destroyMembership,
  createMembership,
  destroyGroup,
  requestSingleGroup
  } from '../../actions/group_actions';
import { updateTexting } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  group: state.groups[ownProps.params.groupId],
  groupMembers: state.groups.groupMembers,
  currentUser: state.session.currentUser,
  groupId: ownProps.params.groupId,
  location: ownProps.location.pathname
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
  requestGroupMembers: (id) => dispatch(requestGroupMembers(id)),
  createMembership: (groupId, userId) => dispatch(createMembership(groupId, userId)),
  destroyMembership: (groupId, userId) => dispatch(destroyMembership(groupId, userId)),
  destroyGroup: (groupId) => dispatch(destroyGroup(groupId)),
  requestSingleGroup: (id) => dispatch(requestSingleGroup(id)),
  updateTexting: (userId) => dispatch(updateTexting(userId))
  // logout: () => dispatch(logout())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupPage);
