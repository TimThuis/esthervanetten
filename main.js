const pages = $('.pagina');
const photos = document.querySelectorAll('.werk img');
const activeTab = document.querySelector('#header .active');
const photoContainer = document.querySelector('.foto-container');
const wiper = document.querySelector('.wiper');
const menu = $('.menu-mobile');
let activeImg = "";
const wiperTl = new TimelineMax({
  paused: true,
});
const menuTl = new TimelineMax({
  paused: true,
});


// timelines
wiperTl.to(wiper, 0.5, {
  left: 0,
  right: 'auto',
  width: '100vw',
}).to(wiper, 0, {
  left: 'auto',
  right: 0,
}).to(wiper, 0.5, {
  width: 0,
})

TweenMax.staggerFrom('.foto-container img', 0.25, {
  opacity: 0,
  delay: 0.5,
}, 0.1)

// tabs.forEach((tab) => {
//   tab.addEventListener('click', tabClicked)
// })

$('.tab-btn').each(function(index, tab) {
  tab.addEventListener('click', tabClicked);
})

// photos.forEach((photo) => {
//   photo.addEventListener('click', openPhoto)
// })

$('.werk img').each(function(index, tab) {
  tab.addEventListener('click', openPhoto);
})


function openPhoto(event) {
  let c = 'activeImage'
  let el = event.target.classList;

  if (activeImg === "") {
    el.add(c);
    activeImg = event.target;
  } else {
  activeImg.classList.remove(c)
  if (activeImg === event.target) {
      el.remove(c);
      activeImg = ""
  } else {
    el.add(c);
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
    activeTab.style.left = 0
    activeTab.style.width = tab.clientWidth + 'px';
    break;
    case 'over':
    activeTab.style.left = '98px'
    activeTab.style.width = tab.clientWidth + 'px';
    break;
    case 'contact':
    activeTab.style.left = '194px'
    activeTab.style.width = tab.clientWidth + 'px';
    break;
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
  menu.classList.contains('show')? menu.classList.remove('show') : menu.classList.add('show');
}
