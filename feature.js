document.getElementById('cash-btn').addEventListener('click', function(event){
    event.preventDefault();
    const cashOutSection = document.getElementById('cashOut-section').classList.remove('hidden');
    const addSection = document.getElementById('add-section').classList.add('hidden')
})
document.getElementById('add-main').addEventListener('click', function(event){
    event.preventDefault();
    const addSection = document.getElementById('add-section').classList.remove('hidden')
    const cashOutSection = document.getElementById('cashOut-section').classList.add('hidden');
    
})
