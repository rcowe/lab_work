const express = require('express');
const app = express();
const PORT = 3000;
const methodOverride = require('method-override'); // allow us to override an HTTP Method.

// middleware
app.use(express.urlencoded({ extended: false })); // bodyParser Middleware need this for new, edit, update, and create to work

app.set('view engine', 'jsx'); // creating a view engine and the name for it is jsx

app.engine('jsx', require('express-react-views').createEngine()); // the way this engine is going to behave. from require to create engine, we are grabbing data from a library. it gives thje ability to read a jsx file and render it for us

app.use(methodOverride('_method')); // IT HAS TO GO AFTER BODYPARSER middleware

// data

const data = [
  {
    name: 'carrots',
    color: 'orange',
  },
  {
    name: 'celery',
    color: 'green',
  },
  {
    name: 'lettuce',
    color: 'green',
  },
];

/* Restful Routes */
// FULL CRUD: Create, Read, Update, Destroy

// INDEX

app.get('/vegetables', (req, res) => {
  res.status(200).render('Index', {
    vegetables: data,
  });
});

// NEW : CREATE display a form to the user that can accept data that we can transfer into our database

app.get('/vegetables/new', (req, res) => {
  res.status(200).render('New.jsx');
});

// DELETE : DESTROY abn individual item from the database

app.delete('/vegetables/:id', (req, res) => {
  // simplest way: filter out the item from the array and reassign the array
  // splice / slice remove from the list
  // can go to index and nullify the object at that index
  data.splice(req.params.id, 1);
  //   console.log(req.params.id);
  res.status(200).redirect('/vegetables');
});

// UPDATE : UPDATE processes the data from the form on the new page in order to prepare for delivery to the database

app.put('/vegetables/:id', (req, res) => {
  const currentItem = data[req.params.id];
  data.splice(req.params.id, 1, { ...currentItem, ...req.body });
  res.redirect('/vegetables');
});

// CREATE : CREATE processes the data from the form on the new page in order to prepare for delivery to the database

app.post('/vegetables', (req, res) => {
  data.push(req.body);
  res.redirect('/vegetables');
});

// EDIT : UPDATE displays a form to the user that allows the user to change information already present in the database

app.get('/vegetables/:id/edit', (req, res) => {
  const currentVegetable = data[req.params.id];
  res.status(200).render('Edit.jsx', {
    vegetable: currentVegetable,
    index: req.params.id,
  });
});

// SHOW : READ Allows us to look at an individual resource from the database

app.get('/vegetables/:id', (req, res) => {
  const currentVegetable = data[req.params.id];
  res.status(200).render('Show.jsx', {
    vegetable: currentVegetable,
    index: req.params.id,
  });
});

// the purpose of restful routes is to provide/share data with a user in a predictable way

// 'special' or specific routes must go before the below 'catch-all'
// app.get('/marty', (req, res) => {
//   res.send('This request is special');
// });

// // a good use for when you want to send the user an error
// app.get('*', (req, res) => {
//   console.log(req.headers);
//   res.send('Hello World I am always here');
// });

app.listen(PORT, () => {
  console.log(`Saving the world on port ${PORT}`);
});
