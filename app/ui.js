$('#login-close').on('click', function(){
  $('#login-password').val();
});

$('#login-button').on('click', function(){
  $('#loginModal').modal('hide');
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

$('#logout-button').on('click', function(){
  location.reload();
});
