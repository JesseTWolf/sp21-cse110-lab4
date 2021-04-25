var intervalID = setInterval(timeEachSecond, 1000);

function timeEachSecond() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}