var leapYear = function(year){
    if (year % 4 == 0){
        console.log(`${year} is a leap year`);
        } 
    else {
        if (year % 400 == 0){
            console.log(`${year} is leap year`);   
         }
        console.log(`${year} is not a leap year`);
        
    }
}
leapYear(1999);
leapYear(2020);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear("Twenty Twenty");
leapYear(undefined);
leapYear(NaN);
leapYear(1750);