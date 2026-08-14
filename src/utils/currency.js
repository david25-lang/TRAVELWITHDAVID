export const formatCurrency = (amount) => {
    const numericValue = Number(amount);

    if (Number.isNaN(numericValue)) {
        return '₦0';
    }

    return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        maximumFractionDigits: 0,
    }).format(numericValue);
};