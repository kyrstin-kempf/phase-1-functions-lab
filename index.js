// Code your solution in this file!
const hq = 42;
function distanceFromHqInBlocks(pickup) {
    if (pickup < hq) {
        return hq - pickup;
    }  
    return pickup - hq;
}

const manhattanBlocksInFeet = 264;
function distanceFromHqInFeet(blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * manhattanBlocksInFeet;
};

// parameters can be reused but will only apply to current function (not outside of function)
function distanceTravelledInFeet(start, destination) {
    if (destination < start) {
        return ((start - destination)*264);
    }
    return ((destination - start) * 264);
};

// by defining let feet = disutanceTravelledInFeet the function was simplified
// return (feet - 400) * 0.02 because first 400 feet are not charged!
function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination) 
    if (feet <= 400) {
        return 0
    }   else if (feet > 400 && feet <= 2000) {
        return (feet - 400) * 0.02
    }   else if (feet > 2000 && feet < 2500) {
        return 25
    }   else {
        return 'cannot travel that far'
    }
};