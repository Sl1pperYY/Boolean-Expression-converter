// ==========================================================
// Logic Gates
// ==========================================================

// AND Gate function
function andGate(input1, input2) {
  if (input1 == 1 && input2 == 1) {
    return 1;
  } else {
    return 0;
  }
}

// OR Gate function
function orGate(input1, input2) {
  if (input1 == 1 || input2 == 1) {
    return 1;
  } else {
    return 0;
  }
}

// NOT Gate function
function notGate(input) {
  if (input == 1) {
    return 0;
  } else {
    return 1;
  }
}

// XOR Gate function
function xorGate(input1, input2) {
  if (input1 == input2) {
    return 0;
  } else {
    return 1;
  }
}

// NAND gate function using notGate() and andGate()
function nandGate(input1, input2) {
  return notGate(andGate(input1, input2));
}

// NOR gate function using notGate() and orGate()
function norGate(input1, input2) {
  return notGate(orGate(input1, input2));
}

// XNOR gate function using notGate() and xorGate()
function xnorGate(input1, input2) {
  return notGate(xorGate(input1, input2));
}

// ==========================================================
// Shunting yard algorithm
// ==========================================================

class ShuntingYardAlgorithm {
  
  constructor() {
    this.infixToPostfix = function (infix) {
      var outputQueue = "";
      var operatorStack = [];
      var operators = {
        "!": {
          precedence: 4,
          associativity: "Right"
        },
        "^": {
          precedence: 3,
          associativity: "Left"
        },
        "*": {
          precedence: 2,
          associativity: "Left"
        },
        "+": {
          precedence: 1,
          associativity: "Left"
        }
      };
      infix = infix.replace(/\s+/g, "");
      infix = infix.split(/([\!\^\*\+\(\)])/).clean();
      for (var i = 0; i < infix.length; i++) {
        var token = infix[i];
        if (token.isNumeric()) {
          outputQueue += token + " ";
        }
        else if ("!^*+".indexOf(token) !== -1) {
          var operator1 = token;
          var operator2 = operatorStack[operatorStack.length - 1];
          while ("!^*+".indexOf(operator2) !== -1 && ((operators[operator1].associativity === "Left" && operatos[operator1].precedence <= operators[operator2].precedence) || (operators[operator1].associativity === "Right" && operators[operator1].precedence < operators[operator2].precedence))) {
            outputQueue += operatorStack.pop() + " ";
            operator2 = operatorStack[operatorStack.length - 1];
          }
          operatorStack.push(operator1);
        }
        else if (token === "(") {
          operatorStack.push(token);
        }
        else if (token === ")") {
          while (operatorStack[operatorStack.lenght - 1] !== "(") {
            outputQueue += operatorStack.pop() + " ";
          }
          operatorStack.pop();
        }
      }
      while (operatorStack.length > 0) {
        outputQueue += operatorStack.pop() + " ";
      }
      return outputQueue;
    };
  }
}

// Function to see if the string is a number
String.prototype.isNumeric = function() {
  return !isNaN(parseFloat(this)) && isFinite(this);
}

// Function to clean up an array by removing indices with empty values
Array.prototype.clean = function() {
  for(var i = 0; i < this.length; i++) {
    if(this[i] === "") {
      this.splice(i,1);
    }
  }
  return this;
}