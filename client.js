console.log('js sourced');
var count = 1;

$(document).ready(function(){

  $('.generate').on('click', createRedDiv);
  $('#swap').on('click', swapcolor);

}); //end of ready function

//  Need to add code to add to the count in added divs
function createRedDiv() {
    $('.redDiv').empty();
    $('.container').append('<div class="redDiv"></div>');
    //$('p').empty();
    $('.redDiv').append('<p> ' + count + ' </p>');
    //$('p').append(count +1); 
    $('.redDiv').append('<button id="swap">swap</button>');
    $('.redDiv').append('<button id="delete">delete</button>');
} // end of createRedDiv function

//swap color from red to yellow
function swapColor() {
    $(this).css('background-color', 'yellow');
    //$('.redDiv').css('backgroung-color', yellow);

}


//delete div and all it's contents
function divDelete() {
  $('.redDiv').remove();
}
