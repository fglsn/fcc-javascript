// Missing letters
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
	let i = 0; 
	let l = str[0].charCodeAt(0);
	for (i; i < str.length; i++) {
	  if (str.charAt(i).charCodeAt(0) !== l)
		return (String.fromCharCode(l));
	  else
		l++;
	}
	return undefined;
  }
  
  console.log(fearNotLetter("abce")); //should return the string d
  console.log(fearNotLetter("abcdefghjklmno")); //should return the string i
  console.log(fearNotLetter("stvwx")); //should return the string u
  console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); //undefined