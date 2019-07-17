function checkCashRegister(price, cash, cid) {
    let change = cash - price,
        unit = [
          ["ONE HUNDRED", 100],
          ["TWENTY", 20],
          ["TEN", 10],
          ["FIVE", 5],
          ["ONE", 1],
          ["QUARTER", 0.25],
          ["DIME", 0.1],
          ["NICKEL", 0.05],
          ["PENNY", 0.01]
        ],
        hand = [],
        status = ""
  
    if(change < 0) return 0;
    else {
      let total = cid.reduce((a,b) => a + b[1], 0)
  
      if(total < change) return {status: "INSUFFICIENT_FUNDS", change: []}
      if(total === change) return {status: "CLOSED", change: cid}
      
      let range = unit.filter(x => x[1] <= change)
  
      for(let u of range) {
        if(change) {
          let need = u[1] * Math.floor((change.toFixed(2) / u[1]))
          let money = cid.find(x => x[0] === u[0])[1]
          let amount = need <= money ? need : money
          
          amount && hand.push([u[0], amount])
          
          change -= amount
        } else break
      }
  
      return change <= 0 ? {status: "OPEN", change: hand} : {status: "INSUFFICIENT_FUNDS", change: []};
    }
  }
  
  // Example cash-in-drawer array:
  // [["PENNY", 1.01],
  // ["NICKEL", 2.05],
  // ["DIME", 3.1],
  // ["QUARTER", 4.25],
  // ["ONE", 90],
  // ["FIVE", 55],
  // ["TEN", 20],
  // ["TWENTY", 60],
  // ["ONE HUNDRED", 100]]
  
  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));