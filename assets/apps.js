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

$("button").on("click", function (event) {
  event.preventDefault();

  // make variables to hold user inputs
  var trainName = $("#trainName").val().trim();
  var destiny = $("#destination").val().trim();
  var firstTrain = $("#firstTrain").val().trim();
  var freq = $("#frequency").val().trim();

  var newTrainObj = {
    trainName: trainName,
    destiny: destiny,
    firstTrain: firstTrain,
    freq: freq
  }

  // Push train values(user inputs) to database
  database.ref().push(newTrainObj);

  // clear values of train inputs 
  $("#trainName").val("");
  $("#destination").val("");
  $("#firstTrain").val("");
  $("#frequency").val("");
});
database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

  // create local variables to hold the values from the snapshot 
  var trainName = childSnapshot.val().trainName;
  var destiny = childSnapshot.val().destiny;
  var firstTrain = childSnapshot.val().firstTrain;
  var freq = childSnapshot.val().freq;

  // console.log snapshot vars vals 
  console.log(trainName);
  console.log(destiny);
  console.log(firstTrain);
  console.log(freq);


});
// I'll need some moments js action for when the next train will arrive
// train name, destination, and frequency will be constants
//submit button will need s click function where val()'s will be sent to the database and also display them in the html 
// variables for everything 