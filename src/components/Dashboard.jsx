import React from 'react';

const Dashboard = ({ expenses }) => {
    const totalSpent = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    const numberOfExpenses = expenses.length;

    return (
        <div className="dashboard">
            <h2>Expense Dashboard</h2>
            <div className="summary">
                <p>Total Amount Spent: <strong>₦{totalSpent.toFixed(2)}</strong></p>
                <p>Number of Expenses: <strong>{numberOfExpenses}</strong></p>
            </div>
            {numberOfExpenses === 0 && <p>No expenses recorded yet.</p>}
        </div>
    );
};

export default Dashboard;