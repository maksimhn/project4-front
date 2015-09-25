$('#login-close').on('click', function(){
  $('#login-password').val();
  mobileModeSlide();
});

$('#login-button').on('click', function(){
  $('#loginModal').modal('hide');
  $("#donutgraphdiv, #expensesgraphdiv, #gasgraphdiv").height("390");
  $('#gears').css('visibility', 'visible');
});

$('#register-button').on('click', function(){
  $('#registerModal').modal('hide');
  $('#gears').css('visibility', 'visible');
});

$('#register-close').on('click', function(){
  mobileModeSlide();
});

$('#loginModal').on('hidden.bs.modal', function () {
    mobileModeSlide();
});

$('#registerModal').on('hidden.bs.modal', function () {
    mobileModeSlide();
});

$('#loginModal').on('hidden', function () {
  $('body').off('click');
});

$('#registerModal').on('hidden', function () {
  $('body').off('click');
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

var $height = $('#carpicture-div').prop('margin-top');

$(function() {
  $('.navbar-toggle, #how-button').on('click', function() {
    mobileModeSlide();
  });
});

function doSmth(){
  $(this).addClass('active');
  return false
}

// pushes down body when navbar is toggled to mobile version
var mobileModeSlide = function (){
  if ($(window).width() < 768) {
    if ($('#carpicture-div').css('padding-top') < '10px') {
      $('#carpicture-div').css('padding-top', '+=200');
    } else {
      $('#carpicture-div').css('padding-top', '0px');
    }
  }
};

