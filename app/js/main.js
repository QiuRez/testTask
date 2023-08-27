window.onload = function () {

	// Burger menu

	$('.burgerToggle').on('click', function () {
		$('.nav-tel').toggleClass('active');
		$('.burgerToggle .lines').toggleClass('active');
	});

	// header

	window.addEventListener('scroll', (event) => scrollHeader());
	scrollHeader() // Preliminary check
 
	// Swiper

	swiperFeedback()

	// Reserve-Form AJAX

	$(".reserve-form").on('submit', function(e) {
		e.preventDefault();

		if (checkForm()) {

			var data = $(this).serialize()
	
			$.ajax({
				url: 'php/reserve.php',
				method: 'GET',
				data: data,
				success: function(response) {
					reserveSuccess(response);
				},
				error: function(jqXHR, textStatus) {
					console.log(textStatus);
				}
			})
		} else {
			nonValidForm();
		}

	});

	// resize menu image

	$(window).on('resize', (e) => menuImage());
	menuImage();
};

const swiperFeedback = _ => {

	// Init swiper

	new Swiper('.feedback-swiper', {
		speed: 400,
		spaceBetween: 100,
		
		direction: 'horizontal',
		loop: true,
		
		pagination: {
			el: '.swiper-pagination',
		},
		
		navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
		},
	})
}

// Header position fixed

function scrollHeader(e) {
	var header = $('header')
	var headerBack = $('.header__background-blur')
	var top = header.offset()['top'];

	if (top > 0) {
		headerBack.css('backdrop-filter', 'blur(3px)')
	} else {
		headerBack.css('backdrop-filter', 'blur(0px)')
	}

	if ((top + 68) > window.innerHeight) {
		headerBack.css('background-color', 'rgba(0, 0, 0, 0.326)')
	} else {
		headerBack.css('background-color', 'transparent')
	}
}

function checkForm() {
	var inputFirstname = $('#reserve-firstname').val();
	var inputLastname = $('#reserve-lastname').val();
	var inputPhone = $('#reserve-phone').val();

	if (inputFirstname.length > 0 && inputLastname.length > 0 && inputPhone.length > 0) {return true}
	return false
}

function nonValidForm() {
	alert('Please fill in all fields')
}

// reserve ajax Success 
function reserveSuccess(response) {
	alert('Success!')
	$('#reserve-firstname').val('');
	$('#reserve-lastname').val('');
	$('#reserve-phone').val('');
	$('.jquery-modal').css('display', 'none');
}

// resize menu image
function menuImage(e) {
	var menuImg = $('.menu-img')
	menuImg.css('max-height', `${menuImg.width()}px`)
}