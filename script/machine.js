// console.log("hi! this is tarek")

//machine id -> input value

function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  console.log(id, value)
  return value;
}

// machine --> balance 
function getBalance() {
  const balanceElement = document.getElementById('balamce');
  const balance = balanceElement.innerText;
  console.log('current Balance', Number(balance))
  return Number(balance);
}

// machine value---> set balance 
function setBalance(value) {
  const balanceElement = document.getElementById('balamce');
  balanceElement.innerText = value;
}

//machine value--> set value
function showOnly(id) {
  const addMoney = document.getElementById('add_money');
  const cashout = document.getElementById('Cashout');
  // console.log(`add money ${addMoney},cashout ${cashout}`)
  //sobay ke hide kore dao
  addMoney.classList.add("hidden");
  cashout.classList.add("hidden");
  //id ohla element ta ke ehver show korbo 
  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
  
}