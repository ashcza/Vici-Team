export const updateTexting = function(userId) {
  let texting = {user: {user_id: userId, texting: "update"}};
	$.ajax({
		method: 'PATCH',
		url: `/api/user`,
    data: texting
	});
};
