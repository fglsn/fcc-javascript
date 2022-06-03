// Roman Numeral Converter
// Convert the given number into a roman numeral.

// Roman numerals	Arabic numerals
// 		M		1000
// 		CM		900
// 		D		500
// 		CD		400
// 		C		100
// 		XC		90
// 		L		50
// 		XL		40
// 		X		10
// 		IX		9
// 		V		5
// 		IV		4
// 		I		1

// All roman numerals answers should be provided in upper-case.

function canDivide(num, div) {
	return (((num / div) >> 0) > 0);
}

function convertToRoman(num) {

	let res = [];

	while (num > 0) {
		if (canDivide(num, 1000)) {
			res.push('M');
			num -= 1000;
		}
		else if (canDivide(num, 900)) {
			res.push('CM');
			num -= 900;
		}
		else if (canDivide(num, 500)) {
			res.push('D');
			num -= 500;
		}
		else if (canDivide(num, 400)) {
			res.push('CD');
			num -= 400;
		}
		else if (canDivide(num, 100)) {
			res.push('C');
			num -= 100;
		}
		else if (canDivide(num, 90)) {
			res.push('XC');
			num -= 90;
		}
		else if (canDivide(num, 50)) {
			res.push('L');
			num -= 50;
		}
		else if (canDivide(num, 40)) {
			res.push('XL');
			num -= 40;
		}
		else if (canDivide(num, 10)) {
			res.push('X');
			num -= 10;
		}
		else if (canDivide(num, 9)) {
			res.push('IX');
			num -= 9;
		}
		else if (canDivide(num, 5)) {
			res.push('V');
			num -= 5;
		}
		else if (canDivide(num, 4)) {
			res.push('IV');
			num -= 4;
		}
		else {
			res.push('I');
			num -= 1;
		}
	}
	return res.join('');
	}
  
  console.log(convertToRoman(999));