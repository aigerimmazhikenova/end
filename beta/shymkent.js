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

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
