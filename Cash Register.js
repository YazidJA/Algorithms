function checkCashRegister(price, cash, cid) {
  var change = [];
  var object = { status: "", change: change };
  //total CID
  var total = 0;
  for (let i = 0; i < cid.length; i++) {
    total += cid[i][1];
  }
  //Status of CID
  if (cash - price > total) {
    object.status = "INSUFFICIENT_FUNDS";
  } else if (cash - price < total) {
    object.status = "OPEN";
  } else {
    object.status = "CLOSED";
  }
  //Return change
  console.log(cid);
  [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  //Final Object
  return object;
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
