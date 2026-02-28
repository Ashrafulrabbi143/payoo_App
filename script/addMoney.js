document.getElementById('add_money_btn').addEventListener('click', function () {
  //1-->Bank account get
  const bankAccount = getValueFromInput('add_money_bank');
  if (bankAccount === 'Select a Bank') {
    alert('please select a bank');
    return;
  }
  //2.get bank account number
  const accno = getValueFromInput('add_money_number');
  if (accno.length != 11) {
    alert('invalid acc no')
  }
  //3.get amount to add 
  const amount = getValueFromInput('add_money_amount');
  const currentBalance = getBalance();
  const newbalance = currentBalance + Number(amount);
  
  const pin = getValueFromInput('add_money_pin');
  if (pin === "1234") {
    alert(`add money successfully from ${bankAccount} at ${new (Date)}`)
    setBalance(newbalance)
  }
  else {
    alert('invalid pin');
    return;
  }

})