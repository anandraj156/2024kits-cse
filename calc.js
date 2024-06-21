var num1 = "", num2 = "", op = "";

function calc(ch) {
    let box = document.getElementById("box").value;

    if (ch >= '0' && ch <= '9' || ch === '.') {
        // Append the digit or decimal point to the current value
        document.getElementById("box").value += ch;
    } else if (ch === '=') {
        // Store the second operand and evaluate the expression
        num2 = document.getElementById("box").value;
        let expr = num1 + op + num2;
        try {
            let res = eval(expr); // Evaluate the expression
            document.getElementById("box").value = res;
            // Reset the operands and operator for future calculations
            num1 = res;
            num2 = "";
            op = "";
        } catch (e) {
            document.getElementById("box").value = "Error";
        }
    } else if (ch.toLowerCase() === 'c') {
        // Clear the input and reset the operands and operator
        num1 = "";
        num2 = "";
        op = "";
        document.getElementById("box").value = "";
    } else {
        // Store the first operand and the operator
        num1 = document.getElementById("box").value;
        op = ch;
        document.getElementById("box").value = "";
    }
}
