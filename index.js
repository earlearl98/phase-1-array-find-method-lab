// code your solution here
function superbowlWin(array, objects) {
  const winObj = array.find(objects => objects.result === "W");
  return winObj ? winObj.year : undefined;
}


