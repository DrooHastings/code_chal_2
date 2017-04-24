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

function displayJokes() {
  console.log('displayJokes function');
  // -- your code here --
}// end displayJokes on click
