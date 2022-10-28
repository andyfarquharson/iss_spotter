const { fetchMyIP, 
  fetchCoordsByIp, 
  fetchISSFlyOverTimes } = require('./iss');

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
const exampleCoords = {latitude: 48.4284207, longitude: -123.3656444};

fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!", error);
  }

  console.log('It worked! Returned flyovertimes', passTimes);
});