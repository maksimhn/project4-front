$('#login-close').on('click', function(){
  $('#login-password').val();
});

$('#login-button').on('click', function(){
  $('#login-button').text("");
  $('#login-button').append('<span class="glyphicon glyphicon-refresh spinning"></span>Loading...');
  window.setTimeout(function(){
     $('#loginModal').modal('hide');
  }, 4600);
});

$('#register-button').on('click', function(){
  $('#registerModal').modal('hide');
});

$('#newcar-button').on('click', function(){
  $('#carModal').modal('hide');
});

$('#newevent-button').on('click', function(){
  $('#new-event-modal').modal('hide');
});

$('#newexpense-button').on('click', function(){
  $('#new-expense-modal').modal('hide');
});

$('#updatecar-button').on('click', function(){
  $('#updateCarModal').modal('hide');
});

$('#updateexpense-button').on('click', function(){
  $('#update-expense-modal').modal('hide');
});

$('#deleteexpense-button').on('click', function(){
  $('#update-expense-modal').modal('hide');
});

$('#updateevent-button').on('click', function(){
  $('#update-event-modal').modal('hide');
});

$('#deleteevent-button').on('click', function(){
  $('#update-event-modal').modal('hide');
});

$('#logo-text').on('click', function(){
  location.reload();
});

$('#logout-button').on('click', function(){
  location.reload();
});

$(function () {
    $('#newdatetimepicker').datetimepicker();
});

$(function () {
    $('#updatedatetimepicker').datetimepicker();
});

$(function () {
    $('#expense-newdatetimepicker').datetimepicker();
});

$(function () {
    $('#expense-updatedatetimepicker').datetimepicker();
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

// $('#periodsbutton').on('click', function(){

// });



// $('.periodlinks').on('click', function(event){
//   $('.glyphicon-ok').addClass('hidden');
//   event.preventDefault();
//   // return false;
//   // $('.periodlinks > .glyphicon-ok').hide();
//   // $(this).children().show();
//   // $(this).hide();
//   // $('.glyphicon-ok').addClass('hidden');
//   // $(this).children().removeClass('hidden');
// });

function doSmth(){
  $(this).addClass('active');
  // your code here
  return false
}
