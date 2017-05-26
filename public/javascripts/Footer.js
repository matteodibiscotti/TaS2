// Footer content
document.getElementById("footerContent").innerHTML =
'<div>Made by Kit and Matthew for Stage 2 of the CITS5505 Project</div>' +
'<div>Site last modified on <span id="lastModified"></span></div>' +
'<div>The current time is <span id="currTime"></span></div>';

// Last modified date

var lastMod = document.lastModified;
document.getElementById("lastModified").innerHTML = lastMod;
//var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
var NowMoment = moment();
var ecurrTime = document.getElementById('currTime');
ecurrTime.innerHTML = NowMoment;
//document.getElementById('currTime').innerHTML = currentTime;

/*
// Clock
function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('currTime').innerHTML = h+":"+m+":"+s;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
*/
