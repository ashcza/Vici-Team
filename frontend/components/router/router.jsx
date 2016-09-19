import React from 'react';
//Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//Components
import App from '../app';
import SessionFormContainer from '../session_form/session_form_container';
import GroupPageContainer from '../group/group_page_container';
import HomePageContainer from '../home/home_page_container';
import GroupEventContainer from '../group/group_children/group_event_container';
import GroupNewEventContainer from '../group/group_children/group_new_event_container';
import GroupEditEventContainer from '../group/group_children/group_edit_event_container';
import GroupCalendarContainer from '../group/group_children/group_calendar_container';
import GroupMemberContainer from '../group/group_children/group_member_container';
import NewGroupContainer from '../header/new_group_container';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }

  _ensureLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  }

  _redirectIfLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  render(){
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={HomePageContainer}/>
          <Route path="/login" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
          <Route path="/signup" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
          <Route path="/new-group" component={ NewGroupContainer } onEnter={this._ensureLoggedIn} />
          <Route path="/groups/:groupId" component={ GroupPageContainer } onEnter={this._ensureLoggedIn} >
            <IndexRoute component={ GroupEventContainer } onEnter={this._ensureLoggedIn} />
            <Route path="new-event" component={ GroupNewEventContainer } onEnter={this._ensureLoggedIn} />
            <Route path="edit/:eventId" component={ GroupEditEventContainer } onEnter={this._ensureLoggedIn} />
            <Route path="calendar" component={ GroupCalendarContainer } onEnter={this._ensureLoggedIn} />
            <Route path="members" component={ GroupMemberContainer } onEnter={this._ensureLoggedIn} />
          </Route>
        </Route>
      </Router>
    );
  }

  }

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;
