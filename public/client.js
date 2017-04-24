console.log( 'js' );

$( document ).ready(docReady);

function docReady(){
  console.log( 'JQ' );
  $( '#addJokeButton' ).on( 'click', addJoke);
}// end doc ready

function addJoke(){
  console.log( 'addJokeButton on click');
}// end addJokeButton on click

function displayJokes() {
  console.log('displayJokes function');
}// end displayJokes on click
