// Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. 
// The function should return a new array, and not mutate the globalArray variable.

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  const res = arr.concat([])
  return res.sort(function(a, b) {
    return a - b;
  });
}
nonMutatingSort(globalArray);