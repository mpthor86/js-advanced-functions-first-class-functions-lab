// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
    let drivers = arr.slice(0, 2)
    return drivers
}

const returnLastTwoDrivers = function(arr) {
    let drivers = arr.slice(-2)
    return drivers
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(int) {
    return function(fare) {
        return fare * int
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arr, fn) {
   return fn(arr)
}