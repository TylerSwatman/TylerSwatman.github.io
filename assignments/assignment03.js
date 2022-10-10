
let gcd;



document.getElementById("myButton").addEventListener("click", myFunction);
  
  function myFunction() {
var numberOne = document.getElementById("numberOne").value;
var numberTwo = document.getElementById("numberTwo").value;
numberOne = parseFloat(numberOne);
numberTwo = parseFloat(numberTwo);

for (let i = 1; i <= numberOne && i <= numberTwo; i++) {

   
    if( numberOne % i == 0 && numberTwo % i == 0) {
        gcd = i;
    }
}
   
       document.getElementById("outputGCD").innerHTML = gcd;
   
}
