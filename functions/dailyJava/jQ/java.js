$(document).ready(function(){

  $(document).on('click','.to-do-item',function(){//click is a dom event
    $(this).toggleClass('to-do-complete');//or .addClass
  });

  function addToDo(){

      var newToDo = $('.new-to-do').val();
      if(newToDo){
        $('.to-do-list').append('<li class ="to-do-item"> '+newToDo+'</li>');
        $('.new-to-do').val('');
        $('.new-to-do').focus();
      }
  }
      $('.add-to-do-button').on('click',function(){
        addToDo();
      });
      $(document).on('keydown',function(event) {
        if(event.keyCode==13)addToDo();
      });

      $('.remove-to-do-button').on('click',function(){
        //remove all to-do-complete
        $('.to-do-complete').hide();
      });





});
