// Map the Debris
// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
// The values should be rounded to the nearest whole number. The body being orbited is Earth.
// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.


function orbitalPeriod(arr) {
	const GM = 398600.4418;
	const eRad = 6367.4447; //earth radius
	let res = [];
	for (let elem in arr) {
	  const op = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[elem].avgAlt + eRad, 3) / GM)); // https://en.wikipedia.org/wiki/Orbital_period
	  res.push({name: arr[elem].name, orbitalPeriod: op});
	}
	return res;
  }

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) 
// should return [{name: "sputnik", orbitalPeriod: 86400}].

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])
// should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].