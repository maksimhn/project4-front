$('#login-close').on('click', function(){
  $('#login-password').val();
  mobileModeSlide();
});

$('#login-button').on('click', function(){
  $('#login-button').text("");
  $('#login-button').append('<span class="glyphicon glyphicon-refresh spinning"></span>Loading...');
  window.setTimeout(function(){
     $('#loginModal').modal('hide');
  }, 4600);
  // mobileModeSlide();
  $("#donutgraphdiv, #expensesgraphdiv, #gasgraphdiv").height("390");
});

$('#register-button').on('click', function(){
  $('#registerModal').modal('hide');
  // mobileModeSlide();
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

// $('.navbar-toggle').on('click', function(){
//   if ($('#carpicture-div').prop('margin-top') === '200px') {
//     $('#carpicture-div').css('margin-top', '0px');
//   } else {
//     $('#carpicture-div').css('margin-top', '200px');
//   }
// });
// margin-top: 200px;

$(function() {
  $('.navbar-toggle').on('click', function() {
    mobileModeSlide();
  });
});

function doSmth(){
  $(this).addClass('active');
  // your code here
  return false
}

var mobileModeSlide = function (){
  if ($(window).width() < 768) {
    if ($('#carpicture-div').css('padding-top') < '10px') {
      $('#carpicture-div').css('padding-top', '+=200');
    } else {
      $('#carpicture-div').css('padding-top', '0px');
    }
  }
};
