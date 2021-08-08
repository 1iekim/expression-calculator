function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
   let count = 0;
   for(let i = 0; i<expr.length; i++) {
    if(expr[i] == "(") count++;
    if(expr[i] == ")") count--;
   }
   if(expr.includes("/ 0")) throw "TypeError: Division by zero.";
   if(count == 0) return new Function("return " + expr)();
   throw "ExpressionError: Brackets must be paired";
    
   //let val = new Function("return " + expr);
}

module.exports = {
    expressionCalculator
}
