import { connect } from 'react-redux';
import HomePage from './home_page';
import { requestGroups } from '../../actions/group_actions';

const mapStateToProps = state => ({
  groups: state.groups
});

const mapDispatchToProps = dispatch => ({
  requestGroups: (searchString, location, distance) => dispatch(requestGroups(searchString, location, distance))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
