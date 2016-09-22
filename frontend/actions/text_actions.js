export const TextConstants = {
  TEXT_TEAM_COLORS: "TEXT_TEAM_COLORS"
};

export const textTeamColors = (eventId) => ({
  type: TextConstants.TEXT_TEAM_COLORS,
  eventId
});
