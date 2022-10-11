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

document.getElementById("myButtonTwo").addEventListener("click", myFunctionOne);

function myFunctionOne(){
  var num = document.getElementById("num").value;
  num = parseFloat(num);
  
 let sum = 0;
  while (num >0){
    let rem = num % 10;
    sum=sum + rem;
    num = parseInt(num /10);
  }
  document.getElementById("outputSON").innerHTML = sum;
}

document.getElementById("buttonFour").addEventListener("click", fullName);

document.getElementById("nameButton").addEventListener("click",fullName);
function fullName(){
  let fName = document.getElementById("fName").value;
  let lName = document.getElementById("lName").value;
  let title = document.getElementById("titles").value;
  let suffix = document.getElementById("suffix").value;
  if(fName=="First Name" || lName=="Last Name"){
    alert("you havent entered anything for first or last name");
  }  
  if (title!="none" && suffix !="none"){
      document.getElementById("full name").innerHTML = title + " " + fName + " " + lName + " " + suffix;
  }else if (title=="none" && suffix =="none"){
      document.getElementById("full name").innerHTML = fName + " " + lName;
    }else if(title=="none"){
    document.getElementById("full name").innerHTML = fName + " " + lName + " " + suffix;
  }else if(suffix=="none"){
    document.getElementById("full name").innerHTML = title + " " + fName + " " + lName ;
  }
}

const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "T";
let running = false;

initializeGame();

function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex] != "" || !running){
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}
function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer(){
    currentPlayer = (currentPlayer == "T") ? "S" : "T";
    statusText.textContent = `${currentPlayer}'s turn`;
}
function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        statusText.textContent = `${currentPlayer} wins!`;
        running = false;
    }
    else if(!options.includes("")){
        statusText.textContent = `Draw!`;
        running = false;
    }
    else{
        changePlayer();
    }
}
function restartGame(){
    currentPlayer = "T";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}
