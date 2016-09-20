import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, logout, signup } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
  let auto;
  if (!ownProps.query) {
    auto = false;
  } else {
    auto = ownProps.query.demo;
  }
  return {
  demo: auto,
  loggedIn: Boolean(state.session.currentUser),
  currentUser: state.session.currentUser,
  errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
