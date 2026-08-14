import React from 'react';

const ExpenseItem = ({ expense, onEdit, onDelete }) => {
    const { id, title, amount, category, date } = expense;

    const handleEdit = () => {
        onEdit(id);
    };

    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <div className="expense-item">
            <h3>{title}</h3>
            <p>Amount: ₦{amount.toFixed(2)}</p>
            <p>Category: {category}</p>
            <p>Date: {new Date(date).toLocaleDateString()}</p>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default ExpenseItem;