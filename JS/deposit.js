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
    
})
