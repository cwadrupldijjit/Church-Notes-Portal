var tDate = new Date();
var month = tDate.getMonth();
var year = tDate.getFullYear();
var day = tDate.getDate();
var weekday = tDate.getDay();
var hours = tDate.getHours();
var minutes = tDate.getMinutes();
var seconds = tDate.getSeconds();
var wDAbbr, fullTime, halfDay, todaysDate;

function parseTime()
{
    switch (month)
    {
        case 0: month = "January"; break;
        case 1: month = "February"; break;
        case 2: month = "March"; break;
        case 3: month = "April"; break;
        case 4: month = "May"; break;
        case 5: month = "June"; break;
        case 6: month = "July"; break;
        case 7: month = "August"; break;
        case 8: month = "September"; break;
        case 9: month = "October"; break;
        case 10: month = "November"; break;
        case 11: month = "December"; break;
    }

    switch (weekday)
    {
        case 0: weekday = "Sunday"; wDAbbr = "Sun"; break;
        case 1: weekday = "Monday"; wDAbbr = "Mon"; break;
        case 2: weekday = "Tuesday"; wDAbbr = "Tues"; break;
        case 3: weekday = "Wednesday"; wDAbbr = "Wed"; break;
        case 4: weekday = "Thursday"; wDAbbr = "Thurs"; break;
        case 5: weekday = "Friday"; wDAbbr = "Fri"; break;
        case 6: weekday = "Saturday"; wDAbbr = "Sat"; break;
        default: alert("You set this as the wrong thing!");
    }

    if (hours > 12)
    {
        hours -= 12;
        halfDay = "pm";
    }
    else if (hours === 12)
    {
        halfDay = "pm";
    }
    else if (hours === 0)
    {
        hours += 12;
        halfDay = "am";
    }
    else
        halfDay = "am";

    switch (minutes)
    {
        case 0: minutes = "00"; break;
        case 1: minutes = "01"; break;
        case 2: minutes = "02"; break;
        case 3: minutes = "03"; break;
        case 4: minutes = "04"; break;
        case 5: minutes = "05"; break;
        case 6: minutes = "06"; break;
        case 7: minutes = "07"; break;
        case 8: minutes = "08"; break;
        case 9: minutes = "09"; break;
    }

    switch (seconds)
    {
        case 0: seconds = "00"; break;
        case 1: seconds = "01"; break;
        case 2: seconds = "02"; break;
        case 3: seconds = "03"; break;
        case 4: seconds = "04"; break;
        case 5: seconds = "05"; break;
        case 6: seconds = "06"; break;
        case 7: seconds = "07"; break;
        case 8: seconds = "08"; break;
        case 9: seconds = "09"; break;
    }

    fullTime = hours + ":" + minutes + ":" + seconds + " " + halfDay;

    todaysDate = (tDate.getMonth + 1) + "/" + day + "/" + tDate.getYear;
}

function addTime()
{
    parseTime();
    document.getElementById("time").value = fullTime + " on " + todaysDate;
}

document.onLoad(parseTime);