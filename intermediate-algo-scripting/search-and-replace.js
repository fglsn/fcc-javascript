// Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// Note: Preserve the case of the first character in the original word when you are replacing it.
//For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

  function myReplace(str, before, after) {
	const reg = new RegExp(before, 'i');
	let i = str.search(reg);
	if (str[i] === str[i].toUpperCase())
		after = after.charAt(0).toUpperCase() + after.slice(1);
	else
		after = after.charAt(0).toLowerCase() + after.slice(1);
	str = str.replace(reg, after);
	return str;
  }
  
  console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));
  console.log(myReplace("I think we should look up there", "up", "Down"));
  console.log(myReplace("Let us go to the store", "store", "mall"));
  console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
  console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
  console.log(myReplace("His name is Tom", "Tom", "john"));
  console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));