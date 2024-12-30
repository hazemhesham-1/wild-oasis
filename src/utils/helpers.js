function formatCurrency(value) {
    const options = {
        style: "currency",
        currency: "USD",
    };
    return value.toLocaleString("en-US", options);
}

function getToday(options = {}) {
    const today = new Date();
    if(options?.end) {
        today.setUTCHours(23, 59, 59, 999);
    }
    else {
        today.setUTCHours(0, 0, 0, 0);
    }
    return today.toISOString();
}

function formatDistanceFromNow(date) {
    const diff = (new Date() - new Date(date));
    const days = Math.abs(diff/(24 * 60 * 60 * 1000));
    if(diff > 0) {
        if(days > 30) {
            return `${Math.round(days/30)} months ago`;
        }
        return `${Math.round(days)} days ago`;
    }
    else {
        if(days > 30) {
            return `In ${Math.round(days/30)} month`;
        }
        return `In ${Math.round(days)} days`;
    }
}

export { formatCurrency, formatDistanceFromNow, getToday };