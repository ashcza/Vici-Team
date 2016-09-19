import { applyMiddleware } from 'redux';
import SessionMiddleware from '../middleware/session_middleware';
import GroupMiddleware from '../middleware/group_middleware';
import EventMiddleware from '../middleware/event_middleware';
import RsvpMiddleware from '../middleware/rsvp_middleware';
import MembershipMiddleware from '../middleware/membership_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  GroupMiddleware,
  EventMiddleware,
  RsvpMiddleware,
  MembershipMiddleware
);

export default RootMiddleware;
