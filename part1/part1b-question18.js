// Set the intervalID to run our timeEachSecond function every 1000ms (aka 1 second).
var intervalID = setInterval(timeEachSecond, 1000);

function timeEachSecond() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}