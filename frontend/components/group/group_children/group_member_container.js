import { connect } from 'react-redux';
import GroupMember from './group_member';
import { requestGroupMembers } from '../../../actions/group_actions';
const mapStateToProps = (state, ownProps) => {
  return ({
    groupMembers: state.groups.groupMembers,
    groupId: ownProps.params.groupId

  });
};

const mapDispatchToProps = dispatch => ({
  requestGroupMembers: (id) => dispatch(requestGroupMembers(id))
  // createBench: bench => dispatch(createBench(bench))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupMember);
