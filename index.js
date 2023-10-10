let currentInput = "";

function appendToDisplay(value) {
  if (value === "." && currentInput.includes(".")) {
      return;
  }
  if (value === "0" && currentInput === "0") {
      return;
  }
    
  currentInput += value;
  document.getElementById("display").value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  document.getElementById("display").value = "0";
}

function calculateResult() {
  try {
     const sanitizedInput = currentInput.replace(/[+\-*/]+$/, "");
     const result = eval(sanitizedInput);
     document.getElementById("display").value = result;
     currentInput = String(result);
  } catch (error) {
     document.getElementById("display").value = "Error";
     currentInput = "";
  }
}
