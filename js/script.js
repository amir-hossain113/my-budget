function getIncomeValue(){
    const incomeInput = document.getElementById('income');
    const incomeValue = incomeInput.value;

    if(incomeValue < 0) {
        getErrorMessage(1);
    }
    if(incomeValue == ""){
        getErrorMessage(2);
    }
    return incomeValue;

}

function getErrorMessage(isNumber){
    if (isNumber == 1){
        document.getElementById('error-msg1').style.display = 'block';
    }
    if(isNumber == 2){
        document.getElementById('error-msg2').style.display = 'block';
    }
    if(isNumber == 3){
        document.getElementById('error-msg3').style.display = 'block';
    }
    if(isNumber == 4){
        document.getElementById('error-msg4').style.display = 'block';
    }

}


//handle calculate button
document.getElementById('calculation-btn').addEventListener('click', function(){

        //store value from calling function
        const newIncomeValue = getIncomeValue();

        //get expenses 
        const foodInput = document.getElementById('food-exp');
        const foodValue = foodInput.value;

        const rentInput = document.getElementById('rent-exp');
        const rentValue = rentInput.value;

        const clothInput = document.getElementById('cloth-exp');
        const clothValue = clothInput.value;

        //condition cheaking
        if (foodValue < 0 || rentValue < 0 || clothValue < 0){
            getErrorMessage(1);
        }
    
        else if(foodValue == "" || rentValue == "" || clothValue == ""){
            getErrorMessage(2);
        }

        //get total expence
        const totalExpValue = parseInt(foodValue) + parseInt(rentValue) + parseInt(clothValue);

        //condition cheaking
        if (newIncomeValue < totalExpValue) {
            getErrorMessage(3);
            return;
        }
        //get expence value
        const totalExpInput = document.getElementById('total-exp');
        totalExpInput.innerText = totalExpValue;

        //get balance value
        const balanceInput = document.getElementById('balance');
        balanceInput.innerText = newIncomeValue;
        const balanceTotalValue = parseInt(balanceInput.innerText);

        //get balance
        balanceInput.innerText = balanceTotalValue - totalExpValue;

    });



//handle save button
document.getElementById('save-button').addEventListener('click', function(){
        //get save input value
        const saveInput = document.getElementById('save-input');
        const saveInputValue = parseInt(saveInput.value);

        //get balance value
        const balanceInput = document.getElementById('balance');
        const balanceTotalValue = parseInt(balanceInput.innerText);

        //store value from calling function
        const newIncomeValue = getIncomeValue();
        
        //get save money
        const saveMoney = (newIncomeValue * saveInputValue) / 100;

        //condition cheaking
        if (saveMoney > balanceTotalValue) {
            getErrorMessage(4);
            return;
        }

        //get saveing amount
        const savingAmount = document.getElementById('saving-amount');
        savingAmount.innerText = saveMoney;

        //get remaining balance
        const remainingBalance = document.getElementById('remaining-balance');
        remainingBalance.innerText = balanceTotalValue - saveMoney;
    });