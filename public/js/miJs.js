

$( document ).ready(function() {
  var $selectorOnePage = $('#pagepiling');
  sum = 2;

  if ( $selectorOnePage.length > 0 ) {
    /*ONE PAGE SCROLL*/
    homeScrolling();
    $('body').css('overflow', 'hidden');
  }

  scrollBlog()
  scrollPost()
  blog()
});


function homeAnimacion(){
  jQuery('.conocenos').addClass("visible animated bounceInUp");
  jQuery('.home-contenido h1').addClass("visible animated bounceInLeft");
  setTimeout(function(){
      jQuery('.conocenos').removeClass('bounceInUp')
      jQuery('.conocenos').addClass('infinite bounce');
      jQuery('.home-contenido h4').addClass("visible animated bounceInRight");
  },1000);
}
  /*ANIMACION SERVICIOS */
function serviciosAnimacion(){

}

function contactoAnimacion(){
  $("nav").css({"background-color":"rgba(0, 188, 212,0.7)", "transition-duration":"0.7s", 'box-shadow':'0px 5px 30px 0px rgba(0,0,0,0.75)'});
  jQuery('.contacto-formulario').addClass('visible animated bounceInLeft');
  jQuery('.contacto-datos').addClass('visible animated bounceInRight');

  setTimeout(function(){
    $('#ic-facebook').addClass('visible animated bounceInRight');
  },1000);
  setTimeout(function(){
    $('#ic-instagram').addClass('visible animated bounceInRight');
  },1500);
  setTimeout(function(){
    $('#ic-linkedin').addClass('visible animated bounceInRight');
  },2000);
  setTimeout(function(){
    $('#ic-twitter').addClass('visible animated bounceInRight');
  },2500);

    $('#ic-facebook').hover(
    function () {
      $(this).addClass('bounce');
    },
    function () {
      $(this).removeClass('bounce');
    }
    );

    $('#ic-linkedin').hover(
    function () {
      $(this).addClass('bounce');
    },
    function () {
      $(this).removeClass('bounce');
    }
    );

    $('#ic-instagram').hover(
    function () {
      $(this).addClass('bounce');
    },
    function () {
      $(this).removeClass('bounce');
    }
    );

    $('#ic-twitter').hover(
    function () {
      $(this).addClass('bounce');
    },
    function () {
      $(this).removeClass('bounce');
    }
    );
}

function homeScrolling() {
  $('#pagepiling').pagepiling({
    menu: null,
         direction: 'vertical',
         verticalCentered: true,
         sectionsColor: [],
         anchors: [],
         scrollingSpeed: 700,
         easing: 'swing',
         loopBottom: false,
         loopTop: false,
         css3: true,
         navigation: false,
         normalScrollElements: null,
         normalScrollElementTouchThreshold: 5,
         touchSensitivity: 5,
         keyboardScrolling: true,
         sectionSelector: '.section',
         animateAnchor: true,

     //events
     onLeave: function(index, nextIndex, direction){
        $('.section').css({'box-shadow':'0px 11px 27px 1px rgba(0,0,0,0.75)'});
     },
     afterLoad: function(anchorLink, index){
       if (index == 1) {
         $("nav").css({"background-color":"rgba(192,192,192, 0)", "transition-duration":"0.7s", 'box-shadow':'none'});
       } else if(index == 2){
            serviciosAnimacion();
       } else if(index == 4){
            contactoAnimacion();
         }else {
           $("nav").css({"background-color":"rgb(43, 44, 45)", "transition-duration":"0.7s", 'box-shadow':'0px 5px 30px 0px rgba(0,0,0,0.75)'});
           $("nav a").css({"color":"#FFF"});
         }
         $('.section').css('box-shadow', 'none');
     },
     afterRender: function(){
        homeAnimacion();
     },
   });
}

function blog(){
  $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );
  $('.posts-child').hover(function() {
    $(this).removeClass('sombra1');
    $(this).addClass('sombra2')
  }, function() {
    $(this).removeClass('sombra2');
    $(this).addClass('sombra1')
  });
}

function scrollBlog() {
  $(document).scroll(function(){
  	var scrollPos = $(this).scrollTop();
  	$('.blog-header-content h4').css({
  	  'top' : (scrollPos/3)+'px',
  	  'opacity' : 1-(scrollPos/250)
  	});
    $('.blog-header-content h6').css({
  	  'top' : (scrollPos/3)+'px',
  	  'opacity' : 1-(scrollPos/250)
  	});
  });
}

function scrollPost() {
  var header = $('.post-header');
  var range = 200;

  $(window).on('scroll', function () {

    var scrollTop = $(this).scrollTop(),
        height = header.outerHeight(),
        offset = height / 2,
        calc = 1 - (scrollTop - offset + range) / range;

    header.css({ 'opacity': calc });

    if (calc > '1') {
      header.css({ 'opacity': 1 });
    } else if ( calc < '0' ) {
      header.css({ 'opacity': 0 });
    }

  });
}

function experiencia(){



}
