function checkCashRegister(price, cash, cid) {
	let change = cash - price;
	let cidRev = [...cid].reverse();
	let total = 0;
	let curr = [
	["PENNY", 0.01],
	["NICKEL", 0.05],
	["DIME", 0.1],
	["QUARTER", 0.25],
	["ONE", 1.00],
	["FIVE", 5.00],
	["TEN", 10.00],
	["TWENTY", 20.00],
	["ONE HUNDRED", 100.00]
  ];
	let error = {status: "INSUFFICIENT_FUNDS", change: []};
  
  //calculate total in cid
	for (const [name, val] of cid)
	  total += val;
  
	total = Number((total).toFixed(2));
  
	if (total - change < 0)
	  return error;
	if (total - change == 0) 
	  return {status: "CLOSED", change: cid};
  
	
  
	return change;  ``
  }
  
  // checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  
  // console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  
  // console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  
  // console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  
  