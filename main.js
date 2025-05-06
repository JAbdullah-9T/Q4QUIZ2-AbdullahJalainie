
// else if
function verifyScore() {
  var sub1 = parseFloat(document.getElementById("sub1").value);
  var sub2 = parseFloat(document.getElementById("sub2").value);
  var sub3 = parseFloat(document.getElementById("sub3").value);

  var averageScore = (sub1 + sub2 + sub3) / 3;
  var roundedScore = Math.round(averageScore);

  if (roundedScore >= 94 && roundedScore <= 100) {
    window.alert("Your score is: " + roundedScore + ". EXCELLENT!");
  } else if (roundedScore >= 87 && roundedScore <= 93) {
    window.alert("Your score is: " + roundedScore + ". ABOVE SATISFACTORY!");
  } else if (roundedScore >= 75 && roundedScore <= 86) {
    window.alert("Your score is: " + roundedScore + ". NEEDS IMPROVEMENT!");
  } else if (roundedScore < 75) {
    window.alert("Your score is: " + roundedScore + ". POOR!");
  } else {
    window.alert("Invalid score.");
  }
}
