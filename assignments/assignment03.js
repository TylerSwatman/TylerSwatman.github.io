
let gcd;


document.GetElementById("myButton").onclick = function(){

numberOne = document.getElementById("numberOne").value;
numberTwo = document.getElementById("numberTwo").value;


for (let i = 1; i <= numberOne && i <= numberTwo; i++) {

   
    if( numberOne % i == 0 && numberTwo % i == 0) {
        gcd = i;
      
    }
}
console.log("GCF of ${number1} and ${number2} is ${gcd}.");


