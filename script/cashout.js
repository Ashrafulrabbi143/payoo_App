document.getElementById('cashout_btn').addEventListener('click', function () {
  //1.get the agent number and validate
  const cashoutNumber = getValueFromInput('Cashout_number');
  if (cashoutNumber.length !=11) {
    alert('invalid Agent Number');
    return;
  }
  //2.get the amount,
  const cashoutAmount = getValueFromInput('Cashout_amount');

  //3.get the current balance,
  // machine.js eh  getBalance() ey ta set kora akon ay code ta er likhte hove na.
  
  // const balanceElement = document.getElementById('balance');
  // const balance = balanceElement.innerText;
  // console.log(balance)

  // 3 new kore machine.js er jonnu
  const currentBalance = getBalance();
  //4.calculate new balance
  const newBalance = currentBalance - Number(cashoutAmount);
  console.log(newBalance);
  if (newBalance < 0) {
    alert("invalid Amount")
    return;
  }
  const pin = getValueFromInput('Cashout_pin');
   if (pin === '1234') {
    alert('cashout Successful');
     // document.getElementById('balamce').innerText = newBalance;
     setBalance(newBalance)
  }
   else {
    alert('invalid pin');
    return;
  }
})







// document.getElementById('cashout_btn').addEventListener('click', function () {
//   //1.get the agent number and validate
//   const cashoutNumberInput = document.getElementById('Cashout_number');
//   const cashoutNumber = cashoutNumberInput.value;
//   console.log(cashoutNumber)
//   if (cashoutNumber.length !=11) {
//     alert('invalid Agent Number');
//     return;
//   }
//   //2.get the amount,
//   const cashoutAmountInput = document.getElementById('Cashout_amount');
//   const cashoutAmount = cashoutAmountInput.value;
//   console.log(cashoutAmount)
//   //3.get the current balance,  
//   const balanceElement = document.getElementById('balamce');
//   const balance = balanceElement.innerText;
//   console.log(balance)
//   //4.calculate new balance
//   const newBalance = Number(balance) - Number(cashoutAmount);
//   if (newBalance < 0) {
//     alert("invalid Amout")
//     return;
//   }
//   // console.log("new Balance", newBalance);

//   //5.get the pin and verify
//   const cashoutPinInput = document.getElementById('Cashout_pin');
//   const pin = cashoutPinInput.value;
//   if (pin === '1234') {
//     //5.1 true::: show and alert>set balance
//     alert('cashout Successful');
//     console.log("new Balance", newBalance);
//     balanceElement.innerText = newBalance;

//   }
//   else {
//     //5.2 false:: show an error alert>return;
//     alert('invalid pin');
//     return;
//   }

//  })