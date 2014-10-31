$(function() {
  $('.login-link').on('click', function(e) {
    e.preventDefault();
    if ($('.sign-up-form').css('display') !== 'none') {
      $('.sign-up-form').toggle();
    };
    $('.login-form form')[0].reset();
    $('.login-form').toggle();
  });

  $('.login-form form').on('submit', function(e) {
    e.preventDefault();
    var form = $('.login-form form');
    var data = form.serialize();
    $.ajax({
      url: "/log_in",
      type: "POST",
      dataType: "html",
      data: data,
      success: function(response) {
        console.log(response);
        // $('header').html(response);
      },
      });
  });

  $('.sign-up-link').on('click', function(e){
    e.preventDefault();
    if ($('.login-form').css('display') !== 'none') {
      $('.login-form').toggle();
    };
    $('.sign-up-form form')[0].reset();
    $('.sign-up-form').toggle();
  });

  $('.sign-up-form form').on('submit', function(e) {
    e.preventDefault();
    var form = $('.sign-up-form form');
    var data = form.serialize();
    console.log(data);
    $.ajax({
      url: "/users",
      type: "POST",
      dataType: "html",
      data: data,
      success: function(response) {
        console.log(response);
        // $('header').html(response);
      },
      });
  });


});
