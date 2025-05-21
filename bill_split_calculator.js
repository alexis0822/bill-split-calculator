/**
 * Bill Split Calculator  
 * Created by Alexis Negrón López  
 *  
 * A simple JavaScript program that calculates the total bill (including tip) and splits it evenly among a specified number of people.  
 *  
 * Features:  
 * - Calculates tip amount based on a given percentage  
 * - Computes the total bill (original amount + tip)  
 * - Splits the total evenly among multiple people (if applicable)  
 * - Outputs results in a readable format  
 */

document.getElementById("billForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page reload

// Declaration of variables
const billAmount = parseFloat(document.getElementById("billAmount").value);
const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
const numPeople = parseInt(document.getElementById("numPeople").value);

// Validate inputs
if (isNaN(billAmount) || isNaN(tipPercentage) || isNaN(numPeople) || 
billAmount <= 0 || tipPercentage < 0 || numPeople < 1) {
alert("Please enter valid numbers (Bill > 0, Tip ≥ 0, People ≥ 1)");
return;
}

// Calculates the tip amount and total amount
let tipAmount = (tipPercentage / 100) * billAmount;
let totalAmount = ((billAmount + tipAmount).toFixed(2));

/*Calculate the amount per person by 
dividing the total amount by the number of people.*/
let split = ((totalAmount / numPeople).toFixed(2));

console.log(`Bill Split Calculator`);
console.log(`Total (including tip): $${totalAmount}`)
console.log(`Each person pays: $${split}`)

// Display result
const resultDiv = document.getElementById("result");
resultDiv.innerHTML = `
  <h3>✅ Your Results</h3>
  <p><strong>Total (including tip):</strong> $${totalAmount}</p>
  <p><strong>Each person pays:</strong> $${split}</p>
`;
resultDiv.style.display = "block"; 
});