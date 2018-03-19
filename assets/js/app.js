document.onreadystatechange = function() {
  var state = document.readyState;
  if (state === 'interactive') {
    document.getElementById('first').style.visibility = 'hidden';
  } else if (state === 'complete') {
    setTimeout(function() {
      document.getElementById('interactive');
      document.getElementById('load').style.visibility = 'hidden';
      document.getElementById('first').style.visibility = 'visible';
    }, 1000);
  }
};

$('div#images').sequencer({
  count: 21,
  path: './images',
  ext: 'png'
}, function() {
  $('div#preload').hide();
});
$(function() {
  var $win = $(window);
  $win.scroll(function() {
    if ($win.scrollTop() === 0)
      $('.circle').toggleClass('hidden');
    else if ($win.height() + $win.scrollTop() === $(document).height()) {
$('.circle').toggleClass('hidden');
    }
  });
});

$(window).scroll(function() {
  $('.myimage').toggleClass('relative', $(window).scrollTop() + $(window).height() > $(document).height() - $('.newdiv').height());
});
/* $(function(){
  setTimeout(function(){
$('.fly-in-text').removeClass('hola');
  },500);
})*/
$(document).ready(function() {
/* smooth scrolling for scroll to top */
  $('#to-top').bind('click', function() {
    $('body,html').animate({
      scrollTop: 0}, 
    6000);
  });

  // Easing Scroll replace Anchor name in URL and Offset Position
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 420
          }, 3500, 'easeOutBounce');
          return false;
        }
      }
    });
  });
});
$(document).ready(function() {
  $('#menu-close').click(function(e) {
    $('#sidebar-wrapper').toggleClass('active');      
    e.preventDefault();                 
  });                          
  $('#menu-toggle').hover(function(e) {
    $('#sidebar-wrapper').toggleClass('active', true);   
    e.preventDefault();                  
  });

  $('#menu-toggle').bind('click', function(e) {
    $('#sidebar-wrapper').toggleClass('active', true);  
    e.preventDefault();                  
  });                            

  $('#sidebar-wrapper').mouseleave(function(e) {
    $('#sidebar-wrapper').toggleClass('active', false);   
    e.stopPropagation();                                
    e.preventDefault();                   
  });
});

$('.about-me').on('click', function() {
  $('.sectionxs').addClass('hidden');
  $('html').css('overflow-y', 'hidden');
  $('.three-section').addClass('hidden');
  $('.first-section').addClass('hidden');
  $('.second-section').removeClass('hidden');
  $('.six-section').addClass('hidden');
  $('#to-top').addClass('hidden');
});
$('.myWorks').on('click', function() {
  $('.sectionxs').addClass('hidden');
  // $('html').css("overflow-y", "hidden");
  $('.six-section').removeClass('hidden');
  $('.three-section').addClass('hidden');
  $('.first-section').addClass('hidden');
  $('.second-section').addClass('hidden');
  $('#to-top').addClass('hidden');
});
$('.home').on('click', function() {
  $('.sectionxs').removeClass('hidden');
  $('html').css('overflow-y', 'scroll');
  $('.three-section').addClass('hidden');
  $('.first-section').removeClass('hidden');
  $('.second-section').addClass('hidden');
  $('#to-top').removeClass('hidden');
  $('.six-section').addClass('hidden');
});
$('.contactMe').on('click', function() {
  $('.sectionxs').addClass('hidden');
  $('html').css('overflow-y', 'hidden');
  $('.first-section').addClass('hidden');
  $('.second-section').addClass('hidden');
  $('.three-section').addClass('hidden');
  $('#to-top').addClass('hidden');
  $('.six-section').addClass('hidden');
});

$('.skills').on('click', function() {
  $('.sectionxs').addClass('hidden');
  $('html').css('overflow-y', 'hidden');
  $('.first-section').addClass('hidden');
  $('.second-section').addClass('hidden');
  $('.three-section').removeClass('hidden');
  $('#to-top').addClass('hidden');
  $('.six-section').addClass('hidden');
});

$(function() {
  setTimeout(function() {
    $('#splash').fadeOut(500);
  }, 2000);
});
/* Opacity Logo*/ 
$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('.logo, .logo2').css({
    opacity: function() {
      var elementHeight = $(this).height(),
        opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 0.05) + 0.0;
      return opacity;
    }
  });
});

function openNav() {
  document.getElementById('myNav').style.height = '100%';
}
function closeNav() {
  document.getElementById('myNav').style.height = '0%';
}

$('.project').hover(
  function() {
    $(this).addClass('animated infinite pulse');
  },
  function() {
    $(this).removeClass('animated infinite pulse');
  }
);