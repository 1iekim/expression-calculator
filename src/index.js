function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
   let val = new Function("return " + expr);
   return val;
}

module.exports = {
    expressionCalculator
}
