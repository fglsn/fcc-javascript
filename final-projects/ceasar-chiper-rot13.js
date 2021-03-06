// Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {

	let encoded = [];
	let asciiVal = 0;
  
	for (let i = 0; i < str.length; i++) {
	  asciiVal = str[i].charCodeAt(0);
	  if (asciiVal >= 65 && asciiVal <= 90) {
		  let charVal = 65 + ((asciiVal - 65) + 13) % 26;
		  encoded.push(String.fromCharCode(charVal));
	  }
	  else 
		  encoded.push(String.fromCharCode(asciiVal));
	}
	return encoded.join('');
  }
  
  console.log(rot13("SERR PBQR PNZC"));

// rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
// rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
// rot13("SERR YBIR?") should decode to the string FREE LOVE?
// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.