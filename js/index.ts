const today: Date = new Date();
const currentYear: number = today.getFullYear();
const currentMonth: number = today.getMonth() + 1;
const previousMonth: number = currentMonth -1;
const currentDay: number = today.getDay() + 1;
const currentDate: number = today.getDate();
const month: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const day: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let monthDate: object[] = [];

function getMonthCalendar(currentMonth: number, currentDay: number, currentDate: number): void {
    let fullDay = getFullday(currentMonth);
    let startDay: number;
    // find start day of currentday in month
    if(currentDate >= 7) {
        startDay = calculateDay(currentDay + 1 - (currentDate % 7));
    } else {
        startDay = calculateDay(currentDay + 1 - (currentDate % 7)); 
    }
  
    for(let i = 1; i < fullDay + 1; i++) {
        if(startDay > 6) {
            startDay = 0;
        }
        let newObj: object = {
            day: day[startDay],
            date: i
        }
        monthDate.push(newObj);
        startDay++;
    }
    console.log(monthDate);
}

function calculateDay(Num: number): number {
    const negativeNumber: number[] = [6, 5, 4, 3, 2, 1, 0];
    if(Num < 0) {
        return negativeNumber[-Num];
    } else if(Num === 0) {
        return negativeNumber[Num];
    } else {
        return Num -1;
    }
}

function getFullday(Month: number): number {
    // get last date of this month
    if(Month === 2) {
        return 28;
    } else if((Month < 7 && Month % 2 === 0) || 
    (Month > 7 && Month % 2 === 1)) {
        return 30;
    } else {
        return 31;
    }
}

getMonthCalendar(9, 6, 24);