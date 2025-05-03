const rideModel = require('../models/ride_model');
const mapService = require('./maps_service');
const crypto = require('crypto');
async function getFare(pickup, destination) {

    if (!pickup || !destination) {
        throw new Error('Pickup and destination are required to calculate fare.');
    }

    const distanceTime = await mapService.getDistanceTime(pickup, destination);

    // Example fare calculation logic (values can be adjusted as needed)
    const baseFare = {
        auto: 30,
        car: 50,
        moto: 20
    };

    const perKmRate = {
        auto: 12,
        car: 18,
        moto: 8
    };

    const perMinuteRate = {
        auto: 2,
        car: 3,
        moto: 1
    };

    // console.log(distanceTime.distance.value, distanceTime.duration.value);
    const fares = {
        auto: baseFare.auto + ((distanceTime.distance.value / 1000) * perKmRate.auto) + ((distanceTime.duration.value / 60 ) * perMinuteRate.auto),
        car: baseFare.car + ((distanceTime.distance.value / 1000) * perKmRate.car) + ((distanceTime.duration.value / 60 ) * perMinuteRate.car),
        moto: baseFare.moto + ((distanceTime.distance.value / 1000) * perKmRate.moto) + ((distanceTime.duration.value / 60 ) * perMinuteRate.moto)
    };

    return fares;
}

function getOtp(num) {
    function generateOtp(num){
        const otp = crypto.randomInt(Math.pow(10, num-1), Math.pow(10, num)).toString();
        return otp;
    }
    return generateOtp(num);
}
module.exports.createRide = async ({
    user, pickup, destination, vehicleType
})=> {
    if (!user || !pickup || !destination || !vehicleType) {
        throw new Error('All fields are required to create a ride.');
    }

    const fare = await getFare(pickup, destination);

    const ride = rideModel.create({
        user,
        pickup,
        destination,
        otp: getOtp(6),
        fare: fare[vehicleType],
        
    })

    return ride;
}


