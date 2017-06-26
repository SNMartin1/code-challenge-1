console.log('js sourced');

$(document).ready(function (){
  $('.generate').on('click', function(){
    $('.container').append('<div class="redDiv"></div>');
    $('.redDiv').append('<p>1</p>');
    $('.redDiv').append('<button>swap</button>');
    $('.redDiv').append('<button>delete</button>');
  });
});
