/*


Matching algorithm.
Parameters:
Skillsets must match.
Distance must be within the specified range.


Quality of the match as a percentage:
100 - ((50 * distance) / maxdistance).
>=80% - show in Blue
60-79% - show in Yellow
50 <= 59 - show in Red
*/

var userJob, tradie;
var matchQuality;

for(job in userJobs) {
  if(userJob.trade = tradie.trade && userJob.distance <= tradie.maximumDistance) {
    console.log("Found a match");
  }
  else {
    return false;
  }
  matchQuality = 100 - ((50 * userJob.distance)/tradie.maximumDistance);
  if matchQuality >= 80 {
    console.log("Excellent match!");
    var excellentJob = job.fontcolor('blue');

  }
  else if {matchQuality >= 60 && matchQuality < 80) {
    console.log("Good match!");
    var goodJob = job.fontcolor('yellow');
  }

  else if (matchQuality < 60) {
    console.log("Fair match!");
    var averageJob = job.fontcolor('red');

  }
  else {
    continue;
  }
  }
}
