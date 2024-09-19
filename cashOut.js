document.getElementById('cashOut-btn').addEventListener('click',function(event){
    event.preventDefault();
    const previousMoney = document.getElementById('previous-money').innerText;
    const previousMoneyNumber = parseFloat(previousMoney)
    const cashOut = document.getElementById('cashOut-input').value;
    const cashOutNumber = parseFloat(cashOut);
    const cashOutPin = document.getElementById('cashOut-pin').value;
    if(cashOutPin == '111220'){
        const newBalance = previousMoneyNumber - cashOutNumber;
        document.getElementById('previous-money').innerText = newBalance;
    }
    else{
        alert('Incorrect Pin Number')
    }
})