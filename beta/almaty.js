var audio = new Audio('audio.m4a');
var isPlaying = false;
function play() {
    isPlaying ? audio.pause() : audio.play();;
}
audio.onplaying = function() {
    isPlaying = true;
  };
audio.onpause = function() {
    isPlaying = false;
  };
$('.header__links').mouseenter(function(){
    $(this).css({
        'color':'#fcdf52'
    });
});
$('.header__links').mouseleave(function(){
    $(this).css({
        'color':'#fff'
    });
});
$(".header__links:eq(2)").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 900);
});


$('.as1').hide();
$('.as1').slideDown(1200);
$('.as2').hide();
$('.as2').slideDown(1200);

$('.astanaab').hide();
$('.astanaab').fadeIn(1200);
$('.astanaab2').hide();
$('.astanaab2').fadeIn(1200);

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

var slideIndex1 = 0;
showSlides1();

function showSlides1() {
  var i;
  var slides1 = document.getElementsByClassName("mySlides1");
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > slides1.length) {slideIndex1 = 1}
  slides1[slideIndex1-1].style.display = "block";
  setTimeout(showSlides1, 3000); // Change image every 3 seconds
}

$('.fab').mouseenter(function(){
    $(this).css({
        'color':'#f9c388',
    });
});
$('.fab').mouseleave(function(){
    $(this).css({
        'color':'#f38181',
    });
});
$('.subscribe__btn').mouseenter(function(){
    $(this).css({
        'background':'#f9c388',
    });
});
$('.subscribe__btn').mouseleave(function(){
    $(this).css({
        'background':'#f38181',
    });
});
$('.blogs__title').mouseenter(function(){
    $(this).css({
        'color':'#f38181',
        'text-decoration': 'underline',
    });
});
$('.blogs__title').mouseleave(function(){
    $(this).css({
        'color':'#000',
        'text-decoration': 'none',

    });
});
function validateEmail(email) {
    var pattern  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern .test(email);
  }
  
  function validate() {
    var $result = $("#result");
    var email = $("#email").val();
    $result.text("");
  
    if (validateEmail(email)) {
      alert("CONFIRMED.");
    } else {
      alert("INCORRECT EMAIL FORMAT!");
    }
    return false;
  }
  
  $("#validate").bind("click", validate);