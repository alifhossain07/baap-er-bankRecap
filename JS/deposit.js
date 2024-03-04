document.getElementById("deposit-btn").addEventListener("click", function(){

    const inputFieldAmount = document.getElementById("deposit-input");
    const inputFieldAmountString = inputFieldAmount.value;
    const finalInputFieldAmount = parseFloat(inputFieldAmountString);
    console.log(finalInputFieldAmount);
    inputFieldAmount.value = "";

    const previousDepositFieldValue = document.getElementById("deposit-value");

    const depositFieldValueString = previousDepositFieldValue.innerText;

    const depositFieldValue = parseFloat(depositFieldValueString);

    const updatedDepositFieldValue = depositFieldValue + finalInputFieldAmount
   

    previousDepositFieldValue.innerText = updatedDepositFieldValue; 
    
    //Balance Section
    const defaultBalanceValue = document.getElementById("balance-value");
    const defaultBalanceValueString = defaultBalanceValue.innerText;
    const convBalanceValue = parseFloat(defaultBalanceValueString);
     
    const updatedBalanceValue = convBalanceValue + finalInputFieldAmount;
    defaultBalanceValue.innerText = updatedBalanceValue;

     
})
S