import { connect } from 'react-redux';
import NewGroup from './new_group';
import { createGroup } from '../../actions/group_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
  currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  createGroup: (group, currentUser) => dispatch(createGroup(group, currentUser))
  // createBench: bench => dispatch(createBench(bench))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewGroup);
