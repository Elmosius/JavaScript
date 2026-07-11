function queueTime(customers, n) {
    const tills = new Array(n).fill(0);
​
    for (const customer of customers) {
        const min = Math.min(...tills);
        const index = tills.indexOf(min);
​
        tills[index] += customer;
    }
​
    return Math.max(...tills);
}
​