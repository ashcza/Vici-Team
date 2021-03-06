export const fetchEvents = function(id, success) {
	$.ajax({
		method: 'GET',
		url: `/api/events/${id}`,
		success
	});
};

export const fetchSingleEvent = function(groupId, success) {
	$.ajax({
		method: 'GET',
		url: `/api/events`,
		data: {event: {group_id: groupId}},
		success
	});
};

export const createEvent = function(groupEvent, success) {
	let eventData = {event: {
										title: groupEvent.event.title,
										description: groupEvent.event.description,
										duration: groupEvent.event.duration,
										date: groupEvent.event.date,
										group_id: groupEvent.event.groupId,
										user_id: groupEvent.event.userId,
										max: groupEvent.event.max}
									};
	$.ajax({
		method: 'POST',
		url: `/api/events/`,
		data: eventData,
		success
	});
};

export const updateEvent = function(groupEvent, eventId, success) {
	let eventData = {event: {
										title: groupEvent.event.title,
										description: groupEvent.event.description,
										duration: groupEvent.event.duration,
										date: groupEvent.event.date,
										group_id: groupEvent.event.groupId,
										user_id: groupEvent.event.userId,
										max: groupEvent.event.max}
									};
	$.ajax({
		method: 'PATCH',
		url: `/api/events/${eventId}`,
		data: eventData,
		success
	});
};

export const destroyEvent = function(id, success) {
	$.ajax({
		method: 'DELETE',
		url: `/api/events/${id}`,
		success
	});
};
