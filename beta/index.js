     
$("a.header__links").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 900);
});
$(".wrap__btn").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 900);
});

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

$('.wrap__btn').mouseenter(function(){
    $(this).css({
        'background':'#fff',
        'color':'#000'
    });
});
$('.wrap__btn').mouseleave(function(){
    $(this).css({
        'background':'none',
        'color':'#fff'
    });
});
$('.wrap__btn1').mouseenter(function(){
    $(this).css({
        'background':'#fff',
        'color':'#000'
    });
});
$('.wrap__btn1').mouseleave(function(){
    $(this).css({
        'background':'none',
        'color':'#fff'
    });
});


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
$('.prev').click(function(){
    var slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slides[slideIndex-1].style.display = "block";
    }
});
$('.next').click(function(){
    var slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slides[slideIndex+1].style.display = "block";
    }
});
$('.prev').mouseenter(function(){
    $(this).css({
        'background':'#000',
        'color':'#fff'
    });
});
$('.prev').mouseleave(function(){
    $(this).css({
        'background':'none',
        'color':'#fff'
    });
});
$('.next').mouseenter(function(){
    $(this).css({
        'background':'#000',
        'color':'#fff'
    });
});
$('.next').mouseleave(function(){
    $(this).css({
        'background':'none',
        'color':'#fff'
    });
});
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