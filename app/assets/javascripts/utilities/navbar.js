//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets

var my_affix;
var nav_active;

my_affix = function() {
  $('#nav').affix({
    offset: {
      top: 70
    }
  });

  /* highlight the top nav as scrolling occurs */
  //$('body').scrollspy({ target: '#nav' })

  /* smooth scrolling for scroll to top */
  //$('.scroll-top').click(function(){
    //$('body,html').animate({scrollTop:0},1000);
  //})

  /* smooth scrolling for nav sections */
  //$('#nav .navbar-nav li>a').click(function(){
    //var link = $(this).attr('href');
    //var posi = $(link).offset().top();
    //$('body,html').animate({scrollTop:posi},700);
  //});
};

nav_active = function() {
  var url = window.location;

  $("#nav .navbar-nav").find(".active").removeClass("active");
  $('ul.nav a').filter(function() {
      return this.href == url;
  }).parent().addClass('active');
};


$(document).ready(my_affix);
$(document).ready(nav_active);

$(document).on('page:load', my_affix);
$(document).on('page:load', nav_active);

