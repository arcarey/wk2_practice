console.log('ConditionalsJS');

//road trip planner
let seatsInCar = 7;
let passengersInCar = 5;
let infants = 1;
let infantseats = 1;
let fullTank = true;

//check that there is room for everyone
if (seatsInCar>=passengersInCar && infants<=infantseats){
    console.log('Ready for the road trip');
    if (fullTank === true) {
        console.log('Tank is topped off, and we\'re ready to roll');
    } else {
        console.log('Better fill the tank before leaving!');
    }
}else{
    console.log('not ready!');
}

//check if there's enough infant seats