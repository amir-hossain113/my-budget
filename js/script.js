function calculate(){
    const foodInput = document.getElementById('food-exp');
    const foodValue = parseInt(foodInput.value);

    const rentInput = document.getElementById('rent-exp');
    const rentValue = parseInt(rentInput.value);

    const clothInput = document.getElementById('cloth-exp');
    const clothValue = parseInt(clothInput.value);

    const totalExpInput = document.getElementById('total-exp');

    if(isNaN(foodValue || rentValue || clothValue)){
        const errorMsg1 = document.getElementById();
    }
    else{
        //calculation of total expenses
        totalExpInput.innerText = foodValue + rentValue + clothValue;
    }
    

    const incomeInput = document.getElementById('income');
    const incomeValue = parseInt(incomeInput.value);

    //calculation of balance
    const balanceInput = document.getElementById('balance');
    return balanceInput.innerText = incomeValue - totalExpInput.innerText;
}


function savings(){
    const balanceInput = calculate();

    const incomeInput = document.getElementById('income');
    const incomeValue = parseInt(incomeInput.value);

    const saveInput = document.getElementById('save-input');
    const saveInputValue = parseInt(saveInput.value);

    //calculation of saving Amount
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = incomeValue * (saveInputValue /100);
    const savingAmountValue = savingAmount.innerText;

    //calculation of remaining balance
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = balanceInput - savingAmountValue;
}

//handle calculate button
document.getElementById('calculation-btn').addEventListener('click', function(){
    
    calculate();

});




//handle save button
document.getElementById('save-button').addEventListener('click', function(){

    savings();
    
});