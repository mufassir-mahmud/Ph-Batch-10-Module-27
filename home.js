document.getElementById('add-btn').addEventListener('click',function(event){
    event.preventDefault();
    const previousBalance = document.getElementById('previous-money').innerText;
    const previousBalanceNumber = parseFloat(previousBalance);
    const amountInput = document.getElementById('amount-input').value;
    const amountInputNumber = parseFloat(amountInput);
    const pinInput = document.getElementById('pin-input').value;
    if(pinInput == '111220'){
        const newBalance = previousBalanceNumber + amountInputNumber;
        document.getElementById('previous-money').innerText = newBalance;
    }
    else{
        alert('Incorrect Password')
    }
})