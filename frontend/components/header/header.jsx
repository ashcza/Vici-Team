import React from 'react';
import { Link, withRouter } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <div className="login-link">
      <Link to="/login" activeClassName="current">Login</Link>
    </div>
    <div className="signup-link">
      <Link to="/signup" activeClassName="current">Sign up!</Link>
    </div>
  </nav>
);

const _navigateToHome = (router) => {
  router.push(`/`);
};

const _navigateToNewGroup = (router) => {
  router.push(`/new-group`);
};

const navStatus = (currentUser, logout, router) => (

	<hgroup className="header-group">
		<button className="header-button" onClick={logout}>Log Out</button>
    <div className="header-name">{currentUser.username}
    </div>
	</hgroup>
);

function Header({currentUser, logout, router}){
  if (currentUser){
    return (
    <div>
      <div className="nav-bar">
        <button type="submit" className="home-logo">
          <img className="logoIcon" alt="Home" src="http://res.cloudinary.com/ashcon/image/upload/v1475003658/vici/vici_team_final_2.png"
             />
        </button>​

        <div>{navStatus(currentUser, logout, router)}</div>
      </div>
    </div>
      );
  } else {
    return (
    <div>
      <div className="nav-bar">
        <button type="submit" className="home-logo">
          <img className="logoIcon" alt="Home" src="http://res.cloudinary.com/ashcon/image/upload/v1475003658/vici/vici_team_final_2.png"
             />
        </button>​
      <div>{sessionLinks()}</div>
      </div>
    </div>
    );
  }
}

export default withRouter(Header);
