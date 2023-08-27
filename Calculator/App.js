let displayValue = "0";

function clearDisplay() {
  displayValue = "0";
  updateDisplay();
}

function appendToDisplay(val) {
  if (displayValue === "0") {
    displayValue = val;
  } else {
    displayValue += val;
  }
  updateDisplay();
}

function deleteLastChar() {
  if (displayValue.length > 0) {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
  }
}

function calculateResult() {
  try {
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = "Error";
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").value = displayValue;
}
