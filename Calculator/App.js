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

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (key >= "0" && key <= "9") {
    appendToDisplay(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    appendToDisplay(key);
  } else if (key === "." || key === ",") {
    appendToDisplay(".");
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    deleteLastChar();
  }
});
