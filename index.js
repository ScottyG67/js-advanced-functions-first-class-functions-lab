// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };

const returnLastTwoDrivers = function (drivers) {
   return drivers.slice(-2);
 };

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function(num1){
    return function(num2){
        return num1*num2;
    };
};

const fareDoubler = function(number){
    return number * 2;
}

const fareTripler = function(number){
    return number * 3;
};

const selectDifferentDrivers = function (arrayOfDrivers, mehtod){
    return mehtod(arrayOfDrivers);
};
