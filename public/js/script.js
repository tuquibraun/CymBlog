$(window).load(function() {
	//Preloader
	$('#status').delay(300).fadeOut();
	$('#preloader').delay(300).fadeOut('slow');
	$('body').delay(550).css({'overflow':'visible'});
})

$(document).ready(function() {

	/*=============================================
			VARIABLES
=============================================*/

var item = 0;
var itemPaginacion = $("#paginacion li");
var interrumpirCiclo = false;
var imgProducto = $(".imgProducto");
var titulos1 = $("#slide h1");
var titulos2 = $("#slide h2");
var titulos3 = $("#slide h3");
var btnVerProducto = $("#slide button");
var detenerIntervalo = false;
var toogle = false;

$("#slide ul li").css({"width":100/$("#slide ul li").length + "%"})
$("#slide ul").css({"width":$("#slide ul li").length*100 + "%"})


/*=============================================
PAGINACIÓN
=============================================*/

$("#paginacion li").click(function(){

	item = $(this).attr("item")-1;

	movimientoSlide(item);

})

/*=============================================
AVANZAR
=============================================*/

function avanzar(){

	if(item == $("#slide ul li").length -1){

		item = 0;

	}else{

		item++

	}

	movimientoSlide(item);

}

$("#slide #avanzar").click(function(){

	if (item == 0) {
		$("#cohete").removeClass('entrar');
		$("#cohete").addClass('salir')
		setTimeout(function () {
			avanzar();
		}, 2900);


	}



})

/*=============================================
RETROCEDER
=============================================*/

$("#slide #retroceder").click(function(){

	if (item == 1) {
		setTimeout(function () {
			$("#cohete").removeClass('salir');
			$("#cohete").addClass('entrar')
		}, 600);

	}

	if(item == 0){

		item = $("#slide ul li").length -1;

	}else{

		item--

	}

	movimientoSlide(item);

})

/*=============================================
MOVIMIENTO SLIDE
=============================================*/

function movimientoSlide(item){

	// http://easings.net/es

	$("#slide ul").animate({"left": item * -100 + "%"}, 1000)

	interrumpirCiclo = true;
}

/*=============================================
INTERVALO
=============================================

setInterval(function(){

	if(interrumpirCiclo){

		interrumpirCiclo = false;

	}else{

		if(!detenerIntervalo){

			avanzar();

		}

	}

},3000)*/

/*=============================================
APARECER FLECHAS
=============================================*/

$("#slide").mouseover(function(){

	$("#slide #retroceder").css({"opacity":1})
	$("#slide #avanzar").css({"opacity":1})

	detenerIntervalo = true;

})


$("#slide").mouseout(function(){

	$("#slide #retroceder").css({"opacity":0})
	$("#slide #avanzar").css({"opacity":0})

	detenerIntervalo = false;

})
/*
	var typewriter = new Typewriter(writer, {
	    loop: true,
			cursor: '_'
	});

	typewriter.pauseFor(1000)
	 .typeString('De tu mente a la web!')
	 .pauseFor(2500)
	 .deleteAll()
	 .typeString('Creamos aplicaciones web')
	 .pauseFor(2500)
	 .deleteChars(3)
	 .typeString('moviles')
	 .start();
*/
	$('.servicio-card').flip({
		trigger: 'manual'
	})

	servicios()
	blog()

		$('.carousel-info:first-child').siblings().css('display', 'none');
		homeAnimacion();

		var owl = $("#owl-carousel");
		// OwlCarousel N2
		owl.owlCarousel({
			  singleItem:true,
				items: 1,
				nav:true,
				navText: ["<span class='glyphicon glyphicon-menu-left' aria-hidden='true'></span>","<span class='glyphicon glyphicon-menu-right' aria-hidden='true'></span>"]
		});
	owl.on('translated.owl.carousel', function(event) {
		var item = event.item.index;
		var item = item+1
		console.log(item)

		$('.carousel-info:nth-child('+item+')').css('display', 'block');
		$('.carousel-info:nth-child('+item+')').addClass('slideInRight');
		$('.carousel-info:nth-child('+item+')').siblings().css('display', 'none');

});

// Contacto
$('.redes-sociales-iconos i').hover(function() {
	$(this).removeClass('wow bounceInRight')
	$(this).removeAttr('data-wow-delay')
	$(this).addClass('bounce')
}, function() {
		$(this).removeClass('bounce')
});

		//animated logo
		$(".navbar-brand").hover(function () {
			$(this).toggleClass("animated shake");
		});

		//animated scroll_arrow
		$(".img_scroll").hover(function () {
			$(this).toggleClass("animated infinite bounce");
		});

		//Wow Animation DISABLE FOR ANIMATION MOBILE/TABLET
		wow = new WOW(
		{
			mobile: false
		});
		wow.init();

		//SmothScroll
		$('a[href*=#]').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
			&& location.hostname == this.hostname) {
					var $target = $(this.hash);
					$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
					if ($target.length) {
							var targetOffset = $target.offset().top;
							$('html,body').animate({scrollTop: targetOffset}, 600);
							return false;
					}
			}
		});

});


function homeAnimacion(){
  jQuery('.conocenos').addClass("visible animated bounceInUp");
  setTimeout(function(){
      jQuery('.conocenos').removeClass('bounceInUp')
      jQuery('.conocenos').addClass('infinite bounce');
  },1000);
}

// Servicios
function servicios(){

	$('.view').click(function(event) {
		$(this).closest('.servicio-card').flip(true)
	});
}
$('.card-back').click(function(event) {
	$(this).closest('.servicio-card').flip(false)
});

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
