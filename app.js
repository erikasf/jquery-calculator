//get key s from the calculator html
var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;
//add onclick event to all the keys and perform operations
for (var i = 0; i<keys.length; i ++){
keys[i].onclick = funtion (e){
//get the input and button values
var input = document.querySelector('.screen');
var inputVal = input.innerHTML;
var btnVal = this.innerHTML;
//now just append the key values (btn values to the input sring and finally use javascripts
// eval function to get the result)
//if clear key is pressed, erase evertthing
if(btnVal == 'C'){
input.innerHTML = "";
decimalAdded = false
}
}//this is the closing tag for the nested loop
else if( btnVal == '=')
{
var equation = inputVal;
var lastChar = equation[equation.length-1];
//replace all instances of x and ÷ with * and / respectively.this can be done
// using regex and the 'g' tag which will replace all instances of the matched character/substring
equation = equation.replace(/x/g,'*').replace(/÷/g,'/');
//final thing left to do is checking the last character of the qualtion . if its an operaator or a decimal remove it.
if(operators.indexOf(lastChar)> -1 || lastChar =='.'){
equation = equation.replacer(/.$/,'.')
}
if (equation)
input.innerHTML = eval(equation);
decimalAdded = false;
}//closing tg for the it(else if)
};//closing for the for looop
//if eval key is pressed , calcualte and display the result
// Basic functionality of the calculator is complete. But there are some problems like
// 1. No two operators should be added consecutively.
//2.double operators pop up on the screen
else if(operators.indexOf(btnVal) > -1) {
// Operator is clicked
// Get the last character from the equation
var lastChar = inputVal[inputVal.length - 1];
// Only add operator if input is not empty and there is no operator at the last
if(inputVal != '' && operators.indexOf(lastChar) == -1)
input.innerHTML += btnVal;
// Allow minus if the string is empty
else if(inputVal == '' && btnVal == '-')
input.innerHTML += btnVal;
// Replace the last operator (if exists) with the newly pressed operator
if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
// Here, '.' matches any character while $ denotes the end of string, so anything (will be an operator in this case) at the end of string will get replaced by new operator
input.innerHTML = inputVal.replace(/.$/, btnVal);
}
decimalAdded =false;
}
// decimal added flag  clear key is pressed.
else if(btnVal == '.') {
if(!decimalAdded) {
input.innerHTML += btnVal;
decimalAdded = true;
}
}
// prevent page jumps
e.preventDefault();
} 
}
