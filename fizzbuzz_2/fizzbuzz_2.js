// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// "fizz" instead of the number and for the multiples
// of five print "buzz". For numbers which are multiples
// of both three and five print "fizzbuzz".
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz
function fizzBuzz(n) {
  for (let n = 1; n <= 20; n++) {
    switch (true) {
      case n % 5 === 0 && n % 3 === 0:
        console.log('FizzBuzz');
        break;
      case n % 3 === 0:
        console.log('Fizz');
        break;
      case n % 5 === 0:
        console.log('Buzz');
        break;
      default:
        console.log(n);
        break;
    }
  }
}

fizzBuzz(15);
