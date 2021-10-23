var today = new Date();
var currentYear = today.getFullYear();
var currentMonth = today.getMonth() + 1;
var previousMonth = currentMonth - 1;
var currentDay = today.getDay() + 1;
var currentDate = today.getDate();
var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var monthDate = [];
function getMonthCalendar(currentMonth, currentDay, currentDate) {
    var fullDay = getFullday(currentMonth);
    var startDay;
    // find start day of currentday in month
    if (currentDate >= 7) {
        startDay = calculateDay(currentDay + 1 - (currentDate % 7));
    }
    else {
        startDay = calculateDay(currentDay + 1 - (currentDate % 7));
    }
    for (var i = 1; i < fullDay + 1; i++) {
        if (startDay > 6) {
            startDay = 0;
        }
        var newObj = {
            day: day[startDay],
            date: i
        };
        monthDate.push(newObj);
        startDay++;
    }
    console.log(monthDate);
}
function calculateDay(Num) {
    var negativeNumber = [6, 5, 4, 3, 2, 1, 0];
    if (Num < 0) {
        return negativeNumber[-Num];
    }
    else if (Num === 0) {
        return negativeNumber[Num];
    }
    else {
        return Num - 1;
    }
}
function getFullday(Month) {
    // get last date of this month
    if (Month === 2) {
        return 28;
    }
    else if ((Month < 7 && Month % 2 === 0) ||
        (Month > 7 && Month % 2 === 1)) {
        return 30;
    }
    else {
        return 31;
    }
}
getMonthCalendar(9, 6, 24);
