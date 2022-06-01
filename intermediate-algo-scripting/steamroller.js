// Steamroller
// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
	let res = [];
	for (let i = 0; i < arr.length; i++) {
	  if (Array.isArray(arr[i]))
		res.push(...steamrollArray(arr[i]));
	  else
		res.push(arr[i]);
	}
	return res;
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]])); // [ 1, 2, 3, 4 ]
  console.log(steamrollArray([[["a"]], [["b"]]])); // [ 'a', 'b' ]
  console.log(steamrollArray([1, [], [3, [[4]]]])); // [1, 3, 4]
  console.log(steamrollArray([1, {}, [3, [[4]]]])); // [1, {}, 3, 4]