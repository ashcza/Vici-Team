export const RsvpConstants = {
  CREATE_RSVP: "CREATE_RSVP",
  DESTROY_RSVP: "DESTROY_RSVP",
  UPDATE_RSVP: "UPDATE_RSVP"
};

export const createRsvp = (eventId, userId, groupId) => ({
  type: RsvpConstants.CREATE_RSVP,
  eventId, userId, groupId
});

export const destroyRsvp = (eventId, userId, groupId) => ({
  type: RsvpConstants.DESTROY_RSVP,
  eventId, userId, groupId
});
export const updateRsvp = (userId, groupId, eventId, color) => ({
  type: RsvpConstants.UPDATE_RSVP,
  userId, groupId, eventId, color
});
