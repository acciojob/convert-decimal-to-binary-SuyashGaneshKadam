function decimalToBinary(num) {
  // your code here
	let binary = ''; 
    while (num > 0) { 
        binary = (num % 2) + binary; 
        num = Math.floor(num / 2); 
    } 
    return binary; 
}
const num = parseInt(prompt("Enter a number."));
alert(decimalToBinary(num));
