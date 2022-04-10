// Code your solution here
function findMatching(drivers, name) {
  return drivers.filter((driver) => {
    return driver.toLowerCase() === name.toLowerCase();
  });
}
function fuzzyMatch(drivers, target) {
  return drivers.filter((driver) => {
    return driver.startsWith(target);
  });
}
function matchName(drivers, name) {
  return drivers.filter((driver) => {
    return driver.name === name;
  });
}
