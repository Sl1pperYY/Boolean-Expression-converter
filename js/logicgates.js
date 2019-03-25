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
