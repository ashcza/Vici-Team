export const createMembership = function(groupId, userId, success) {
  let membership = {membership: {group_id: groupId, user_id: userId}};
	$.ajax({
		method: 'POST',
		url: `/api/memberships`,
    data: membership,
		success
	});
};

export const destroyMembership = function(groupId, userId, success) {
  let membership = {membership: {group_id: groupId, user_id: userId}};
	$.ajax({
		method: 'DELETE',
		url: `/api/memberships/${groupId}`,
    data: membership,
		success
	});
};
