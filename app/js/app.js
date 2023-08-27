"use strict";

window.onload = function () {
  // Burger menu

  $('.burgerToggle').on('click', function () {
    $('.nav-tel').toggleClass('active');
    $('.burgerToggle .lines').toggleClass('active');
  });

  // header

  window.addEventListener('scroll', function (event) {
    return scrollHeader();
  });
  scrollHeader(); // Preliminary check

  // Swiper

  swiperFeedback();

  // Reserve-Form AJAX

  $(".reserve-form").on('submit', function (e) {
    e.preventDefault();
    if (checkForm()) {
      var data = $(this).serialize();
      $.ajax({
        url: 'php/reserve.php',
        method: 'GET',
        data: data,
        success: function success(response) {
          reserveSuccess(response);
        },
        error: function error(jqXHR, textStatus) {
          console.log(textStatus);
        }
      });
    } else {
      nonValidForm();
    }
  });

  // resize menu image

  $(window).on('resize', function (e) {
    return menuImage();
  });
  menuImage();
};
var swiperFeedback = function swiperFeedback(_) {
  // Init swiper

  new Swiper('.feedback-swiper', {
    speed: 400,
    spaceBetween: 100,
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
};

// Header position fixed

function scrollHeader(e) {
  var header = $('header');
  var headerBack = $('.header__background-blur');
  var top = header.offset()['top'];
  if (top > 0) {
    headerBack.css('backdrop-filter', 'blur(3px)');
  } else {
    headerBack.css('backdrop-filter', 'blur(0px)');
  }
  if (top + 68 > window.innerHeight) {
    headerBack.css('background-color', 'rgba(0, 0, 0, 0.326)');
  } else {
    headerBack.css('background-color', 'transparent');
  }
}
function checkForm() {
  var inputFirstname = $('#reserve-firstname').val();
  var inputLastname = $('#reserve-lastname').val();
  var inputPhone = $('#reserve-phone').val();
  if (inputFirstname.length > 0 && inputLastname.length > 0 && inputPhone.length > 0) {
    return true;
  }
  return false;
}
function nonValidForm() {
  alert('Please fill in all fields');
}

// reserve ajax Success 
function reserveSuccess(response) {
  alert('Success!');
  $('#reserve-firstname').val('');
  $('#reserve-lastname').val('');
  $('#reserve-phone').val('');
  $('.jquery-modal').css('display', 'none');
}

// resize menu image
function menuImage(e) {
  var menuImg = $('.menu-img');
  menuImg.css('max-height', "".concat(menuImg.width(), "px"));
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwiJCIsIm9uIiwidG9nZ2xlQ2xhc3MiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJzY3JvbGxIZWFkZXIiLCJzd2lwZXJGZWVkYmFjayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNoZWNrRm9ybSIsImRhdGEiLCJzZXJpYWxpemUiLCJhamF4IiwidXJsIiwibWV0aG9kIiwic3VjY2VzcyIsInJlc3BvbnNlIiwicmVzZXJ2ZVN1Y2Nlc3MiLCJlcnJvciIsImpxWEhSIiwidGV4dFN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJub25WYWxpZEZvcm0iLCJtZW51SW1hZ2UiLCJfIiwiU3dpcGVyIiwic3BlZWQiLCJzcGFjZUJldHdlZW4iLCJkaXJlY3Rpb24iLCJsb29wIiwicGFnaW5hdGlvbiIsImVsIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImhlYWRlciIsImhlYWRlckJhY2siLCJ0b3AiLCJvZmZzZXQiLCJjc3MiLCJpbm5lckhlaWdodCIsImlucHV0Rmlyc3RuYW1lIiwidmFsIiwiaW5wdXRMYXN0bmFtZSIsImlucHV0UGhvbmUiLCJsZW5ndGgiLCJhbGVydCIsIm1lbnVJbWciLCJjb25jYXQiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsTUFBTSxDQUFDQyxNQUFNLEdBQUcsWUFBWTtFQUUzQjs7RUFFQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDQyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVk7SUFDMUNELENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQ0UsV0FBVyxDQUFDLFFBQVEsQ0FBQztJQUNuQ0YsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNFLFdBQVcsQ0FBQyxRQUFRLENBQUM7RUFDaEQsQ0FBQyxDQUFDOztFQUVGOztFQUVBSixNQUFNLENBQUNLLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDQyxLQUFLO0lBQUEsT0FBS0MsWUFBWSxDQUFDLENB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QyxDQUFDMkMsR0FBRyxDQUFDLENBQUM7RUFFMUMsSUFBSUQsY0FBYyxDQUFDSSxNQUFNLEdBQUcsQ0FBQyxJQUFJRixhQUFhLENBQUNFLE1BQU0sR0FBRyxDQUFDLElBQUlELFVBQVUsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsRUFBRTtJQUFDLE9BQU8sSUFBSTtFQUFBO0VBQ2hHLE9BQU8sS0FBSztBQUNiO0FBRUEsU0FBU3ZCLFlBQVlBLENBQUEsRUFBRztFQUN2QndCLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztBQUNuQzs7QUFFQTtBQUNBLFNBQVM5QixjQUFjQSxDQUFDRCxRQUFRLEVBQUU7RUFDakMrQixLQUFLLENBQUMsVUFBVSxDQUFDO0VBQ2pCL0MsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMyQyxHQUFHLENBQUMsRUFBRSxDQUFDO0VBQy9CM0MsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMyQyxHQUFHLENBQUMsRUFBRSxDQUFDO0VBQzlCM0MsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMyQyxHQUFHLENBQUMsRUFBRSxDQUFDO0VBQzNCM0MsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDd0MsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUM7QUFDMUM7O0FBRUE7QUFDQSxTQUFTaEIsU0FBU0EsQ0FBQ2pCLENBQUMsRUFBRTtFQUNyQixJQUFJeUMsT0FBTyxHQUFHaEQsQ0FBQyxDQUFDLFdBQVcsQ0FBQztFQUM1QmdELE9BQU8sQ0FBQ1IsR0FBRyxDQUFDLFlBQVksS0FBQVMsTUFBQSxDQUFLRCxPQUFPLENBQUNFLEtBQUssQ0FBQyxDQUFDLE9BQUksQ0FBQztBQUNsRCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuXG5cdC8vIEJ1cmdlciBtZW51XG5cblx0JCgnLmJ1cmdlclRvZ2dsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHQkKCcubmF2LXRlbCcpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblx0XHQkKCcuYnVyZ2VyVG9nZ2xlIC5saW5lcycpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblx0fSk7XG5cblx0Ly8gaGVhZGVyXG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChldmVudCkgPT4gc2Nyb2xsSGVhZGVyKCkpO1xuXHRzY3JvbGxIZWFkZXIoKSAvLyBQcmVsaW1pbmFyeSBjaGVja1xuIFxuXHQvLyBTd2lwZXJcblxuXHRzd2lwZXJGZWVkYmFjaygpXG5cblx0Ly8gUmVzZXJ2ZS1Gb3JtIEFKQVhcblxuXHQkKFwiLnJlc2VydmUtZm9ybVwiKS5vbignc3VibWl0JywgZnVuY3Rpb24oZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGlmIChjaGVja0Zvcm0oKSkge1xuXG5cdFx0XHR2YXIgZGF0YSA9ICQodGhpcykuc2VyaWFsaXplKClcblx0XG5cdFx0XHQkLmFqYXgoe1xuXHRcdFx0XHR1cmw6ICdwaHAvcmVzZXJ2ZS5waHAnLFxuXHRcdFx0XHRtZXRob2Q6ICdHRVQnLFxuXHRcdFx0XHRkYXRhOiBkYXRhLFxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuXHRcdFx0XHRcdHJlc2VydmVTdWNjZXNzKHJlc3BvbnNlKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2codGV4dFN0YXR1cyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdG5vblZhbGlkRm9ybSgpO1xuXHRcdH1cblxuXHR9KTtcblxuXHQvLyByZXNpemUgbWVudSBpbWFnZVxuXG5cdCQod2luZG93KS5vbigncmVzaXplJywgKGUpID0+IG1lbnVJbWFnZSgpKTtcblx0bWVudUltYWdlKCk7XG59O1xuXG5jb25zdCBzd2lwZXJGZWVkYmFjayA9IF8gPT4ge1xuXG5cdC8vIEluaXQgc3dpcGVyXG5cblx0bmV3IFN3aXBlcignLmZlZWRiYWNrLXN3aXBlcicsIHtcblx0XHRzcGVlZDogNDAwLFxuXHRcdHNwYWNlQmV0d2VlbjogMTAwLFxuXHRcdFxuXHRcdGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuXHRcdGxvb3A6IHRydWUsXG5cdFx0XG5cdFx0cGFnaW5hdGlvbjoge1xuXHRcdFx0ZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuXHRcdH0sXG5cdFx0XG5cdFx0bmF2aWdhdGlvbjoge1xuXHRcdG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuXHRcdHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuXHRcdH0sXG5cdH0pXG59XG5cbi8vIEhlYWRlciBwb3NpdGlvbiBmaXhlZFxuXG5mdW5jdGlvbiBzY3JvbGxIZWFkZXIoZSkge1xuXHR2YXIgaGVhZGVyID0gJCgnaGVhZGVyJylcblx0dmFyIGhlYWRlckJhY2sgPSAkKCcuaGVhZGVyX19iYWNrZ3JvdW5kLWJsdXInKVxuXHR2YXIgdG9wID0gaGVhZGVyLm9mZnNldCgpWyd0b3AnXTtcblxuXHRpZiAodG9wID4gMCkge1xuXHRcdGhlYWRlckJhY2suY3NzKCdiYWNrZHJvcC1maWx0ZXInLCAnYmx1cigzcHgpJylcblx0fSBlbHNlIHtcblx0XHRoZWFkZXJCYWNrLmNzcygnYmFja2Ryb3AtZmlsdGVyJywgJ2JsdXIoMHB4KScpXG5cdH1cblxuXHRpZiAoKHRvcCArIDY4KSA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuXHRcdGhlYWRlckJhY2suY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3JnYmEoMCwgMCwgMCwgMC4zMjYpJylcblx0fSBlbHNlIHtcblx0XHRoZWFkZXJCYWNrLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICd0cmFuc3BhcmVudCcpXG5cdH1cbn1cblxuZnVuY3Rpb24gY2hlY2tGb3JtKCkge1xuXHR2YXIgaW5wdXRGaXJzdG5hbWUgPSAkKCcjcmVzZXJ2ZS1maXJzdG5hbWUnKS52YWwoKTtcblx0dmFyIGlucHV0TGFzdG5hbWUgPSAkKCcjcmVzZXJ2ZS1sYXN0bmFtZScpLnZhbCgpO1xuXHR2YXIgaW5wdXRQaG9uZSA9ICQoJyNyZXNlcnZlLXBob25lJykudmFsKCk7XG5cblx0aWYgKGlucHV0Rmlyc3RuYW1lLmxlbmd0aCA+IDAgJiYgaW5wdXRMYXN0bmFtZS5sZW5ndGggPiAwICYmIGlucHV0UGhvbmUubGVuZ3RoID4gMCkge3JldHVybiB0cnVlfVxuXHRyZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gbm9uVmFsaWRGb3JtKCkge1xuXHRhbGVydCgnUGxlYXNlIGZpbGwgaW4gYWxsIGZpZWxkcycpXG59XG5cbi8vIHJlc2VydmUgYWpheCBTdWNjZXNzIFxuZnVuY3Rpb24gcmVzZXJ2ZVN1Y2Nlc3MocmVzcG9uc2UpIHtcblx0YWxlcnQoJ1N1Y2Nlc3MhJylcblx0JCgnI3Jlc2VydmUtZmlyc3RuYW1lJykudmFsKCcnKTtcblx0JCgnI3Jlc2VydmUtbGFzdG5hbWUnKS52YWwoJycpO1xuXHQkKCcjcmVzZXJ2ZS1waG9uZScpLnZhbCgnJyk7XG5cdCQoJy5qcXVlcnktbW9kYWwnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xufVxuXG4vLyByZXNpemUgbWVudSBpbWFnZVxuZnVuY3Rpb24gbWVudUltYWdlKGUpIHtcblx0dmFyIG1lbnVJbWcgPSAkKCcubWVudS1pbWcnKVxuXHRtZW51SW1nLmNzcygnbWF4LWhlaWdodCcsIGAke21lbnVJbWcud2lkdGgoKX1weGApXG59Il19