// Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
// - If a word begins with a vowel, just add way at the end.
// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
	const reg = /[aeiou]/i;
	if (reg.test(str.charAt(0))) //if starts with vowel
	  return str + 'way';
	else if (!reg.test(str)) //if no vowels in str 
	  return str + 'ay';
	else {
	  let i = str.match(reg).index;
	  let cons = str.slice(0, i);
	  let tail = str.slice(i);
	  return tail + cons + 'ay';
	}
  }
  
  console.log(translatePigLatin("consonant"));
  console.log(translatePigLatin("california"));
  console.log(translatePigLatin("paragraphs"));
  console.log(translatePigLatin("glove"));
  console.log(translatePigLatin("algorithm"));
  console.log(translatePigLatin("rhythm"));