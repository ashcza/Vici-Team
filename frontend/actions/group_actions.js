export const GroupConstants = {
  RECEIVE_GROUPS: "RECEIVE_GROUPS",
  REQUEST_GROUPS: "REQUEST_GROUPS",
  REQUEST_SINGLE_GROUP: "REQUEST_SINGLE_GROUP",
  REQUEST_GROUP_MEMBERS: "REQUEST_GROUP_MEMBERS",
  RECEIVE_GROUP_MEMBERS: "RECEIVE_GROUP_MEMBERS",
  CREATE_MEMBERSHIP: "CREATE_MEMBERSHIP",
  DESTROY_MEMBERSHIP: "DESTROY_MEMBERSHIP",
  CREATE_GROUP: "CREATE_GROUP",
  DESTROY_GROUP: "DESTROY_GROUP"
};

export const requestGroups = (searchString, location, distance) => ({
  type: GroupConstants.REQUEST_GROUPS,
  searchString, location, distance
});

export const requestSingleGroup = (id) => ({
  type: GroupConstants.REQUEST_SINGLE_GROUP,
  id
});

export const receiveGroups = (groups) => ({
  type: GroupConstants.RECEIVE_GROUPS,
  groups
});

export const requestGroupMembers = id => ({
  type: GroupConstants.REQUEST_GROUP_MEMBERS,
  id
});

export const receiveGroupMembers = (groupMembers) => ({
  type: GroupConstants.RECEIVE_GROUP_MEMBERS,
  groupMembers
});

export const createMembership = (groupId, userId) => ({
  type: GroupConstants.CREATE_MEMBERSHIP,
  groupId, userId
});

export const destroyMembership = (groupId, userId) => ({
  type: GroupConstants.DESTROY_MEMBERSHIP,
  groupId, userId
});

export const createGroup = (group, currentUser) => ({
  type: GroupConstants.CREATE_GROUP,
  group, currentUser
});

export const destroyGroup = (groupId) => ({
  type: GroupConstants.DESTROY_GROUP,
  groupId
});
