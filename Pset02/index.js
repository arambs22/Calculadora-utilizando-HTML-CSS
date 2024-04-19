let fullOperation = '';
let result = '';
let prevCalc = [];

function pressbutton(number) {
  console.log(number);
  fullOperation = fullOperation + number;
  showNumber();
}

function erase() {
    fullOperation = '';
    showNumber();
}

function pressOperation(op) {
  console.log(op);
  let [operando1, operador, operando2] = fullOperation.toString().split(/(\+|-|\x|\^|\/)/);
  if (operador) return;
  fullOperation = fullOperation + op;
  showNumber();
}

function calculateResult() {
  const values = fullOperation.split(/(\+|-|\x|\^|\/)/);

  console.log(values);
  let [number1, operador, number2] = fullOperation.split(/(\+|-|\x|\^|\/)/);

  console.log(number1);
  console.log(number2);
  console.log(operador);

  number1 = parseFloat(number1);
  number2 = parseFloat(number2);

  switch (operador) {
    case 'x':
        fullOperation = multiplication(number1, number2);
    break;
    case '/':
        fullOperation = division(number1,number2);
    break;
    case '-':
        fullOperation = substraction(number1,number2);
    break;
    case '^':
        fullOperation = power(number1,number2);
    break;
    case '+':
        fullOperation = addition(number1, number2);
    break;
    default:
      break;
  }

  prevCalc.push(fullOperation);

  showNumber();
  showPreviousResults()
}

function multiplication(number1, number2) {
  return number1 * number2;
}

function division(number1, number2) {
    return number1 / number2;
}

function substraction(number1, number2) {
    return number1 - number2;
}

function power(number1, number2) {
    return Math.pow(number1, number2)
}

function addition(number1, number2) {
    return number1 + number2;
}

function showNumber() {
  document.getElementById('screen').innerHTML = fullOperation;
}

function showPreviousResults() {
  const prevResultsList = document.getElementById('prevres');
  prevResultsList.innerHTML = '';
  prevCalc.forEach(result => {
    const listItem = document.createElement('li');
    listItem.textContent = result;
    prevResultsList.appendChild(listItem);
  });
}

function erase() {
  fullOperation = '';
  showNumber();
}

function prevResults() {
  showPreviousResults();
}

showNumber();
showPreviousResults();