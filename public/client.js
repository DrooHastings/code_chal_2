console.log( 'js' );

$( document ).ready(docReady);

function docReady(){
  console.log( 'JQ' );
  $( '#addJokeButton' ).on( 'click', addJoke);

  getJokes();
}// end doc ready

function addJoke(){
  console.log( 'addJokeButton on click');
  // -- your code here --
  var objectToSend = {
    whoseJoke: $('#whoseJokeIn').val(),
    jokeQuestion: $('#questionIn').val(),
    punchLine: $('#punchlineIn').val()
    
  }; //end objectToSend
    $.ajax({
      type: 'POST',
      url: '/addJoke',
      data: objectToSend,
      success: function (response){

        getJokes();
      }//end success
    });//end ajax
}// end addJokeButton on click

function getJokes(){
  console.log( 'getJokes function' );
  // - your code here --
  $.ajax({
    type: 'GET',
    url: '/getJokes',
    success: function (response){
      // console.log('in success', response);
      console.log(response);
      displayJokes(response.allJokes);
    }//end success
  });//end ajax get
}//end getJokes

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
  }// end for loop
}// end displayJokes
