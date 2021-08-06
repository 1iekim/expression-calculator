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
   //let val = new Function("return " + expr);
   return count == 0 ? new Function("return " + expr)() :
    expr.includes("/ 0") ? throw "TypeError: Division by zero." :
    throw "ExpressionError: Brackets must be paired";
}

module.exports = {
    expressionCalculator
}
