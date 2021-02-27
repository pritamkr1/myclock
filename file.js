var time = document.querySelector('.clock-container');

var day = document.querySelector('.day');

function showtime(){
    var mydate = new Date();
   //time.innerHTML = mydate.toUTCString();
   //time.innerHTML = mydate.toDateString();
    var h = mydate.getHours();
    var m = mydate.getMinutes();
    var s = mydate.getSeconds();
    var period = "AM";
    if (h == 0){
        h = 12;
    }
    if(h > 12){
        h = h - 12;
        period = "PM";
    }
    if(h < 10){
        h = "0" + h;
    }
    if(m < 10){
        m = "0" + m;
    }
    if(s < 10){
        s = "0" + s;
    }
    var timing = `${h} : ${m} : ${s}`;
    time.innerHTML = timing;
    setTimeout(showtime, 1000);
}

showtime();

function showdate(){
    var getDate = new Date();
    getDate = getDate.toDateString();
    day.innerHTML = getDate;
}

showdate();