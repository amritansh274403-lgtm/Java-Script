let prices = [120, 45, 300];

let total = prices.reduce(function(sum, price) {
    return sum + price;
}, 0);

console.log("Total:", total);