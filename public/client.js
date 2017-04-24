console.log( 'js' );

$( document ).ready(docReady);

function docReady(){
  console.log( 'JQ' );
  $( '#addJokeButton' ).on( 'click', addJoke);
}// end doc ready

function addJoke(){
  console.log( 'addJokeButton on click');
  // -- your code here --
}// end addJokeButton on click

function getJokes(){
  console.log( 'getJokes function' );
}//

function displayJokes( allTheJokes ) {
  // this function receives an array of joke objects
  console.log('displayJokes function');
  // clear outputDiv
  var outputDiv = $( '#outputDiv' );
  outputDiv.empty();
  // loop through jokes
  for (var i = 0; i < allTheJokes.length; i++) {
    // display each joke in the output div on the DOM
    outputDiv.append( '<p>' + allTheJokes[i].jokeQuestion + '<p>' );
    outputDiv.append( '<p>' + allTheJokes[i].punchLine + '<p>' );
    outputDiv.append( '<p>~ <i>' + allTheJokes[i].whoseJoke + '</i><p>' );
}// end displayJokes
