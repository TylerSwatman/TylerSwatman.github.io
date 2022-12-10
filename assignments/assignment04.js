
let rand = (start, max) => (
  (Math.floor(Math.random() * (max-start)) + start)
)

let arr1 =[rand(100,1000),rand(100,1000),rand(100,1000),rand(100,1000),rand(100,1000),rand(100,1000),rand(100,1000),rand(100,1000),rand(100,1000),rand(100,1000)]

let arr2 = [rand(-200,200),rand(-200,200),rand(-200,200),rand(-200,200),rand(-200,200),rand(-200,200),rand(-200,200),rand(-200,200),rand(-200,200),rand(-200,200)]



                          
var years = [-100, 0, 100, 1900, 1904, 2000]

let r = [1, 4, 5, 7]

let distances = [2, 4, 6, 8, 10]

let Pythagorean = (x, y) => (
  (Math.sqrt((x*x)+(y*y)))
)

let quad = (a,b,c) => (
((-b(Math.sqrt(4*(a*c))))/2*a)
)

let sphereVol = (r) => (
  (4/3)*(Math.PI*(Math.pow(r,3)))
)//4/3πr3

let fToK = (f) => (
(((f-32)/1.8) +273.15)
)

let weird = (val) => (
Math.atan(Math.PI + val)
)

let sumNSq = (n) => (n+n*n)

function isLeapYear(year)  {
if((year%4 == 0) && (year%100 != 0) || (year%4 != 0) && (year%100 == 0) && (year%400 == 0) ){
  return true
}else{
  return false
}
}


function searchYear(){
  let sum
  let years = [-100, 0, 100, 1900, 1904, 2000]
  for(let i = 0; i< 6 ; i++){
   
    if(this.isLeapYear(years[i])){
      sum += years[i]
    }
  }
  return sum
}
let sum1 = searchYear()


let load = document.getElementById("loadjson")
  load.addEventListener("click", loadJson)
let prior = document.getElementById("loadpriorcountry")
  prior.addEventListener("click", loadPriorCountry);
let next =document.getElementById("loadnextcountry")
  next.addEventListener("click", loadNextCountry);

let country = 0
var json
function loadJson() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange 
    = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("coviddata").innerHTML 
            = "JSON data loaded.";
          json = JSON.parse(this.responseText);
        }
      };
  xhttp.open("GET", "https://api.covid19api.com/summary", true);
  xhttp.send();
}

function loadPriorCountry () {
  country--
  if (country < 0) 
    country = 0
  document.getElementById("coviddata").innerHTML 
            = json.Countries[country].Country
            + ", " 
            + json.Countries[country].TotalDeaths
}

function loadNextCountry () {
  country++
  if (country > json.Countries.length - 1) 
    country = json.Countries.length - 1
  document.getElementById("coviddata").innerHTML 
            = json.Countries[country].Country
            + ", " 
            + json.Countries[country].TotalDeaths
}

let people = [
  {fname: "Jane", lname: "Doe", title: "Dr.", suffix: "IV", age: 22}, 
  {fname: "John", lname: "Doe", title: "Mr.", suffix: "Jr.", age: 18}, 
  {fname: "Sally", lname: "Jenkins", title: "Mrs.", suffix: "", age: 20}, 
  {fname: "Gino", lname: "Vitteri", title: "", suffix: "", age: 16}, 
  {fname: "Lisa", lname: "Simpson", title: "", suffix: "", age: 12}, 
]
function q (e) {return e.fname}

people
  .filter(obj => obj.age < 18)
  .map(obj => 18 - obj.age)
  .reduce((acc,cv) => acc + cv)
