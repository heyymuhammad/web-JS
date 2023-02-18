// schedule 
six = "Fajar"
two = "Zuhar"
seventeen = "Asar"
nineteen = "Maghrib"
twenty = "Isha"



seconds = 0
minutes = 0
hours = 0


function start() {
    my_interval = setInterval(startTimer, 1000)
}

function stop() {
    clearInterval(my_interval)
}

function reset() {
    clearInterval(my_interval)
    hours = 0;
    minutes = 0
    seconds = 0
    document.getElementById('seconds').innerHTML = "0" + 0;
    document.getElementById('minutes').innerHTML = "0" + 0;
    document.getElementById('hours').innerHTML = "0" + 0;
}



function startTimer() {
    seconds++;

    if (seconds <= 9) {
        document.getElementById('seconds').innerHTML = "0" + seconds;
    }

    if (seconds > 9) {
        document.getElementById('seconds').innerHTML = seconds;

    }

    if (seconds > 59) {
        console.log("minutes");
        minutes++;
        document.getElementById('minutes').innerHTML = "0" + minutes;
        seconds = 0;
        document.getElementById('seconds').innerHTML = "0" + 0;
    }

    if (minutes > 9) {
        document.getElementById('minutes').innerHTML = minutes;
    }

    if (minutes > 59) {
        console.log("hours");
        hours++;
        document.getElementById('hours').innerHTML = "0" + hours;
        minutes = 0;
        document.getElementById('minutes').innerHTML = "0" + 0;
    }

    if (hours > 5) {
        document.getElementById('pop').style.visibility = 'visible'
    }

    if (hours > 9) {
        document.getElementById('pop').style.visibility = 'hidden'
        document.getElementById('hours').innerHTML = hours;
    }


//hours 
    if (hours == 0) {
        document.getElementById('parent').style.background = '#012459';
        document.getElementById("times").style.color = 'white'
        document.getElementById("hours").style.color = 'white'
        document.getElementById("minutes").style.color = 'white'
        document.getElementById("seconds").style.color = 'white'
    }
    else if (hours == 1) {
        document.getElementById('parent').style.background = '#003972';
        document.getElementById("times").style.color = 'white'
        document.getElementById("hours").style.color = 'white'
        document.getElementById("minutes").style.color = 'white'
        document.getElementById("seconds").style.color = 'white'
    }
    else if (hours == 2) {
        document.getElementById('parent').style.background = '#003972';
        document.getElementById("times").style.color = 'white'
        document.getElementById("hours").style.color = 'white'
        document.getElementById("minutes").style.color = 'white'
        document.getElementById("seconds").style.color = 'white'
    }
    else if (hours == 3) {
        document.getElementById('parent').style.background = '#004372';
        document.getElementById("times").style.color = 'white'
        document.getElementById("hours").style.color = 'white'
        document.getElementById("minutes").style.color = 'white'
        document.getElementById("seconds").style.color = 'white'
    }
    else if (hours == 4) {
        document.getElementById('parent').style.background = '#004372';
        document.getElementById("times").style.color = 'white'
        document.getElementById("hours").style.color = 'white'
        document.getElementById("minutes").style.color = 'white'
        document.getElementById("seconds").style.color = 'white'
    }
    else if (hours == 5) {
        document.getElementById('parent').style.background = '#016792';
        document.getElementById("times").style.color = 'white'
        document.getElementById("hours").style.color = 'white'
        document.getElementById("minutes").style.color = 'white'
        document.getElementById("seconds").style.color = 'white'
    }
    else if (hours == 6) {
        document.getElementById('parent').style.background = '#07729f';
        document.getElementById("times").style.color = 'white'
        document.getElementById("hours").style.color = 'white'
        document.getElementById("minutes").style.color = 'white'
        document.getElementById("seconds").style.color = 'white'
    }
    else if (hours == 7) { 
        document.getElementById('parent').style.background = '#12a1c0'; 
        document.getElementById("times").style.color = 'black'
        document.getElementById("hours").style.color = 'black'
        document.getElementById("minutes").style.color = 'black'
        document.getElementById("seconds").style.color = 'black'
    }
    else if (hours == 8) { document.getElementById('parent').style.background = '#74d4cc'; }
    else if (hours == 9) { document.getElementById('parent').style.background = '#efeebc'; }
    else if (hours == 10) { document.getElementById('parent').style.background = '#fee154'; }
    else if (hours == 11) { document.getElementById('parent').style.background = '#fdc352'; }
    else if (hours == 12) { document.getElementById('parent').style.background = '#ffac6f'; }
    else if (hours == 13) { document.getElementById('parent').style.background = '#fda65a'; }
    else if (hours == 14) { document.getElementById('parent').style.background = '#fd9e58'; }
    else if (hours == 15) { document.getElementById('parent').style.background = '#f18448'; }
    else if (hours == 16) { document.getElementById('parent').style.background = '#f06b7e'; }
    else if (hours == 17) { document.getElementById('parent').style.background = '#ca5a92'; }
    else if (hours == 18) {
        document.getElementById('parent').style.background = '#5b2c83';
        document.getElementById("times").style.color = 'white'
        document.getElementById("hours").style.color = 'white'
        document.getElementById("minutes").style.color = 'white'
        document.getElementById("seconds").style.color = 'white'
    }
    else if (hours == 19) {
        document.getElementById('parent').style.background = '#371a79';
        document.getElementById("times").style.color = 'white'
        document.getElementById("hours").style.color = 'white'
        document.getElementById("minutes").style.color = 'white'
        document.getElementById("seconds").style.color = 'white'
    }
    else if (hours == 20) {
        document.getElementById('parent').style.background = '#28166b';
        document.getElementById("times").style.color = 'white'
        document.getElementById("hours").style.color = 'white'
        document.getElementById("minutes").style.color = 'white'
        document.getElementById("seconds").style.color = 'white'
    }
    else if (hours == 21) {
        document.getElementById('parent').style.background = '#192861';
        document.getElementById("times").style.color = 'white'
        document.getElementById("hours").style.color = 'white'
        document.getElementById("minutes").style.color = 'white'
        document.getElementById("seconds").style.color = 'white'
    }
    else if (hours == 22) {
        document.getElementById('parent').style.background = '#040b3c';
        document.getElementById("times").style.color = 'white'
        document.getElementById("hours").style.color = 'white'
        document.getElementById("minutes").style.color = 'white'
        document.getElementById("seconds").style.color = 'white'
    }
    else if (hours == 23) {
        document.getElementById('parent').style.background = '#040b3c';
        document.getElementById("times").style.color = 'white'
        document.getElementById("hours").style.color = 'white'
        document.getElementById("minutes").style.color = 'white'
        document.getElementById("seconds").style.color = 'white'
    }



    if (hours > 23) {
        console.log("new day");
        hours = 0;
        document.getElementById('hours').innerHTML = "0" + 0;
    }
}


