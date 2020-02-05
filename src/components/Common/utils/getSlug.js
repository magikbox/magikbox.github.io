export const getSlug = team => {
  let returnSlug = "";
  if (team !== undefined) {
    const stringToArray = team.split("");

    for (let i = 0; i < stringToArray.length; i++) {
      if (stringToArray[i] === " " || stringToArray[i] === ",") {
        returnSlug = returnSlug + "-";
      } else if (stringToArray[i] === "&") {
        returnSlug = returnSlug + "-and-";
      } else {
        returnSlug = returnSlug + stringToArray[i];
      }
    }
    return returnSlug.replace(/ /g, "").toLowerCase();
  }
};
