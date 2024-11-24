function formatCurrency(value) {
    const options = {
        style: "currency",
        currency: "USD",
    };
    return value.toLocaleString("en-US", options);
}

export { formatCurrency };