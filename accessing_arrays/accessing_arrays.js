////////////////////////////////
// Easy Going
////////////////////////////////

for (let i = 1; i <= 20; i++) console.log('Loop that logs these numbers ' + i);

////////////////////////////////
// Get Even
////////////////////////////////

for (let i = 0; i <= 200; i++) {
  if (i % 2 === 0) {
    console.log('This is all the evens ' + i);
  }
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////

const wolfy = ['Wolfy', 'wolf', 16, 'Yukon Territory'];
const sharky = ['Sharky', 'shark', 20, 'Left Coast'];
const plantee = ['Plantee', 'plant', 5000, 'Mordor'];
const porgee = ['Porgee', 'Porg', 186, 'Ahch-To'];
const dart = ["D'Art", 'Demogorgan Dog', 2, 'Upside Down'];

plantee[2] = 5001; // accessing plantee's age and reassigning 5001
console.log(plantee); // print the entire array

wolfy[3] = 'Gotham City'; // accessing 3rd item in array and reassigning to Gotham City
console.log(wolfy[3]); // print the 3rd item in array

dart.push = 'Hawkins';
console.log(dart);

wolfy[0] = 'Gameboy';
console.log(wolfy);

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

const ninja_turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

for (let i of ninja_turtles) {
  console.log(i.toUpperCase());
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////

const favMovies = [
  'Jaws',
  'The Fellowship of the Ring',
  "Howl's Moving Castle",
  'Django Unchained',
  'Cloud Atlas',
  'The Usual Suspects',
  'Toy Story',
  'Conan the Barbarian',
  'Titanic',
  'Harry Potter',
  'Fried Green Tomatoes',
  'Volver',
  'Oculus',
  'Seven',
  'Black Panther',
  'Harry Potter',
  'Imitation of Life',
  'Snatch',
  'Fast and Furious',
];

//console log the index of titanic

favMovies.indexOf('Titanic');
console.log(favMovies.length, 'Printing the index of Titanic');

// 1. Sort

favMovies.sort(); // sorts alphabetically
console.log(favMovies, 'Printing the array alphabetically');

// 2. .pop

favMovies.pop(); // removes Volver
console.log(favMovies, 'This removes Volver');

// 3. .push

favMovies.push('Guardians of the Galaxy');
console.log(favMovies, 'This pushes GOTG');

// 4. .reverse

favMovies.reverse();
console.log(favMovies, 'This reverses the array');

// 5. .shift

favMovies.shift();
console.log(favMovies, 'This shifts the array');

// 6. .unshift

favMovies.unshift();
console.log(favMovies, 'This unshifts the array'); // This returns 14.. I believed this was to add elements to the front of an array

// 7. .splice

console.log(favMovies.indexOf('Django Unchained'));
console.log(favMovies.splice(3, 1, 'Avatar')); // Inserting 'Avatar' at index 1. Not too clear on the 1 here. I see it works but the documentation doens't show why i need the '1'.
console.log(favMovies, 'This splices the array, adding Avatar');
//This permanently changed the array because it removed 'Django Unchained'

// 8. slice &&  9. store the value of your slice

let newFavMovies = favMovies.slice(10);
console.log(newFavMovies, 'This slices the array and stores it');

// 10. console.log final results

console.log(favMovies, 'This prints the top half of the array');
console.log(newFavMovies, 'This prints the new stored half');

////////////////////////////////
// Where is Waldo
////////////////////////////////

const whereIsWaldo = [
  ['Timmy', 'Frank'],
  'Eggbert',
  ['Lucinda', 'Jacc', 'Neff', 'Snoop'],
  ['Petunia', ['Baked Goods', 'Waldo']],
];

// Remove Eggbert
console.log(whereIsWaldo.indexOf(['Eggbert']));
console.log(whereIsWaldo.splice(1, 1), 'Removing Eggbert');
console.log(whereIsWaldo, 'Printing without Eggbert');

// Change "Neff" to "No One"
console.log(whereIsWaldo[1].splice(2, 1, 'No One'), 'Replacing the two');
console.log(whereIsWaldo, 'Printing with No one');

// Access and console.log "Waldo"

console.log(whereIsWaldo[2].indexOf('Waldo'));
console.log(whereIsWaldo[2][1][1], 'Is here!');

////////////////////////////////
//  Excited Kitten
////////////////////////////////

const kittenWords = [
  'Love me, pet me! HSSSSSS!',
  '...human...why you taking pictures of me?...',
  '...the catnip made me do it...',
  '...why does the red dot always get away...',
];

let meow = 0;
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    meow = Math.floor(Math.random() * 3);
    console.log(kittenWords[meow]);
  } else console.log('Love me, pet me! HSSSSSS!');
}

////////////////////////////////
//  Find the Median
////////////////////////////////

const nums = [
  14,
  11,
  16,
  15,
  13,
  16,
  15,
  17,
  19,
  11,
  12,
  14,
  19,
  11,
  15,
  17,
  11,
  18,
  12,
  17,
  12,
  71,
  18,
  15,
  12,
];

nums.sort();
console.log(nums);

console.log(nums[Math.ceil(nums.length / 2)]);
