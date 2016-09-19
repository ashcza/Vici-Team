export const createRsvp = function(eventId, userId, success) {
  let rsvp = {rsvp: {event_id: eventId, user_id: userId}};
	$.ajax({
		method: 'POST',
		url: `/api/rsvps`,
    data: rsvp,
		success
	});
};

export const destroyRsvp = function(eventId, userId, success) {
  let rsvp = {rsvp: {event_id: eventId, user_id: userId}};
	$.ajax({
		method: 'DELETE',
		url: `/api/rsvps/${userId}`,
    data: rsvp,
		success
	});
};
