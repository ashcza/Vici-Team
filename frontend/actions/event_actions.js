export const EventConstants = {
  RECEIVE_EVENTS: "RECEIVE_EVENTS",
  REQUEST_EVENTS: "REQUEST_EVENTS",
  CREATE_EVENT: "CREATE_EVENT",
  DESTROY_EVENT: "DESTROY_EVENT",
  UPDATE_EVENT: "UPDATE_EVENT",
  RECEIVE_SINGLE_EVENT: "RECEIVE_SINGLE_EVENT"
};

export const requestEvents = (id) => ({
  type: EventConstants.REQUEST_EVENTS,
  id
});

export const receiveEvents = (events) => ({
  type: EventConstants.RECEIVE_EVENTS,
  events
});

export const receiveSingleEvent = (singleEvent) => ({
  type: EventConstants.RECEIVE_EVENTS,
  singleEvent
});

export const createEvent = (newEvent) => ({
  type: EventConstants.CREATE_EVENT,
  newEvent
});

export const destroyEvent = (eventId) => ({
  type: EventConstants.DESTROY_EVENT,
  eventId
});

export const updateEvent = (groupEvent, eventId) => ({
  type: EventConstants.UPDATE_EVENT,
  groupEvent, eventId
});
