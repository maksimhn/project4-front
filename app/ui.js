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

$('#newevent-button').on('click', function(){
  $('#newexpense-modal').modal('hide');
});

$('#logout-button').on('click', function(){
  location.reload();
});
