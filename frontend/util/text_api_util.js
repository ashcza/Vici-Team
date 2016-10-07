export const textTeamColors = function(eventId) {
  let notification = {notification: {event_id: eventId}};
	$.ajax({
		method: 'POST',
		url: `/api/notifications`,
    data: notification
	});
};
