// DNA Pairing
// Pairs of DNA strands consist of protein base pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.
// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand.
//For each character in the provided string, find the base pair character. Return the results as a 2d array.
// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
	let arr = str.split('');
	let obj = [];
	let sub = [];
   
	for (let item of arr) {
	  if (item === 'G')
		sub.push(item, 'C');
	  else if (item == 'C')
		sub.push(item, 'G');
	  else if (item == 'T')
		sub.push(item, 'A');
	  else if (item == 'A')
		sub.push(item, 'T');
	}
  
	for (let i = 0;  i < sub.length; i += 2)
	  obj.push(sub.slice(i, i + 2));
	
	console.log(obj);
	return obj;
  }
  
  pairElement("GCG");
  pairElement("TTGAG");