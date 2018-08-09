// When adding trains, administrators should be able to submit the following:
// Train Name
// Destination 
// First Train Time -- in military time
// Frequency -- in minutes
// Code this app to calculate when the next train will arrive; this should be relative to the current time.
// Users from many different machines must be able to view same train times.
// Styling and theme are completely up to you. Get Creative!
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD68F7-1RrwAQJiT1xSERfEqFNbutwxItc",
    authDomain: "train-times-82453.firebaseapp.com",
    databaseURL: "https://train-times-82453.firebaseio.com",
    projectId: "train-times-82453",
    storageBucket: "train-times-82453.appspot.com",
    messagingSenderId: "242923079720"
  };
  firebase.initializeApp(config);
  
  var database = firebase.database();

  // I need the math thing for sure
  // train name, destination, and frequency will be constants
  //submit button will need s click function where val()'s will be sent to the database and also display them in the html 
  // variables for everything 
  