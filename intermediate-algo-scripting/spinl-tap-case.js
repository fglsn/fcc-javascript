// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
	const pattern = /\s+|_+|(?=[A-Z])/g; //search for space, '_' or if words starts with capital letter
	return str.split(pattern).join('-').toLowerCase(); //split by ' ', '_', or capital letter, join splitted array with '-', make lowercase str
	}
	
	spinalCase('This Is Spinal Tap');
	spinalCase("Teletubbies say Eh-oh");
	spinalCase("AllThe-small Things");
	spinalCase("thisIsSpinalTap");
	spinalCase("The_Andy_Griffith_Show");