// State Engine Object (Holds runtime application records)
let transactions = JSON.parse(localStorage.getItem('fintrack_records')) || [];

// Target DOM Elements
const transactionForm = document.getElementById('transaction-form');
const textDesc = document.getElementById('text-desc');
const amountVal = document.getElementById('amount-val');
const ledgerList = document.getElementById('ledger-list');
const ledgerFilter = document.getElementById('ledger-filter');

const totalBudgetEl = document.getElementById('total-budget');
const totalSpentEl = document.getElementById('total-spent');
const remainingBalanceEl = document.getElementById('remaining-balance');

// 1. Core Logic: Add Transaction Resource
function addTransaction(e) {
    e.preventDefault();

    const transaction = {
        id: crypto.randomUUID(), // Generates a completely unique identifier string
        description: textDesc.value.trim(),
        amount: parseFloat(amountVal.value)
    };

    transactions.push(transaction);
    updateUI();
    
    // Clear Input Streams
    textDesc.value = '';
    amountVal.value = '';
}

// 2. Core Logic: Remove Transaction Resource
function deleteTransaction(id) {
    transactions = transactions.filter(t => t.id !== id);
    updateUI();
}

// 3. Calculation & DOM Engine
function updateUI() {
    // Commit current execution state to persistent Web Memory Storage
    localStorage.setItem('fintrack_records', JSON.stringify(transactions));

    const selectedFilter = ledgerFilter.value;
    ledgerList.innerHTML = '';

    // Apply algorithm filter criteria
    const filteredTransactions = transactions.filter(t => {
        if (selectedFilter === 'income') return t.amount > 0;
        if (selectedFilter === 'expense') return t.amount < 0;
        return true;
    });

    // Generate UI List Items
    filteredTransactions.forEach(t => {
        const sign = t.amount > 0 ? '+' : '';
        const borderClass = t.amount > 0 ? 'plus' : 'minus';
        
        const li = document.createElement('li');
        li.className = `ledger-item ${borderClass}`;
        li.innerHTML = `
            <div>
                <span>${t.description}</span>
                <strong style="margin-left: 15px;">${sign}$${t.amount.toFixed(2)}</strong>
            </div>
            <button class="delete-btn" onclick="deleteTransaction('${t.id}')">✕</button>
        `;
        ledgerList.appendChild(li);
    });

    // Run Advanced Reducer Aggregations for Overview Metrics
    const income = transactions
        .filter(t => t.amount > 0)
        .reduce((acc, t) => acc + t.amount, 0);

    const expense = transactions
        .filter(t => t.amount < 0)
        .reduce((acc, t) => acc + t.amount, 0);

    const balance = income + expense;

    // Update Output Containers
    totalBudgetEl.textContent = `$${income.toFixed(2)}`;
    totalSpentEl.textContent = `$${Math.abs(expense).toFixed(2)}`;
    remainingBalanceEl.textContent = `${balance < 0 ? '-' : ''}$${Math.abs(balance).toFixed(2)}`;
}

// Event Configuration Wiring
transactionForm.addEventListener('submit', addTransaction);
ledgerFilter.addEventListener('change', updateUI);

// Primary Initial Boot Routine Execution
updateUI();