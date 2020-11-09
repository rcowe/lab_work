for (let i = 1; i <= 100; i++) {
  //console.log('This is all the numbers '+ i)
  if (i % 15 === 0) {
    // If a number is divisible by 15 with no remainder print FizzBuzz
    console.log(i, 'FizzBuzz');
  } else if (i % 5 === 0) {
    // If a number is divisible by 5 with no remainder print Buzz
    console.log(i, 'Buzz');
  } else if (i % 3 === 0) {
    // If a number is divisible by 3 with no remainder print Fizz
    console.log(i, 'Fizz');
  } else console.log(i); // if the above is not applicable print the number between 1 - 100
}
