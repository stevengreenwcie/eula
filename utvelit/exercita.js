function calculateCY1(D, dx, dy, d) {
    const d2 = d * d; // Computing d squared
    const cy1 = (-D * dx + dy * d) / d2;
    return cy1;
}

// Example usage:
const D = 5;
const dx = 3;
const dy = 4;
const d = 2;

const result = calculateCY1(D, dx, dy, d);
console.log("The value of cy1 is:", result);
