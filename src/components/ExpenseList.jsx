import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, onEdit, onDelete }) => {
    if (expenses.length === 0) {
        return <p>No expenses found. Please add some expenses.</p>;
    }

    return (
        <div className="expense-list">
            {expenses.map(expense => (
                <ExpenseItem 
                    key={expense.id} 
                    expense={expense} 
                    onEdit={onEdit} 
                    onDelete={onDelete} 
                />
            ))}
        </div>
    );
};

export default ExpenseList;