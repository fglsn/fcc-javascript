let billsGiven = 0;

function calcChange(change, currUnit, unitValue) {
    let billsInDrawer = Math.floor(currUnit / unitValue);
    let billsToGive = Math.floor(change / unitValue);
   // console.log("Num of bills to give: ", billsToGive, "\nNum of bills in drawer: ", billsInDrawer);
    if (billsInDrawer >= billsToGive)
        billsGiven = billsToGive;
    else
        billsGiven = billsInDrawer;
    change -= (billsGiven * unitValue).toFixed(2);
    return (change.toFixed(2));
  }

function checkCashRegister(price, cash, cid) {
	let change = cash - price;
	let cidRev = [...cid].reverse();
	let total = 0;
	let givenChange = [];
	let check = 0;
	let error = {status: "INSUFFICIENT_FUNDS", change: []};
  
  //calculate total in cid
	for (const [_, val] of cid)
	  total += val;
  
	total = Number((total).toFixed(2));

	if (total - change == 0) 
	   return {status: "CLOSED", change: cid};

  if (change >= 100) {
    change = calcChange(change, cidRev[0][1], 100);
    cidRev[0][1] -= billsGiven * 100;
    givenChange.push(new Array(cidRev[0][0], billsGiven * 100));
    //console.log('change after 100: ', change);
  }
  if (change >= 20) {
    change = calcChange(change, cidRev[1][1], 20);
    cidRev[1][1] -= billsGiven * 20;
    givenChange.push(new Array(cidRev[1][0], billsGiven * 20));
    //console.log('change after 20: ', change);
  }
  if (change >= 10) {
    change = calcChange(change, cidRev[2][1], 10);
    cidRev[2][1] -= billsGiven * 10;
    givenChange.push(new Array(cidRev[2][0], billsGiven * 10));
    //console.log('change after 10: ', change);
  }
  if (change >= 5) {
    change = calcChange(change, cidRev[3][1], 5);
    cidRev[3][1] -= billsGiven * 5;
    givenChange.push(new Array(cidRev[3][0], billsGiven * 5));
    //console.log('change after 5: ', change);
  }
  if (change >= 1) {
    change = calcChange(change, cidRev[4][1], 1);
    cidRev[4][1] -= billsGiven * 1;
    givenChange.push(new Array(cidRev[4][0], billsGiven * 1));
    //console.log('change after 1: ', change);
  }
  if (change >= 0.25) {
    change = calcChange(change, cidRev[5][1], 0.25);
    cidRev[5][1] -= billsGiven * 0.25;
    givenChange.push(new Array(cidRev[5][0], billsGiven * 0.25));
    //console.log('change after 0.25: ', change);
  }
  if (change >= 0.1) {
    change = calcChange(change, cidRev[6][1], 0.1);
    cidRev[6][1] -= billsGiven * 0.1;
    givenChange.push(new Array(cidRev[6][0], billsGiven * 0.1));
    //console.log('change after 0.1: ', change);
  }
  if (change >= 0.05) {
    change = calcChange(change, cidRev[7][1], 0.05);
    cidRev[7][1] -= billsGiven * 0.05;
    givenChange.push(new Array(cidRev[7][0], billsGiven * 0.05));
    //console.log('change after 0.05: ', change);
  }
  if (change >= 0.01) {
    change = calcChange(change, cidRev[8][1], 0.01);
    cidRev[8][1] -= billsGiven * 0.01;
    givenChange.push(new Array(cidRev[8][0], billsGiven * 0.01));
    //console.log('change after 0.01: ', change);
  }
  if (change > 0)
    return error;
  
  for (let unit of cidRev) {
    if (unit[1] === 0)
      check++;
  }
  
  if (check == cidRev.length)
    return {status: "CLOSED", change: givenChange};
  else 
    return {status: "OPEN", change: givenChange};
  }
  

  // checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
  
  // console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  
  //console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  
  // console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  