document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    if(phoneNumber == '01821706537' && pinNumber == '111220'){
        window.location.href = './home.html'
    }
    else{
        alert('404 Incorrect Password')
    }
})