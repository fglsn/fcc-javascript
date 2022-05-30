// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.
// Note: You have to use the arguments object.

function destroyer(arr) {
	let args = [];
	let res = [];
	for (let i = 1; i < arguments.length; i++)
	  args.push(arguments[i]);
	for (let i = 0; i < args.length; i++) {
	  res = arr.filter(elem => args.indexOf(elem) < 0);
	}

	console.log(res);
	return res;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);