document.getElementById("witdraw-btn").addEventListener("click", function(){

    const withdrawinputFieldAmount = document.getElementById("withdraw-input");
    const withdrawinputFieldAmountString = withdrawinputFieldAmount.value;
    const withdrawfinalInputFieldAmount = parseFloat(withdrawinputFieldAmountString);
    console.log(withdrawfinalInputFieldAmount);
    withdrawinputFieldAmount.value = "";



    const previousWithdrawFieldValue = document.getElementById("withdraw-value");

    const withdrawFieldValueString = previousWithdrawFieldValue.innerText;

    const withdrawFieldValue = parseFloat(withdrawFieldValueString);

    const updatedWithdrawFieldValue = withdrawFieldValue + withdrawfinalInputFieldAmount;
   

    previousWithdrawFieldValue.innerText =  updatedWithdrawFieldValue;  

    
    
})
