var pages = $('.pagina');
var activeTab = $('#header .active');
var activeImg = "";

var wiperTl = new TimelineMax({
  paused: true,
});
var menuTl = new TimelineMax({
  paused: true,
});

// timelines
wiperTl.to('.wiper', 0.5, {
  left: 0,
  right: 'auto',
  width: '100vw',
}).to('.wiper', 0, {
  left: 'auto',
  right: 0,
}).to('.wiper', 0.5, {
  width: 0,
})

TweenMax.staggerFrom('.foto-container img', 0.25, {
  opacity: 0,
  delay: 0.5,
}, 0.1)

$('.tab-btn').each(function(index, tab) {
  tab.addEventListener('click', tabClicked);
})

$('.werk img').each(function(index, tab) {
  tab.addEventListener('click', openPhoto);
})

function openPhoto(event) {
  var el = event.target;
  if (activeImg === "") {
    $(el).addClass('activeImage');
    activeImg = event.target;
  } else {
  $(activeImg).removeClass('activeImage')
  if (activeImg === event.target) {
      $(el).removeClass('activeImage');
      activeImg = ""
  } else {
    $(el).addClass('activeImage');
    activeImg = event.target;
    }
  }
}

function tabClicked(event) {
  wiperTl.restart();
  showMenuMobile();
  moveActiveTab(event.target);
}

function moveActiveTab(tab) {
  showPage(tab);

  switch (tab.dataset.name) {
    case 'werk':
      animate(0, tab.clientWidth);
      break;
    case 'over':
      animate('98px', tab.clientWidth);
      break;
    case 'contact':
      animate('194px', tab.clientWidth);
      break;
  }

  function animate(x, y) {
    $('#header .active').css({
      'left': x,
      'width': y + 'px',
    })
  }
}

function showPage(data) {
  pages.each(function(index, page) {
    if (page.dataset.name === data.dataset.name) {
      TweenMax.to(page, 0, {
        display: 'block',
        delay: 0.5,
      })
    } else {
      TweenMax.to(page, 0, {
        display: 'none',
        delay: 0.5,
      })
    }
  })
}

function showMenuMobile() {
  if ($('.menu-mobile').hasClass('show')) {
    $('.menu-mobile').removeClass('show')
  } else {
    $('.menu-mobile').addClass('show');
  }
}
