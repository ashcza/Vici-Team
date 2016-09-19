export const fetchGroups = function(searchString, searchLocation, searchDistance, success) {
	let search = {group: {
										search_string: searchString,
										location: searchLocation,
										distance: searchDistance
									}};
	$.ajax({
		method: 'GET',
		url: '/api/groups',
		data: search,
		success
	});
};

export const fetchSingleGroup = function(id, success) {
	let singleGroup = {group: { single: true }};
	$.ajax({
		method: 'GET',
		url: `/api/groups/${id}`,
		data: singleGroup,
		success
	});
};

export const fetchGroupMembers = function(id, success) {
	$.ajax({
		method: 'GET',
		url: `/api/groups/${id}`,
		success
	});
};


export const createMembership = function(groupId, userId, success) {
	$.ajax({
		method: 'POST',
		url: `/api/memberships/`,
		success
	});
};

export const destroyMembership = function(groupId, userId, success) {
	$.ajax({
		method: 'DELETE',
		url: `/api/memberships/${userId}`,
		success
	});
};

export const createGroup = function(singleGroup, currentUser, success) {
	let newGroup = {group: {
										organizer_name: currentUser.name,
										organizer_id: currentUser.id,
										name: singleGroup.group.name,
										description: singleGroup.group.description,
										location: singleGroup.group.location,
										creation_date: singleGroup.group.creationDate,
										img: singleGroup.group.img
									}};
	$.ajax({
		method: 'POST',
		url: `/api/groups/`,
		data: newGroup,
		success
	});
};

export const destroyGroup = function(groupId, success) {
	$.ajax({
		method: 'DELETE',
		url: `/api/groups/${groupId}`,
		success
	});
};
