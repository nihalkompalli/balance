var balance = 2000
const balanceDisplay = document.getElementById("balance")
const history = document.getElementById("transactionList")

function updateBalance(){
  balanceDisplay.innerHTML = "$" + balance
}
updateBalance()

function updateHistory(message, type){
  /*we create the li element*/
  const li = document.createElement("li");
  /*we set the li text to the transaction message*/
  li.innerHTML = message;
  /*append a css class to the li element*/
  li.classList.add(type);
  /*we add the element to the top of the history list. always at the top*/
  history.prepend(li);
}

function deposit(){
  let amount = Number(document.getElementById("depositAmount").value);
  if(amount < 0){
    alert("You're trying to withdraw. Use the withdraw feature if you wanna lose money");
  }
  else{
    balance += amount;
  
    updateBalance();
    updateHistory("Deposited $"+amount,"depositedLi");
    
    document.getElementById("depositAmount").value="";
  }
}

function withdraw(){
  let amount = Number(document.getElementById("withdrawAmount").value);
  
  if(amount < 0){
    alert("You're trying to deposit. Use the deposit feature if you wanna get some money")
  }
  else{
    balance -= amount;
    
    updateBalance();
    updateHistory("Withdrawn $"+amount,"withdrawnLi");
    
    document.getElementById("withdrawAmount").value="";
  }
}
