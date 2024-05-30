const decimalToBinary = (n) => {
    const quotient = parseInt(n / 2);
    const remainder = n % 2;
    return quotient > 0 ? decimalToBinary(quotient) + `${remainder === 0 ? 0 : 1}` : remainder === 0 ? 0 : 1;
};

console.log('decimalToBinary', decimalToBinary(100));