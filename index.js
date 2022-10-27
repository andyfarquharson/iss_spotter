
const { fetchMyIP, fetchCoordsByIp } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

fetchCoordsByIp('24.68.236.108', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!", error);
  }

  console.log('It worked! Returned lat and long', coordinates);
});