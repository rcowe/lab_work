
const arrayList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function even_array(array) {
  let evens = 0;
  for (let i = 0; i < array.length; i++)
    if (i % 2 === 0) {
      evens = evens + i;
    }
  console.log(evens, "Total Evens");
}

even_array(arrayList);



// const quotes = [
//     'quote1',
//     'quote2',
//     'quote3'
// ]

// const randomThings = [1, 10, "Hello", true]
// /*

// 1. How do you access the 1st element in the array?

// 2. Change the value of "Hello" to "World".

// 3. Check the value of the array to make sure it updated the array.
// */

// //1
// console.log(randomThings[0]);

// //2
// randomThings[2] = 'World';
// console.log(randomThings[2]);