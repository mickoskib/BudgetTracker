let income = 0;
let expenses = 0;
let available=0;

let moneyEarndContainer = document.getElementById("moneyEarned");

let moneyAvailableContainer = document.getElementById("moneyAvailable");

let moneySpendContainer = document.getElementById("moneySpend");

// Getting the Inputs

let descriptionInput = document.getElementById("description");
let amountInput = document.getElementById("amount")

//Buttons

let addIncomeBtn = document.getElementById("income");
let addExpenseBtn = document.getElementById("expense");

//divs

let incomeContainerList = document.getElementById("incomesContainer");
let expenseContainerList = document.getElementById("expensesContainer");


function addIncome(){
    income += parseInt(amountInput.value);
    incomeContainerList.textContent=`${income}`;
    moneyEarndContainer.textContent=`${income}`;

    available+=parseInt(amountInput.value);

    moneyAvailableContainer.textContent=available;
}
addIncomeBtn.addEventListener("click", addIncome);

function addExpenses(){
    expenses += parseInt(amountInput.value);
    expenseContainerList.textContent=`${expenses}`;
    available-=parseInt(amountInput.value);
    
    moneySpendContainer.textContent=`${expenses}`;
    moneyAvailableContainer.textContent=available;

}
addExpenseBtn.addEventListener("click", addExpenses);
