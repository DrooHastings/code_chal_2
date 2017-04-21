// requires
var express = require( 'express' );
var path = require( 'path' );
var bodyParser = require( 'body-parser' );

// create the app
var app = express();

// uses bodyParser
app.use( bodyParser.urlencoded({ extended: true }));
app.use( express.static( 'server/public/' ) );

// existing joke data
var jokes = [
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs"
  },
  {
    whoseJoke: "Huck",
    jokeQuestion: "What's the difference between roast beef and pea soup?",
    punchLine: "Anyone can roast beef."
  }
];

// serve base url
app.get( '/', function( req, res ){
  // base url
  console.log( 'base url hit' );
  res.sendFile( path.resolve( 'server/public/views/index.html' ) );
}); // end base url

// server listeing on port 3000
app.listen( 3000, function(){
  console.log( 'server up on port 3000' );
}); // end spin up server
