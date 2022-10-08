function gcd_two_numbers(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

console.log(gcd_two_numbers(12, 13));
console.log(gcd_two_numbers(9, 3));

function add_two_digits(n)
   {
      return n % 10 + Math.floor(n / 10);
   }
console.log(add_two_digits(25))
console.log(add_two_digits(50))
