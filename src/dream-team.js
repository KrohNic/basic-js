module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)) return false;

  return members
    .reduce((team, item) => {
      if (typeof item === "string")
        team.push(
          item
            .trim()
            .toUpperCase()
            .charAt(0)
        );

      return team;
    }, [])
    .sort()
    .join("");
};
