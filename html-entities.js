// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
	const amp = /&/g;
	const lt = /</g;
	const gt = />/g;
	const quot = /\"/g;
	const apos = /\'/g;
	str = str.replace(amp, '&amp;');
	str = str.replace(lt, '&lt;');
	str = str.replace(gt, '&gt;');
	str = str.replace(quot, '&quot;');
	str = str.replace(apos, '&apos;');
	return str;
  }
  
  console.log(convertHTML("Dolce & Gabbana")); // Dolce &amp; Gabbana.
  console.log(convertHTML("Hamburgers < Pizza < Tacos")); //Hamburgers &lt; Pizza &lt; Tacos.
  console.log(convertHTML('Stuff in "quotation marks"')); //Stuff in &quot;quotation marks&quot;