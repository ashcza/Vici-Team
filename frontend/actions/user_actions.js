export const UserConstants = {
  UPDATE_TEXTING: "UPDATE_TEXTING"
};

export const updateTexting = (userId) => ({
  type: UserConstants.UPDATE_TEXTING,
  userId
});
