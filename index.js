const { nextISSTimesForMyLocation } = require('./iss');

 const printPassTimes = passTimes => {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds`);
  }
 };
 
 nextISSTimesForMyLocation((error, passTimes) => {
   if (error) {
     return console.log("It didn't work!", error);
   }
   // success, print out the deets!
   printPassTimes(passTimes);
 });


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIp('24.68.236.108', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!", error);
//   }

//   console.log('It worked! Returned lat and long', coordinates);
// });

// const exampleCoords = {latitude: 48.4284207, longitude: -123.3656444};

// fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//   }

//   console.log('It worked! Returned flyovertimes', passTimes);
// });